document.getElementById("idheader").innerHTML = `
<h1>La cocina de Pedro</h1>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" href="index.html">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="about.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact.html">Contact</a>
      </li>
    </ul>
</nav>
`
document.getElementById("idfooter").innerHTML = `
    <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://ar.pinterest.com/" target="_blank"><i class="fa fa-pinterest"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.instagram.com/?hl=es" target="_blank"><i class="fa fa-instagram"
        aria-hidden="true"></i></a>
    <a class="redsoc" href="https://www.linkedin.com/" target="_blank"><i
        class="fa fa-linkedin" aria-hidden="true"></i></a>
    <p>Derechos reservados @2021 </p>
`

if( document.getElementById( "idtabla" )) {
  //la tabla tiene un encabezado fijo
  cad=`
    <p>Esto esta generado por JS</p>
    <table class="table table-striped">
      <tr>
        <th>Nombre</th>
        <th>Descripcion</th>
        <th>Imagen</th>
      </tr>
    `
  //contenido que varia segun data
  for(var i = 0 ;i < data.length; i++){
    cad+=`
      <tr>
        <td> ${data[i].nombre}</td>
        <td> ${data[i].descripcion}</td>
        <td> <img src=" ${data[i].imagen}"></td>
      </tr>
    `
  }
  //Agrego el cierre de la etiqueta tabla
  cad+=`
    </table>
  `
  console.log(cad)
  
    document.getElementById("idtabla").innerHTML=cad;
}











if(document.getElementById("idcarousel")){
  cad=`
    <!--un indicador por cada imagen-->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>`
    
  for(var i = 0 ;i < data.length; i++){
    car+=`<li data-target="#demo" data-slide-to="`+i+`"></li>`
  }
  cad+=`</ul>`

  cad+=`
    <!--The slideShow-->
    <div class="carousel-inner">
    `
  for(var i = 0 ;i < data.length; i++){
    cad+=`<div class="carousel-item `
    if(i==0)
      cad+= ` active"`
    else
      cad+=`">`;

  cad+=`
    <img src="${data[i].imagen}" alt="${data[i].nombre}" width="500px">
    <div class="carousel-caption">
      <h3> ${data[i].nombre} </h3>
      <p> ${data[i].descripcion} </p>
    </div>
  </div>`
  }
  cad+=`
  </div>`
  document.getElementById(" idcarousel ").innerHTML=cad;
}

