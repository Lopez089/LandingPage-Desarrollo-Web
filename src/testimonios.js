import { StateTestimonios } from "./state/inicialState";

const testimonio = StateTestimonios.testimonio.map(
  t =>
    `
   <article class='rounded wow zoomInDown card col-10 col-lg-3 col-md-8  shadow-lg pb-4 mt-5'>
     <div class='container d-flex flex-column align-items-center'>
       <i class="fas fa-quote-right display-4 p-4 text-primary"></i>
       <p class=' text-center font-weight-lighter  '>
         ${t.testimonio}
       </p>
       <div class='border-top col-6 m-3'></div>
       <img class='rounded-circle w-50' src='${t.img}'/> 
       <p class='h6 text-muted small mt-2'>${t.nombre}</p>
     </div>
   </article>
 `
);

const Testimonios = `
  <section id='testimonio' class='pb-5'>
   <h2 class='text-center m-5'>${StateTestimonios.titulo}</h2>
   <div class='container d-flex justify-content-around flex-wrap'>
   ${testimonio.join("")}</div>
  </section>
`;
export default Testimonios;
