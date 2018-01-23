$(document).ready(loadPage);
var $searcher = $('#input-select');
var $mapa = $("#map");
// var $valInput = $searcher.val().toLowerCase();

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

//filtramos los restaurantes
function filterOptions () {
  //guardamos el value del input
  var $valInput = $searcher.val().toLowerCase();
  //accedemos filtramos nuestra data con el valor que ingresa el usuario
  var food = $foodMap2[$valInput];
  // console.log(food);
  if($('#input-select').val().trim().length > 0){
    for (var i in $foodMap2) {
      var places = i
      if(places.toLowerCase() === $valInput){
        //llamamos a la funcion para pintar la información filtrada y le pasamos la data como argumento
         paintOptions(food);
      }
    }
  }
}

function paintOptions(food){
  //traemos nuestros elementos del html
  var $container = $(".container-place");
  var modalTitle = $(".modal-title");
  var modalBody = $(".modal-body");
  //Limpiamos la imagenes de nuestro contenedor
  $container.empty();
  // console.log(food);
  for (var i = 0; i < food.length; i++) {
    //iteramos en la data y creamos elementos y asignamos sus atributos
    var restaurants = food[i];
    var images = $('<img>');
    images.attr({'class':'images-food', 'data-toggle':'modal', 'data-target':'#modal-show', 'src':restaurants['img']});
    $container.append(images);


  }
  paintInformationModal(food);
}


function paintInformationModal(food) {

  var type = [];
  var places;
  var data;
  var $modal = $("#modal-body");

   for (var i = 0; i < food.length; i++) {
    type.push(food[i]);
    // var type2 = food[i];
  }
  // console.log(type);
  for (var j = 0; j < type.length; j++) {
    // console.log(type[j]);
    places = type[j];
    // places.push(type[j]);
      console.log(places['name']);

      var $slogan = $("<p />");

      $slogan.text(places['slogan']);
      $modal.append($slogan);
    // for (var n in places) {
    //  data = places[n];
    // }
  }

  // console.log(places);


     // var $slogan = $("<p />");
     //
     //
     // $slogan.text(places);
     //
     // $modal.append($slogan);
     // $modal.append($direction);
     // $modal.append($precios);
     // $modal.append($services);

     // $modal.append($mapa);


}
