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
  img: "https://image.flaticon.com/icons/svg/1688/1688451.svg"
};

export const SteteServicios = {
  titulo: "Nuestros Servicios",
  servicios: [
    {
      titulo: "Resposive Desing",
      descripcion:
        "Adaptamos el diseño a todas las pantallas que use tus usuarios para que disfrute de la mejor experiencia en tu sitio web",
      img: "https://image.flaticon.com/icons/svg/1488/1488592.svg"
    },
    {
      titulo: "Diseño personalizado",
      descripcion:
        "Diseño personalizado para tu sitio web para que tus usuarios tenga la mejor experiencias",
      img: "https://image.flaticon.com/icons/svg/1688/1688441.svg"
    },
    {
      titulo: "Analitica Web",
      descripcion:
        "Intalacion de analitica en tu sitio web para conocer en todo momento el comportamiento de tus usuarios y poder mejorar tus combersiones ",
      img: "https://image.flaticon.com/icons/svg/1925/1925173.svg"
    },
    {
      titulo: "Pruevas con usuarios reales",
      descripcion:
        "Probamos el sitio web con tus usuarios antes de sacarlo al mercado para mejoras la web antes de salir al mercado",
      img: "https://image.flaticon.com/icons/svg/1508/1508867.svg"
    }
  ]
};

export const StatePrecios = {
  titulo: "Nuestros Precios",
  precios: [
    {
      titulo: "BASICO",
      precio: 250,
      servicios: [
        {
          nombre: "Sitio Web",
          contratado: true
        },
        {
          nombre: "Diseño Personalizado",
          contratado: true
        },
        {
          nombre: "Resposive Desing",
          contratado: false
        },
        {
          nombre: "Analitica Web",
          contratado: false
        },
        {
          nombre: "Pruebas con usuarios",
          contratado: false
        }
      ]
    },
    {
      titulo: "PREMIUM",
      precio: 999,
      servicios: [
        {
          nombre: "Sitio Web",
          contratado: true
        },
        {
          nombre: "Diseño Personalizado",
          contratado: true
        },
        {
          nombre: "Resposive Desing",
          contratado: true
        },
        {
          nombre: "Analitica Web",
          contratado: true
        },
        {
          nombre: "Pruebas con usuarios",
          contratado: true
        },
        {
          nombre: "Hosting y Dominio",
          contratado: true
        }
      ]
    },
    {
      titulo: "ESTANDAR",
      precio: 500,
      servicios: [
        {
          nombre: "Sitio Web",
          contratado: true
        },
        {
          nombre: "Diseño Personalizado",
          contratado: true
        },
        {
          nombre: "Resposive Desing",
          contratado: true
        },
        {
          nombre: "Analitica Web",
          contratado: true
        },
        {
          nombre: "Pruebas con usuarios",
          contratado: false
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
  img: "https://image.flaticon.com/icons/svg/839/839618.svg",
  input: [
    {
      etiqueta: "input",
      type: "text",
      name: "Nombre",
      textoInfo: ""
    },
    {
      etiqueta: "input",
      type: "text",
      name: "Compañia",
      textoInfo: ""
    },
    {
      etiqueta: "input",
      type: "text",
      name: "Email",
      textoInfo: ""
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
      icono: "fab fa-linkedin-in",
      url: ""
    }
  ]
};
