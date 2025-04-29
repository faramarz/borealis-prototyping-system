import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
  children: React.ReactNode;
}

export function Card({
  variant = "default",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6",
        variant === "default" && "bg-white dark:bg-gray-800",
        variant === "bordered" && "border border-gray-200 dark:border-gray-700",
        variant === "elevated" && "bg-white dark:bg-gray-800 shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 