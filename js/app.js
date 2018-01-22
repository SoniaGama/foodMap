$(document).ready(loadPage);
var $searcher = $('#input-select');



// mapa de google maps
function mapFood() {
    var mapOptions = {
        center: new google.maps.LatLng(19.432608, -99.133208),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}


function loadPage() {
   // comienza con una vista splash y se remueve la clase d-none para que
   // muestre el contenido
  $(".section-fade-out").fadeOut(2000, function(){
    $(".main-section").removeClass("d-none");
  });
  // Asignamos evento y llamamos a la funcion que va a filtrar los restaurantes
  $searcher.keyup(filterOptions);
}

// console.log($foodMap[2]['type']);

function filterOptions () {
  var food = []
  // guardamos el value de input
  var $valInput = $searcher.val().toLowerCase();
  // console.log($valInput);

  if($('#input-select').val().trim().length > 0){

    var filtered = $foodMap.filter(function(){
      for (var i = 0; i < $foodMap.length; i++) {
        var places = $foodMap[i]['type'];
         // console.log(places);
         // console.log(places.type.toLowerCase().indexOf($valInput) >= 0);
         // var result = places.type.toLowerCase().indexOf($valInput) >= 0;
         var result = places.toLowerCase().indexOf($valInput) >= 0;
         // console.log(result);
         // return result;
      }
       food.push(places);
      console.log(food);

      // console.log(places.type.toLowerCase().indexOf($valInput) >= 0);
     // return places.type.toLowerCase().indexOf($valInput) >= 0;
  });
  $('#container-place').empty();
  filtered.forEach(function(){
    // paintOptions(places);
  });
  }
}

// function paintOptions(places){
//   if(places['name'] === "Mexicana"){
//     console.log('siii');
//   } else {
//     console.log('nooo');
//   }
//    // var $containerFoods = $("<article />", {"class":"container-place"});
// }
