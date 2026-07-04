import { HTMLAttributes } from "react";

export default function GlassCard({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`glass glow-border relative rounded-2xl transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
