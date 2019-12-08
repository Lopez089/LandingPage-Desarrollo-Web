import { StatePrecios } from "./state/inicialState";

const TablaPrecios = `
<section id='precios' class='w-100 pt-3 pb-3 bg-light'> 
  <div class='containter h-100 mt-5 mb-5'>
    <h2 class='text-center mb-4'>${StatePrecios.titulo}</h2>
    <div class='row d-flex justify-content-center h-100 align-items-center'>
    ${StatePrecios.precios.map(
      p =>
        `<article class='${
          p.titulo === "PREMIUM" ? "wow pulse delay-3s" : null
        }rounded shadow card m-4 pt-5 pb-5 col-md-8 col-lg-2 col-sm-12'>
          <h6 class='text-center'>${p.titulo}</h6>
          <div class='d-flex justify-content-center mt-4'>
            <p class='display-4'>
              <strong>
                ${p.precio}
              </strong>
              </p>
            <div class='d-flex flex-column'>
              <p>€</p>
              <p class='text-muted'>/h</p>
            </div> 
          </div>
          <div class='container mt-3'>
            ${p.servicios.map(
              s =>
                `
              <div class='d-flex justify-content-between align-items-center border-bottom pb-2 pt-2'>
                <p class='mb-0 font-weight-lighter'>${s.nombre}</p>
                <i class="${
                  s.contratado === true
                    ? "fas fa-check text-info"
                    : "fas fa-times text-danger"
                }"></i>
              </div>
              `
            )}
          </div>
          <a href="#" class="stretched-link mt-4 text-center">Mas informacion</a>
        <button type="button" class="shadow btn btn-primary mt-4">Contratar<i class="fas fa-angle-right ml-2"></i></button>

        </article>`
    )}
     </div> 
  </div>
</section> 
`;
export default TablaPrecios;
