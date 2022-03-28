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
const downPdf = document.getElementById("guardarCertificadoPDF");

generarCertificado.addEventListener("click", generacionCertificado);
downPdf.addEventListener("click", descargarPDF);

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
    
    cajaFila.innerHTML += templateCaja;
  }
  
  datosPersona.forEach(persona => crearCaja(persona.nombreEstudiante, persona.documento, persona.descripcionCurso, persona.duracionCurso, persona.firmaCapacitador, persona.nombreCapacitador));

}


function descargarPDF(){
      downPdf.onclick = function() {
          html2canvas(document.body, {
              onrendered:function(canvas) {

                  var contentWidth = canvas.width;
                  var contentHeight = canvas.height;

                  //一页pdf显示html页面生成的canvas高度;
                  var pageHeight = contentWidth / 595.28 * 841.89;
                  //未生成pdf的html页面高度
                  var leftHeight = contentHeight;
                  //pdf页面偏移
                  var position = 0;
                  //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                  var imgWidth = 555.28;
                  var imgHeight = 555.28/contentWidth * contentHeight;

                  var pageData = canvas.toDataURL('image/jpeg', 1.0);

                  var pdf = new jsPDF('', 'pt', 'a4');
                  //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                  //当内容未超过pdf一页显示的范围，无需分页
                  if (leftHeight < pageHeight) {
                      pdf.addImage(pageData, 'JPEG', 20, 0, imgWidth, imgHeight );
                  } else {
                      while(leftHeight > 0) {
                          pdf.addImage(pageData, 'JPEG', 20, position, imgWidth, imgHeight)
                          leftHeight -= pageHeight;
                          position -= 841.89;
                          //避免添加空白页
                          if(leftHeight > 0) {
                              pdf.addPage();
                          }
                      }
                  }

                  pdf.save('content.pdf');
              }
          })
      }
}