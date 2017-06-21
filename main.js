var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json' );
    ourRequest.onload = function() {
       if (ourRequest.status >=200 && ourRequest.status < 400 ) {
         var ourData = JSON.parse(ourRequest.responseText);
         console.log(ourData[0]);
         renderHTML(ourData);
       }
       else {
         console.log("Error");
       }

    };
    ourRequest.onerror = function(){
      console.log("connection error");
    }
    ourRequest.send();
});

function renderHTML(data) {
  var htmlString = "";
  for (var i = 0; i < data.length; i++) {
    htmlString+= "<p>"+ data[i].name + "is a "+ data[i].species +" likes : ";
    for (var i1 = 0; i1 < data[i].foods.likes.length; i1++) {
      if (i1 == 0) {
        htmlString += data[i].foods.likes[i1];
      }
      else {
        htmlString += " and " + data[i].foods.likes[i1];
      }
    }

    htmlString += " and dislikes are :";

    for (var i2 = 0; i2 < data[i].foods.dislikes.length; i2++) {
      if (i2 == 0) {
        htmlString += data[i].foods.dislikes[i2];
      }
      else {
        htmlString += " and " + data[i].foods.dislikes[i2];
      }
    }
  }
  animalContainer.insertAdjacentHTML('beforeend', htmlString)
}
