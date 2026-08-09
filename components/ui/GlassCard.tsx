import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "glow";
};

export default function GlassCard({
  className = "",
  variant = "default",
  children,
  ...props
}: Props) {
  return (
    <div
      className={`bento-card ${
        variant === "glow"
          ? "shadow-bento-hover"
          : "shadow-bento"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
