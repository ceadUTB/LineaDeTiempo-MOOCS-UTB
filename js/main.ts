//Variables de los elementos
let fecha_1970_1977:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-izq')[0];
let fecha_2000_2025:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-der')[0];
let contenedor_info_anos_izq:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-info-anos-izq')[0];
let contenedor_info_anos_der:HTMLElement = <HTMLElement> document.getElementsByClassName('contenedor-info-anos-der')[0];
let regresar_button:HTMLElement = <HTMLElement> document.getElementById('regresar-button');
let div_anterior_oculto:HTMLElement[] = [];
let div_mostrados:HTMLElement[] = [];

function mostrar_contenido_level1(){
  fecha_1970_1977.classList.add("display-none");
  fecha_2000_2025.classList.add("display-none");
  regresar_button.classList.remove("display-none");
}

function mostrar_contenido_izquierda(){
  mostrar_contenido_level1()
  contenedor_info_anos_izq.classList.remove("display-none");
  div_anterior_oculto.push(fecha_1970_1977, fecha_2000_2025);
  div_mostrados.push(contenedor_info_anos_izq,regresar_button);
}

function mostrar_contenido_derecha(){
  mostrar_contenido_level1()
  contenedor_info_anos_der.classList.remove("display-none");
  div_anterior_oculto.push(fecha_1970_1977, fecha_2000_2025);
  div_mostrados.push(contenedor_info_anos_der,regresar_button);
}

function regresar(){
  for (let div_mostrado of div_mostrados) {
      div_mostrado.classList.add("display-none");
  }

  for (let div_oculto of div_anterior_oculto) {
      div_oculto.classList.remove("display-none");
  }
  div_anterior_oculto.splice(0,div_anterior_oculto.length);
  div_mostrados.splice(0,div_mostrados.length);
}

//Para cuando se tenga la opción de mouseover
fecha_1970_1977.onmouseover = function(){
  mostrar_contenido_izquierda();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_1970_1977.onmousedown = function(){
  mostrar_contenido_izquierda()
};

//Para cuando se tenga la opción de mouseover
regresar_button.onmouseover = function(){
  regresar();
};

//Para cuando se encuentre en moviles y no se tenga la opción mouseover
regresar_button.onmousedown = function(){
  regresar();
};

//Para cuando se tenga la opción de mouseover
fecha_2000_2025.onmouseover = function(){
  mostrar_contenido_derecha();
};
//Para cuando se encuentre en moviles y no se tenga la opción mouseover
fecha_2000_2025.onmousedown = function(){
  mostrar_contenido_derecha();
};
