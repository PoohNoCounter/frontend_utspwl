/* eslint-disable react/prop-types */
const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white px-4 py-2 text-xs rounded-md flex items-center gap-2 ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
