import Nav from "./nav";
import { StateHeader } from "./state/inicialState";

const Header = `
  <header>
    ${Nav}
    <section class='container h-75'>
      <div class='row  h-100'>
        <div class=' col-xs-12 col-lg-6 h-100 d-flex flex-column justify-content-center'>
          <div class=''>
            <h1 class='text-center text-lg-left'>${StateHeader.titulo}</h1>
            <p class='text-center text-lg-left font-weight-lighter'>${
              StateHeader.descripcion
            }</p>
            <div class='d-flex justify-content-lg-start justify-content-center'>
              <button type="button" class="mr-3 mt-3 shadow btn btn-primary">${
                StateHeader.botonPrimario
              }</button>
              <button type="button" class="mt-3 shadow btn btn-outline-secondary">${
                StateHeader.botonSegundario
              }</button>
            </div>
          </div>
        </div>
        <div class='col-xs-12 col-lg-6 d-flex justify-content-center align-items-center'>
          <img class='w-75 d-sm-none d-md-none d-none d-lg-block' src='${
            StateHeader.img
          }'/>
        </div>
      </div>
    </section>
    <section class='d-flex justify-content-center align-items-center'>
      <i class=" d-none d-sm-none d-md-block fas fa-angle-down display-4 text-muted animated bounce infinite delay-4s"></i>
    </section>
  </header>
`;

export default Header;
