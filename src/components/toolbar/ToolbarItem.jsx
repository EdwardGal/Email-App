export const ToolbarItem = ({ action, title, icon, onClick }) => {
  return (
    <button
      type="button"
      data-action={action}
      title={title}
      onClick={() => onClick(action)}
    >
      <span className="material-symbols-outlined">{icon}</span>
    </button>
  );
};
