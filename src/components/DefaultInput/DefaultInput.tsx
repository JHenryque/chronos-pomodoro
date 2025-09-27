import styles from "./stylles.module.css";
// type DefaultInputProps = {
//   type?: "text" | "number" | "search";
//   label?: string;
// };

// -->iterxecion com a interseccao
// type DefaultInputProps = {
//   type?: "text" | "number" | "search";
//   label?: string;
// } & {
//   abc: number;
// };

// -->iterxecion com a uniao
type DefaultInputProps = {
  id: string;
  label?: string;
} & React.ComponentProps<"input">;

export default function DefaultInput({
  id,
  type,
  label,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {label && <label htmlFor={id}>{label}:</label>}
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
