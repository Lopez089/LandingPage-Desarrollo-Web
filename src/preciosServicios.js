const preciosServicios = p =>
  p.servicios.map(
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
  );
export default preciosServicios;
