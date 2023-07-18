var textos=[
 "Para las tablas se utilizo el plugin DataTables",
 "",
 "Se utilizo el plugin SweetAlert para mostrar mensaje",
 "El sistema permite importa las asistencias mediante un archivo Excell. Usando el paquete Carbon",
]


function cargarfoto(img, txt,nproy){
document.getElementById("galeria"+nproy).src="img/proyecto"+nproy+"/img"+img+".png";
document.getElementById("mitexto").innerHTML=textos[txt];
}