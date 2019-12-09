import { StatePrecios } from "./state/inicialState";
import preciosServicios from "./preciosServicios";

const tabla = StatePrecios.precios.map(
  p =>
    `<article class='${
      p.titulo === "PREMIUM" ? "wow pulse delay-3s" : null
    } rounded shadow card m-4 pt-5 pb-5 col-md-6 col-lg-2 col-9'>
                  <h6 class='text-center'>${p.titulo}</h6>
                  <div class='d-flex justify-content-center mt-4'>
                    <p class='display-4'>
                      <strong>
                        ${p.precio}
                      </strong>
                      </p>
                    <div class='d-flex flex-column'>
                      <p>€</p>
                    </div> 
                  </div>
                  <div class='container mt-3'>
                    ${preciosServicios(p).join("")}
                  </div>
                  <a href="#" class="stretched-link mt-4 text-center">Mas informacion</a>
                <button type="button" class="rounded shadow btn btn-primary mt-4">Contratar<i class="fas fa-angle-right ml-2"></i></button>

                </article>`
);

const TablaPrecios = `
<section id='precios' class='w-100 pt-3 pb-3 bg-light'> 
  <div class='containter h-100 mt-5 mb-5'>
    <h2 class='text-center mb-4'>${StatePrecios.titulo}</h2>
    <div class='row d-flex justify-content-center h-100 align-items-center'>
    ${tabla.join("")}
     </div> 
  </div>
</section> 
`;
export default TablaPrecios;
