import { StateFooter } from "./state/inicialState";

const Footer = `
  <footer class='bg-primary text-white '>
    <div class='container'>
      <div class='row h-100 d-flex flex-wrap flex-md-column-reverse flex-column-reverse flex-lg-row'>
        <div class='d-flex justify-content-md-center justify-content-sm-center col-lg-6 col-sm-12 col-md-12'>
          <p class=' mt-4 mb-4 text-lg-left text-center'>${StateFooter.text}</p>
        </div>
        <div class=' pb-0 mt-4 mb-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center justify-content-md-center justify-content-lg-end'>
          <ul class='nav'>
            ${StateFooter.redesSociales.map(
              r =>
                `
              <li class="nav-item">
                <a class="nav-link" href="${r.url}">
                  <i class="text-white ${r.icono}"></i>
                </a>
              </li>
              `
            )}
          </ul>
        </div>
      </div>
    </div>
  </footer>
`;
export default Footer;
