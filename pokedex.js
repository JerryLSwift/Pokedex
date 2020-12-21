

// this is setting my buttons and displays
var pokemonDisplay = document.getElementById("pokemon-display");
var talkInfoBtn = document.getElementById("talk-info-btn");
var start = document.getElementById("start");
var select = document.getElementById("select");
var up = document.getElementById("up");
var right = document.getElementById("right");
var down = document.getElementById("down");
var left = document.getElementById("left");
var pokemonIdNum = document.getElementById("pokemon-id-num");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var start2 = document.getElementById("start2");
var select2 = document.getElementById("select2");
var arrowLt = document.getElementById("talk-info-btn");
var arrowrt = document.getElementById("talk-info-btn");
var roundArrow = document.getElementById("talk-info-btn");
var bottomBtnLt = document.getElementById("talk-info-btn");
var bottomBtnRt = document.getElementById("talk-info-btn");
var displayName = document.getElementById("display-name");
var displayType = document.getElementById("display-type");
// this is so we start the pokedex off at 1 or the first pokemon
var pokedexPosition = 1;
// display the name of the pokemon appon load - see function around line: 120
nameLayout();
// cycle through pokemon by 10
up.addEventListener('click', function(){
  pokedexPosition = pokedexPosition + 10;
  if (pokedexPosition > 150){
    pokedexPosition = 1;
  }

  nameLayout();
  pokemonIdNum.innerHTML = pokedexPosition;
  pokemonDisplay.style.backgroundImage = pokemonList[pokedexPosition].pokemonImage;
});
// cycle through pokemon backwards
right.addEventListener('click', function(){
  pokedexPosition = pokedexPosition - 1;
  if (pokedexPosition < 1){
    pokedexPosition = 150;
  }
  pokemonIdNum.innerHTML = pokedexPosition;
  pokemonDisplay.style.backgroundImage = pokemonList[pokedexPosition].pokemonImage;
  nameLayout();
});
// cycle through pokemon backwards by 10
down.addEventListener('click', function(){
  pokedexPosition = pokedexPosition - 10;
  if (pokedexPosition < 1){
    pokedexPosition = 150;
  }
  pokemonIdNum.innerHTML = pokedexPosition;
  pokemonDisplay.style.backgroundImage = pokemonList[pokedexPosition].pokemonImage;
  nameLayout();
});
// cycle through pokemon
left.addEventListener('click', function(){
  pokedexPosition = pokedexPosition + 1;
  if (pokedexPosition > 150){
    pokedexPosition = 1;
  }
  pokemonIdNum.innerHTML = pokedexPosition;
  pokemonDisplay.style.backgroundImage = pokemonList[pokedexPosition].pokemonImage;
  nameLayout();
});

//  these two functions are for the btn1 - btn10 animation
function clickedDown(){
  this.style.backgroundImage = "linear-gradient( #0000ff, #32a1fc)";
}
function clickedUp(){
  this.style.backgroundImage = "linear-gradient( #32a1fc, #0000ff)";
}
// start of the btn1 - btn10
btn1.addEventListener('mousedown', clickedDown );
btn1.addEventListener('mouseup', clickedUp );
btn1.addEventListener('click', nameLayout );

btn2.addEventListener('mousedown', clickedDown );
btn2.addEventListener('mouseup', clickedUp );
btn2.addEventListener('click', typeLayout );

btn3.addEventListener('mousedown', clickedDown );
btn3.addEventListener('mouseup', clickedUp );
btn3.addEventListener('click', entryLayout );

btn4.addEventListener('mousedown', clickedDown );
btn4.addEventListener('mouseup', clickedUp );
btn4.addEventListener('click', sizeLayout );

btn5.addEventListener('mousedown', clickedDown );
btn5.addEventListener('mouseup', clickedUp );
btn6.addEventListener('mousedown', clickedDown );
btn6.addEventListener('mouseup', clickedUp );
btn7.addEventListener('mousedown', clickedDown );
btn7.addEventListener('mouseup', clickedUp );
btn8.addEventListener('mousedown', clickedDown );
btn8.addEventListener('mouseup', clickedUp );
btn9.addEventListener('mousedown', clickedDown );
btn9.addEventListener('mouseup', clickedUp );
btn10.addEventListener('mousedown', clickedDown );
btn10.addEventListener('mouseup', clickedUp );
// this function clears the display screen
function removeStuff(){
  var myNode = document.getElementById("display-div");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}
// this function displays the name
function nameLayout(){
  removeStuff();
  var para = document.createElement("P");
  var t = document.createTextNode(pokemonList[pokedexPosition].pokemonName);
  para.appendChild(t);
  document.getElementById("display-div").appendChild(para);
}
// this displays the size and weight of the pokemon
function sizeLayout(){
    removeStuff();
    var para = document.createElement("P");
    var para1 = document.createElement("P");
    var siz = document.createTextNode("Height: "+pokemonList[pokedexPosition].pokemonHeight);
    var wei = document.createTextNode("Weight: "+pokemonList[pokedexPosition].pokemonWeight);
    para.appendChild(siz);
    para1.appendChild(wei);
    document.getElementById("display-div").appendChild(para);
    document.getElementById("display-div").appendChild(para1);
}
// this function tells what type of pokemon
function typeLayout(){
  removeStuff();
  var para = document.createElement("P");
  var t = document.createTextNode("Type: "+pokemonList[pokedexPosition].pokemonType);
  para.appendChild(t);
  document.getElementById("display-div").appendChild(para);
}

function entryLayout(){
  removeStuff();
  var para = document.createElement("P");
  var t = document.createTextNode(dataEntry[pokedexPosition]);
  para.appendChild(t);
  document.getElementById("display-div").appendChild(para);

}
// lets commit this
