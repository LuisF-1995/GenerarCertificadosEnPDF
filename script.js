let datosPersona = [
  {
    nombreEstudiante: "Luis Rodriguez",
    documento: 1093780708,
    descripcionCurso: "“Diseño y dimensionamiento de la infraestructura de soporte para el cumplimiento del Reglamento para redes internas de telecomunicaciones RITEL de acuerdo con la resolución 5993 de 2020”",
    duracionCurso: "El curso tuvo una duración de treinta y cinco (35) horas, dictado en Febrero de 2022",
    firmaCapacitador: "./img/firma.png",
    nombreCapacitador: "Ing. Marcos Quintana"
  },
  {
    nombreEstudiante: "Angie Andrea Pulido",
    documento: 1093778168,
    descripcionCurso: "“Diseño y dimensionamiento de la infraestructura de soporte para el cumplimiento del Reglamento para redes internas de telecomunicaciones RITEL de acuerdo con la resolución 5993 de 2020”",
    duracionCurso: "El curso tuvo una duración de treinta y cinco (35) horas, dictado en Febrero de 2022",
    firmaCapacitador: "./img/firma.png",
    nombreCapacitador: "Ing. Oliver Arenas"
  },
  {
    nombreEstudiante: "Ana Botero",
    documento: 1093779144,
    descripcionCurso: "“Diseño y contruccion de instalaciones electricas RETIE/RETILAP”",
    duracionCurso: "El curso tuvo una duración de treinta y cinco (40) horas, dictado en Febrero de 2022",
    firmaCapacitador: "./img/firma.png",
    nombreCapacitador: "Ing. Felipe Andres Henao"
  },
  {
    nombreEstudiante: "Felipe Andres Henao",
    documento: 1093780708,
    descripcionCurso: "“REVIT basico y avanzado para modelado 3D, con tecnologias BIM”",
    duracionCurso: "El curso tuvo una duración de treinta y cinco (60) horas, dictado en Marzo de 2022",
    firmaCapacitador: "./img/firma.png",
    nombreCapacitador: "Ing. Luis F. Rodriguez"
  },
  {
    nombreEstudiante: "MARIA RANGEL",
    documento: 630315248,
    descripcionCurso: "“Cocina para perritos”",
    duracionCurso: "El curso tuvo una duración de treinta y cinco (20) horas, dictado en Enero de 2022",
    firmaCapacitador: "./img/firma.png",
    nombreCapacitador: "Chef. Ana Botero"
  }
];
  
const generarCertificado = document.querySelector("#generarCertificado");
generarCertificado.addEventListener("click", generacionCertificado);

function generacionCertificado() {

  let cajaFila = document.querySelector(".certificadoCreado");
  cajaFila.innerHTML = ``;
  
  function crearCaja(nombre, documento, descripcionCurso, duracion, firmaCapacitador, nombreCapacitador){

    let cajaFila = document.querySelector(".certificadoCreado");
    const templateCaja = `<section class="certificado">
                          <img src="./img/plantillaCertificado.png" alt="Fondo certificado">
                          <div class="datos">
                          <p id="nombre"><strong>${nombre}</strong></p>
                          <p id="cedula">${documento}</p>
                          <p id="tituloAsistio">Asistió al curso:</p>
                          <p id="descripcionCurso">${descripcionCurso}</p>
                          <p id="duracionCurso">${duracion}</p>
                            <div class="capacitador">
                                <img src="${firmaCapacitador}" alt="Firma capacitador">
                                <p id="nombreCapacitador"><strong>${nombreCapacitador}</strong><br>Capacitador</p>
                            </div>
                          </div>
                          </section>`;
    
    cajaFila.innerHTML = templateCaja;
  }
  
  // datosPersona.forEach(persona => crearCaja(persona.nombreEstudiante, persona.documento, persona.descripcionCurso, persona.duracionCurso, persona.firmaCapacitador, persona.nombreCapacitador));

  crearCaja(datosPersona[0].nombreEstudiante, datosPersona[0].documento, datosPersona[0].descripcionCurso, datosPersona[0].duracionCurso, datosPersona[0].firmaCapacitador, datosPersona[0].nombreCapacitador);

}


document.addEventListener("DOMContentLoaded", () => {
  // Escuchamos el click del botón
  const $boton = document.querySelector("#btnCrearPdf");
  $boton.addEventListener("click", () => {
      const $elementoParaConvertir = document.body; // <-- Aquí puedes elegir cualquier elemento del DOM
      html2pdf()
          .set({
              margin: 1,
              filename: 'documento.pdf',
              image: {
                  type: 'jpeg',
                  quality: 0.98
              },
              html2canvas: {
                  scale: 3, // A mayor escala, mejores gráficos, pero más peso
                  letterRendering: true,
              },
              jsPDF: {
                  unit: "in",
                  format: "a3",
                  orientation: 'portrait' // landscape o portrait
              }
          })
          .from($elementoParaConvertir)
          .save()
          .catch(err => console.log(err));
  });
});