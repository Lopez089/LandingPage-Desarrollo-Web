import { StateContacto } from "./state/inicialState";

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
          <form>
            ${StateContacto.input.map(
              i =>
                `<div class="form-group">
                  ${
                    i.etiqueta === "textarea"
                      ? `
                      <textarea class="form-control" placeholder="${i.name}" row='3'></textarea>`
                      : `<${i.etiqueta} type="${i.type}" class="form-control" placeholder="${i.name}"/> `
                  }
                </div>`
            )}
            <button type="submit" class="btn btn-primary">${
              StateContacto.submit
            }</button>
            </form>
        </div>
      </div>
    </div>
  </section>
`;
export default Contact;
