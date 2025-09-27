//import styles from "./stylles.module.css";
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

export default function DefaultInput({ id, type, label }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{label}:</label>
      <input id={id} type={type} />
    </>
  );
}
