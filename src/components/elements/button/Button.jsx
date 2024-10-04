import PropTypes from 'prop-types';

const Button = ({ 
    text, 
    type = "button", 
    onClick, 
    variant = "filled", 
    size = "md" 
}) => {
  const baseStyle = "rounded-full transition duration-200 h-12 font-semibold";

  const filledStyle = "bg-black text-white hover:bg-gray-800";
  const outlineStyle = "border border-black text-black hover:bg-gray-200";

  const variantStyle = variant === "filled" ? filledStyle : outlineStyle;

  // Size styles
  const sizeStyle = {
    sm: "px-2 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${sizeStyle[size]}`}
    >
      {text}
    </button>
  );
};

// Define prop types
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['filled', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Button;
