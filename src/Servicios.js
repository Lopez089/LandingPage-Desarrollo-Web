import { SteteServicios } from "./state/inicialState";

const servicio = SteteServicios.servicios.map(
  (s, i) =>
    `<article class='d-flex flex-wrap mt-5 mb-5 ${
      i % 2 !== 0 ? "flex-row-reverse" : null
    }'>
                    <div class='wow ${
                      i % 2 !== 0 ? "fadeInRight" : "fadeInLeft"
                    }  col-lg-6 col-12 d-flex justify-content-center'>
                      <img class='h-100 w-100 p-5' src='${s.img}'/>
                    </div>
                    <div class='wow ${
                      i % 2 !== 0 ? "fadeInLeft " : "fadeInRight"
                    } col-lg-6 col-12 d-flex align-items-center'>
                      <div>
                        <h4 class='text-center text-lg-left'>${s.titulo}</h4>
                        <p class='font-weight-lighter text-center text-lg-left'>${
                          s.descripcion
                        }</p>
                      </div>
                    </div>
                  </article>`
);

const Servicios = `
  <section id='servicios' class='container pt-3 pb-5  '>
    <h2 class='text-center mt-5 mb-5'>${SteteServicios.titulo}</h2>
    ${servicio.join("")}
    
  </section>
`;

export default Servicios;
