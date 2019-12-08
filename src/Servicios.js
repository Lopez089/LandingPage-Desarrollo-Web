import { SteteServicios } from "./state/inicialState";

const Servicios = `
  <section id='servicios' class='container pt-3 pb-5  '>
    <h2 class='text-center mt-5 mb-5'>${SteteServicios.titulo}</h2>
    ${SteteServicios.servicios.map(
      (s, i) =>
        `<article class='d-flex flex-wrap h-100 mt-5 mb-5 ${
          i % 2 !== 0 ? "flex-row-reverse" : null
        }'>
        <div class='wow ${
          i % 2 !== 0 ? "fadeInRight" : "fadeInLeft"
        } delay-1s col-lg-6 col-sm-12 d-flex justify-content-center'>
          <img class='w-50' src='${s.img}'/>
        </div>
        <div class='wow ${
          i % 2 !== 0 ? "fadeInLeft " : "fadeInRight"
        } delay-1s col-lg-6 col-sm-12 d-flex align-items-center'>
          <div>
            <h4 class='text-center text-lg-left'>${s.titulo}</h4>
            <p class='font-weight-lighter text-center text-lg-left'>${
              s.descripcion
            }</p>
          </div>
        </div>
      </article>`
    )}
    
  </section>
`;

export default Servicios;
