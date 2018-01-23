//traemos elementos
var $searcher = $('#input-select');
var $mapa = $("#map");
var $container = $(".container-place");


// mapa
function mapFood() {
    var mapOptions = {
        center: new google.maps.LatLng(19.4203024, -99.1631142),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

//funcion que carga hace la vista splash y manda a la funcion de filtrado
function loadPage() {
   // comienza con una vista splash y se remueve la clase hidden para que
   // muestre el contenido
  $(".section-fade-out").fadeOut(2000, function(){
    $(".main-section").removeClass("hidden");
  });

  // Asignamos evento y llamamos a la funcion que va a filtrar los restaurantes
  $searcher.keyup(filterOptions);
}

// funcion para pintar todos los restaurantes
// function mainView () {
//   var restaurants = [];
//   for (var i in $foodMap2) {
//     restaurants.push($foodMap2[i]);
//   }
// }
//
// mainView();

//funcion para filtrar  los restaurantes
function filterOptions () {
  //guardamos el value del input
  var $valInput = $searcher.val().toLowerCase();
  //accedemos filtramos nuestra data con el valor que ingresa el usuario
  var food = $foodMap2[$valInput];

  if($('#input-select').val().trim().length > 0){
    for (var i in $foodMap2) {
      var places = i
      if(places.toLowerCase() === $valInput){
        //si el valor ingresado por el usuario es igual a la key del tipo de comida en la data
        //llamamos a la funcion para pintar la información filtrada y le pasamos la data como argumento
         paintOptions(food);
      }
    }
  }
}

//funcion para pintar los restaurantes seleccionados
function paintOptions(food){
  //Limpiamos la imagenes de nuestro contenedor
  $container.empty();
  // console.log(food);
  for (var i = 0; i < food.length; i++) {
    //iteramos en la data, creamos elementos y asignamos sus atributos
    var restaurants = food[i];
    var images = $('<img>');
    images.attr({'class':'images-food, col-xs-3', 'data-toggle':'modal', 'data-target':'#modal-show', 'src':restaurants['img']});
    $container.append(images);

    //limpiamos el input despues de la busqueda
    $searcher.val("");
  }
  //llamamos a la funcion que pinta en el modal
  paintInformationModal(food);
}

//funcion para pintar la informacion de los restaurates en el modal
function paintInformationModal(food) {
  var type = [];
  var places;
  var data;
  var $modal = $("#modal-body");

  $modal.empty();
  //limpiamos el modal

   for (var i = 0; i < food.length; i++) {
     //iteramos en el objeto que selecciona el usuario
     type.push(food[i]);
  }

  for (var j = 0; j < type.length; j++) {
    // iteramos en la informacion seleccionada
    places = type[j];

      // console.log(places['name']);
      // creamos elementos
      var $name = $("<p />");
      var $slogan = $("<p />");
      var $address = $("<p />");
      var $prices = $("<p />");
      var $services = $("<p />");

      // asignamos valor
      $name.text(places['name']);
      $slogan.text(places['slogan']);
      $address.text(places['address']);
      $prices.text(places['prices']);
      $services.text(places['services']);

      // los agregamos al modal
      $modal.append($name);
      $modal.append($slogan);
      $modal.append($address);
      $modal.append($prices);
      $modal.append($services);
  }
}

$(document).ready(loadPage);
