type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  size: ButtonSize;
  variant?: "primary" | "secondary" | "error";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const buttonSize: Record<ButtonSize, string> = {
  sm: "py-1 px-2 text-xs",
  md: "py-2 px-3 text-sm",
  lg: "py-3 px-4 text-md",
};

const Button = ({
  children,
  size,
  variant = "primary",
  onClick,
}: ButtonProps) => {
  const variantColor = {
    primary: "bg-blue-600 text-white border-blue-600",
    secondary: "bg-white text-gray-500 border-gray-500",
    error: "bg-red-600 text-white border-red-600",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex justify-center border rounded ${variantColor[variant]}
      ${buttonSize[size]} font-semibold shadow-sm`}
    >
      {children}
    </button>
  );
};

export default Button;
