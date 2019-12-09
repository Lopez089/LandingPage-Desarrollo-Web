import { StateNav } from "./state/inicialState";

const item = StateNav.nav.map(
  item =>
    `<li class="nav-item mr-5">
                  <a data-scroll class="nav-link" href='#${item}'>${item.toUpperCase()}</a>
                </li>`
);

const Nav = `
  <nav id='home' class=" container navbar navbar-expand-lg navbar-light bg-transparent">
      <a class="navbar-brand " href="#"><i class="h1 ${
        StateNav.logo
      } text-primary"></i></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex-lg justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          ${item.join("")}
        </ul>
      </div>
  </nav>
`;
export default Nav;
