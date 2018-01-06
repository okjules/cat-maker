$(function() {

  $("#submit-button").on("click", function makeCat(){
    document.getElementById("catPicture").innerHTML = "";
    var catPicture = $("input[name='cat']:checked").val()

    if (catPicture === "cute") {
      $("#catPicture").append($('<img>',{id:'cuteCat',src:'cuteCat.gif'}));
    } else if (catPicture === "cuter") {
      $("#catPicture").append($('<img>',{id:'cuterCat',src:'cuterCat.gif'}));
    } else {
      $("#catPicture").append($('<img>',{id:'cutestCat',src:'cutestCat.gif'}));
    }
  event.preventDefault();

  });

});
