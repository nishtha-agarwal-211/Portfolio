import { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "solid" | "ghost";
};

export default function GradientButton({
  className = "",
  variant = "solid",
  children,
  ...props
}: Props) {
  if (variant === "ghost") {
    return (
      <a
        className={`glass shimmer inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      className={`shimmer relative inline-flex items-center gap-2 rounded-full bg-signal-gradient px-6 py-3 text-sm font-semibold text-void shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(124,58,237,0.4)] cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
