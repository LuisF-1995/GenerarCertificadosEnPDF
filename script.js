let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
  };
  
  const listado = [{
      imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
      lenguajes: "HTML y CSS",
      bimestre: "1er bimestre",
    },
    {
      imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
      lenguajes: "Javascript",
      bimestre: "2do bimestre",
    },
    {
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      lenguajes: "React JS",
      bimestre: "3er bimestre",
    },
  ];
  
  const generarCertificado = document.querySelector("#generarCertificado");
  const guardarCertificado = document.querySelector("#guardarCertificado");
  
  generarCertificado.addEventListener("click", renderizarDatosUsuario);
  guardarCertificado.addEventListener("click", recorrerListadoYRenderizarTarjetas);

  
  function obtenerDatosDelUsuario() {
    let fechaActual = new Date();
    
    datosPersona.nombre = prompt("Por favor ingrese su nombre");
    datosPersona.edad = fechaActual.getFullYear() - parseInt(prompt("Ingresa el año en que naciste"));
    datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
    datosPersona.interesPorJs = confirm("¿Te interesa javaScript?");
  }
  
  function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    let mostrarNombre = document.querySelector("#nombre");
    mostrarNombre.innerText = `${datosPersona.nombre}`;
  
    let mostrarEdad = document.getElementById("edad");
    mostrarEdad.innerText = `${datosPersona.edad}`;
  
    let mostrarCiudad = document.getElementById("ciudad");
    mostrarCiudad.innerText = `${datosPersona.ciudad}`;
  
    let mostrarInteresJs = document.getElementById("javascript");
    mostrarInteresJs.innerText = `${(datosPersona.interesPorJs) ? "Si" : "No"}`;
  }
  
  
  function recorrerListadoYRenderizarTarjetas() {
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    let cajaFila = document.getElementById("fila");
    cajaFila.innerHTML = ``;
    
    function crearCaja(imagen, lenguajes, bimestre){
  
      let cajaFila = document.getElementById("fila");
      const templateCaja = `<div class = "caja">
                            <img src="${imagen}" alt="${lenguajes}">
                            <p class="lenguajes">${lenguajes}</p>
                            <p class="bimestre">${bimestre}</p>
                            </div>`;
      
      cajaFila.innerHTML += templateCaja;
    }
    
    listado.forEach(elemento => crearCaja(elemento.imgUrl, elemento.lenguajes, elemento.bimestre));
  
  }
  
  function alternarColorTema() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    let pagina = document.getElementById("sitio");
    pagina.classList.toggle("dark");
  }
  
  /* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
  let textoOculto = document.getElementById("sobre-mi");
  window.addEventListener("keypress", function(evento){
    if ((evento.key).toLowerCase() == "f"){
      textoOculto.classList.remove("oculto");
    }
  })