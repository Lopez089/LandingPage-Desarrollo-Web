export const StateNav = {
  logo: "fas fa-cogs",
  nav: ["home", "servicios", "precios", "contacto"]
};

export const StateHeader = {
  titulo: "Necesita una web para tu negocio y no sabes por donde empezar",
  descripcion:
    "Crearemos la web de tu negocio, a posicionaremos en google para que solo te preocupes de tu producto",
  botonPrimario: "Saber mas",
  urlPrimario: "#servicios",
  botonSegundario: "Ver Precios",
  urlSegundario: "#precios",
  img: "https://image.flaticon.com/icons/svg/634/634154.svg"
};

export const SteteServicios = {
  titulo: "Nuestros Servicios",
  servicios: [
    {
      titulo: "Dj",
      descripcion:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impreso",
      img: "https://image.flaticon.com/icons/svg/1711/1711963.svg"
    },
    {
      titulo: "Fotografia",
      descripcion:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impreso",
      img: "https://image.flaticon.com/icons/svg/1809/1809931.svg"
    },
    {
      titulo: "Fotocol",
      descripcion:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impreso",
      img: "https://image.flaticon.com/icons/svg/1006/1006643.svg"
    },
    {
      titulo: "Animacion",
      descripcion:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impreso",
      img: "https://image.flaticon.com/icons/svg/531/531213.svg"
    }
  ]
};

export const StatePrecios = {
  titulo: "Nuestros Precios",
  precios: [
    {
      titulo: "BASICO",
      precio: 50,
      servicios: [
        {
          nombre: "Dj",
          contratado: true
        },
        {
          nombre: "Fotografia",
          contratado: false
        },
        {
          nombre: "Animacion",
          contratado: false
        }
      ]
    },
    {
      titulo: "PREMIUM",
      precio: 90,
      servicios: [
        {
          nombre: "Dj",
          contratado: true
        },
        {
          nombre: "Fotografia",
          contratado: true
        },
        {
          nombre: "Animacion",
          contratado: true
        },
        {
          nombre: "Fotocol",
          contratado: true
        }
      ]
    },
    {
      titulo: "ESTANDAR",
      precio: 70,
      servicios: [
        {
          nombre: "Dj",
          contratado: true
        },
        {
          nombre: "Fotografia",
          contratado: true
        },
        {
          nombre: "Animacion",
          contratado: true
        }
      ]
    }
  ]
};

export const StateTestimonios = {
  titulo: "Lo que dicen los clientes sobre nosotros.",
  testimonio: [
    {
      testimonio:
        "aaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJcmUhexVNOk4fp1ClKBCNftJwTfxVNT9mgHEAqE-GbgUM25Kd&s",
      nombre: "Pedro Perez"
    },
    {
      testimonio:
        "aaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
      img: "http://anuariocidob.org/wp-content/uploads/2018/06/Arcarons.jpg",
      nombre: "Antonio"
    },
    {
      testimonio:
        "aaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFDJubIiXLS9RIvJlHa6StpVR1Fd9fVTSMRfIwxKEbiBe03GnwKQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrhB28HwLucEAxZyE6yQzy9SoCLRrOSgBUIdHtbRWou71AwNqtcg&s",
      nombre: "Eva"
    }
  ]
};

export const StateContacto = {
  titulo: "Contacta con nosotros",
  img: "https://image.flaticon.com/icons/svg/1497/1497772.svg",
  input: [
    {
      etiqueta: "input",
      type: "text",
      name: "Nombre",
      textoInfo: ""
    },
    {
      etiqueta: "input",
      type: "email",
      name: "Email",
      textoInfo: "Nunca compartiremos su correo electrónico con nadie más.."
    },
    {
      etiqueta: "textarea",
      type: "text",
      name: "Mensaje",
      textoInfo: ""
    }
  ],
  submit: "Contactar"
};

export const StateFooter = {
  text: "©2019. Todos los Derechos Reservados. Aviso legal",
  redesSociales: [
    {
      icono: "fab fa-facebook-f",
      url: ""
    },
    {
      icono: "fab fa-instagram",
      url: ""
    },
    {
      icono: "fab fa-twitter",
      url: ""
    },
    {
      icono: "fab fa-spotify",
      url: ""
    },
    {
      icono: "fab fa-linkedin-in",
      url: ""
    }
  ]
};
