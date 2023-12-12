const Button = ({
  children,
  onClick,
  title,
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      className={`${className} btn d-flex align-items-center`}
      onClick={onClick}
      title={title}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
