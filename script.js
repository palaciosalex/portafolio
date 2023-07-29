var proyectos= [
                {
                    titulo: "Pagina de Servicio web",
                    enlace_foto: "img/pagina.PNG",
                    descripcion: "Pagina web informativa sobre servicios web",
                    tecnologias: ["HTML","CSS"],
                    link_vermas: "https://palaciosalex.github.io/servicioweb/",
                    link_demo: "https://palaciosalex.github.io/servicioweb/",
                    fotos:  [
                                { 
                                enlace: "img/proyecto1/img1.PNG", 
                                descripcion: ""
                                },
                                { 
                                enlace: "img/proyecto1/img2.PNG", 
                                descripcion: ""
                                },
                                { 
                                enlace: "img/proyecto1/img3.PNG", 
                                descripcion: ""
                                },
                                { 
                                enlace: "img/proyecto1/img4.PNG", 
                                descripcion: ""
                                }

                            ]
                },
                {
                    titulo: "Sistema de Asistencias",
                    enlace_foto: "img/pagina2.PNG",
                    descripcion: "Sistema de registro de asistencias y empleados",
                    tecnologias: ["Laravel","PHP","Java Script","HTML","CSS", "Boostrap", "Mysql", "JQuery"],
                    link_vermas: "https://palaciosalex.github.io/servicioweb/",
                    link_demo:   "",
                    fotos:  [
                                { 
                                enlace: "img/proyecto2/img1.PNG", 
                                descripcion: "Para las tablas se utilizo el plugin DataTables"
                                },
                                { 
                                enlace: "img/proyecto2/img2.PNG", 
                                descripcion: ""
                                },
                                { 
                                enlace: "img/proyecto2/img3.PNG", 
                                descripcion: "Se utilizo el plugin SweetAlert para mostrar mensaje"
                                },
                                { 
                                enlace: "img/proyecto2/img4.PNG", 
                                descripcion: "El sistema permite importa las asistencias mediante un archivo Excell."
                                },
                                                                { 
                                enlace: "img/proyecto2/img5.PNG", 
                                descripcion: ""
                                }


                            ]
                },
                {
                    titulo: "Sistema Planilla",
                    enlace_foto: "img/proyecto3/img2.PNG",
                    descripcion: "Contiene CRUD para empleados y cargos",
                    tecnologias: ["Java","Mysql"],
                    link_vermas: "https://palaciosalex.github.io/servicioweb/",
                    link_demo:   "",
                    fotos:  [
                                { 
                                enlace: "img/proyecto3/img1.PNG", 
                                descripcion: ""
                                },
                                { 
                                enlace: "img/proyecto3/img2.PNG", 
                                descripcion: ""
                                },
                            ]
                }
]




document.addEventListener("DOMContentLoaded", function(event) {

    var contenido = "";
    var indice = 0;
    proyectos.forEach((proyecto) => {

        
        contenido += `
            <div class="col">
                    <div class="card" style="width: 18rem;">
                      <img src="${proyecto.enlace_foto}" class="card-img-top" alt="..." >
                      <div class="card-body">
                        <h5 class="card-title">${proyecto.titulo}</h5>
                        <p class="card-text">${proyecto.descripcion}</p>
                        <p class="card-text"><strong>Tecnologias:</strong></p>
                        <p class="card-text">`;

        proyecto.tecnologias.forEach((tecnologia) => {

            contenido += `<span class="badge text-bg-secondary">${tecnologia}</span>&nbsp;`;

        });
        contenido +=    `</p>
                          <a href="" class="btn btn-primary" target="_blank" data-bs-toggle="modal" data-bs-target="#proyecto" onclick="MostrarModal(${indice})">Ver Mas</a>&nbsp;`;


        if(proyecto.link_demo != ""){
            contenido += `<a href="https://palaciosalex.github.io/servicioweb/" class="btn btn-success" target="_blank">Ver Demo</a>`;
        }

        contenido +=   `
                      </div>
                    </div>
            </div>`;
        

        indice ++;
        
    });
    document.getElementById("projects").innerHTML = contenido;
    
});

function MostrarModal(indice)
{
    var proyecto = proyectos[indice];
    var fotos_modal = "";
    document.getElementById("titulo-modal").innerHTML = proyecto.titulo;
    document.getElementById("galeria").src = proyecto.fotos[0].enlace;
    document.getElementById("mitexto").innerHTML = proyecto.fotos[0].descripcion;

    proyecto.fotos.forEach((foto) => {
        fotos_modal += `<li><a onclick="cargarfoto('${foto.enlace}','${foto.descripcion}')"><img src="${foto.enlace}" alt=""></a></li>`;
    });

    document.getElementById("fotos-modal").innerHTML = fotos_modal;
}


function cargarfoto(enlace, descripcion=""){
    document.getElementById("galeria").src = enlace;
    document.getElementById("mitexto").innerHTML = descripcion;
}