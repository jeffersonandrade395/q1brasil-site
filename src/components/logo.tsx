import { Q1Icon } from "./q1-icon";

/**
 * Lockup da marca: ícone Q1 + wordmark "Brasil".
 * O ícone já carrega o "Q1", então o wordmark é só "Brasil" — junto lê
 * "Q1 Brasil" sem repetir. (O © do rodapé é copyright, texto à parte.)
 * Use em qualquer lugar que precise do lockup; um conserto cobre todos.
 */
export function Logo({
  iconClassName = "h-9 w-9 rounded-md",
  textClassName,
}: {
  iconClassName?: string;
  textClassName?: string;
}) {
  return (
    <>
      <Q1Icon title="Q1" className={iconClassName} />
      <span className={textClassName}>Brasil</span>
    </>
  );
}
