$(document).ready(loadPage);
var $searcher = $('#input-select');


// mapa de google maps
function mapFood() {
    var mapOptions = {
        center: new google.maps.LatLng(19.4203024, -99.1631142),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}


function loadPage() {
   // comienza con una vista splash y se remueve la clase d-none para que
   // muestre el contenido
  $(".section-fade-out").fadeOut(2000, function(){
    $(".main-section").removeClass("hidden");
  });

  // Asignamos evento y llamamos a la funcion que va a filtrar los restaurantes
  $searcher.keyup(filterOptions);
}

// console.log($foodMap[2]['type']);
//
// function filterOptions () {
//   var food = []
//   // guardamos el value de input
//   var $valInput = $searcher.val().toLowerCase();
//   // console.log($valInput);
//
//   if($('#input-select').val().trim().length > 0){
//
//     var filtered = $foodMap.filter(function(){
//       for (var i = 0; i < $foodMap.length; i++) {
//         var places = $foodMap[i]['type'];
//          // console.log(places);
//          // console.log(places.type.toLowerCase().indexOf($valInput) >= 0);
//          // var result = places.type.toLowerCase().indexOf($valInput) >= 0;
//          var result = places.toLowerCase().indexOf($valInput) >= 0;
//          // food.push(places);
//          // console.log(food);
//           // return result;
//       }
//       console.log(places);
//       // console.log(places.type.toLowerCase().indexOf($valInput) >= 0);
//      // return places.type.toLowerCase().indexOf($valInput) >= 0;
//   });
//   // console.log(filtered);
//   $('#container-place').empty();
//   filtered.forEach(function(){
//     // paintOptions(places);
//   });
//   }
// }


function filterOptions () {

  var $valInput = $searcher.val().toLowerCase();
  var food = $foodMap2[$valInput];
  // console.log(food);

  if($('#input-select').val().trim().length > 0){
    for (var i in $foodMap2) {
      var places = i
      if(places.toLowerCase() === $valInput){
         paintOptions(food);
      }
    }
  }
}


    //this - data target--


  //   var filtered = $foodMap2.filter(function(){
  //     for (var i in $foodMap2) {
  //       var places = $foodMap2[i]
  //       console.log(places);
  //
  //        // var result = places.toLowerCase().indexOf($valInput) >= 0;
  //
  //     }
  //
  // });
  // console.log(filtered);
  // $('#container-place').empty();
  // filtered.forEach(function(){
    // paintOptions(places);
  // });

function paintOptions(food){

  var $container = $(".container-place");
  var modalTitle = $(".modal-title");
  var modalBody = $(".modal-body");

  $container.empty();
  // console.log(food);

  for (var i = 0; i < food.length; i++) {
    var restaurants = food[i];
    // console.log(restaurants);
    var images = $('<img>');
    var srcImg = restaurants['img'];
    images.attr('src', srcImg);
    $container.append(images);

    paintModal($container);
    // console.log($container);
  }
  // console.log(restaurants);
  // var $containerFoods = $("<article />", {"class":"container-place"});
}

function paintModal ($container) {
  
}
