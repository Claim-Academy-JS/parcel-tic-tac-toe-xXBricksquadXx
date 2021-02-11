/**
 * TODO: Import some components
 * U might also need to import 'api' to get your initial data?
 */
import { Main } from "./components";

const root = document.getElementById("root");

const state = {
  board: Array.from({ length: 9 }, () => ""),
  currentChar: "X",
};

const render = (st = state) => {
  root.innerHTML = Main(st);

  document.querySelectorAll("main div").forEach((div) => {
    div.addEventListener("click", function handleClick() {
      console.log(this.dataset.num);
    });
  });
};

render();

// TODO: Use api to 'fetch' 'initial data?' Maybe 'api.index()'?
