import type React from "react";
import styles from "./stylles.module.css";

// -->iterxecion com a uniao
type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red" | "blue";
} & React.ComponentProps<"button">;

export default function DefaultButton({
  icon,
  color,
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button
        className={`${styles.button} ${styles[color || "green"]}`}
        {...props}
      >
        {icon}
      </button>
    </>
  );
}
