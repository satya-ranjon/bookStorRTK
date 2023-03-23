const Button = ({ isActive = false, children, ...attributes }) => {
  return (
    <button
      {...attributes}
      className={`lws-filter-btn ${isActive && "active-filter"}`}>
      {children}
    </button>
  );
};

export default Button;
