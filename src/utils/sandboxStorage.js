import { SANDBOX_STORAGE_KEY, STORAGE_STATE } from './constants';

const getSandboxStorageState = () => {
  try {
    const raw = localStorage.getItem(SANDBOX_STORAGE_KEY);
    if (!raw || raw === '[]') {
      return { status: STORAGE_STATE.EMPTY, data: [] };
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return { status: STORAGE_STATE.CORRUPTED, data: [] };
    }

    if (parsed.length === 0) {
      return { status: STORAGE_STATE.EMPTY, data: [] };
    }

    return { status: STORAGE_STATE.OK, data: parsed };
  } catch {
    return { status: STORAGE_STATE.CORRUPTED, data: [] };
  }
};

const saveSandboxToStorage = (templates) => {
  try {
    localStorage.setItem(SANDBOX_STORAGE_KEY, JSON.stringify(templates));
    return true;
  } catch {
    return false;
  }
};

const clearSandboxStorage = () => {
  try {
    localStorage.removeItem(SANDBOX_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
};


export { STORAGE_STATE, getSandboxStorageState, saveSandboxToStorage, clearSandboxStorage };
