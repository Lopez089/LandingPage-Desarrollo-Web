import { StateContacto } from "./state/inicialState";

function formDatos(e) {
  e.preventDefault(), console.log("nlkjlkj");
}

const form = StateContacto.input.map(
  i =>
    `<div class="form-group">
      ${
        i.etiqueta === "textarea"
          ? `
          <textarea class="form-control rounded " placeholder="${i.name}" row='3'></textarea>`
          : `<${i.etiqueta} type="${i.type}" class="form-control rounded" placeholder="${i.name}" name="${i.name}"> `
      }
    </div>`
);

const Contact = `
  <section id='contacto' class='bg-light h-75 mt-5'>
    <div class='h-100 container d-flex flex-wrap'>
      <div class='col-lg-6 col-sm-12 w-100 d-flex justify-content-center align-items-center'>
        <img class='w-75 d-sm-none d-md-none d-none d-lg-block' src='${
          StateContacto.img
        }' alt=''/>
      </div>
      <div class='col-lg-6 col-sm-12 h-100 d-flex justify-content-center align-items-center'>
        <div>
          <p class='h3 pb-5'>${StateContacto.titulo}</p>
          <form onsubmit="${e => formDatos(e)}">
            ${form.join("")}
            <button type="submit" value="Submit" class="rounded btn btn-primary">${
              StateContacto.submit
            }</button>
          </form>
        </div>
      </div>
    </div>
  </section>
`;

export default Contact;
