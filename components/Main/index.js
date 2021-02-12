import Board from "./Board";

function renderError(msg) {
  // TODO: If there is an error, then render a '<p></p>' with that error message
  return `<p>${msg}</p>`;
}
export default ({ board, error }) => `<main>
${Board(board)}



${error ? renderError(error) : ""}

</main>`;
