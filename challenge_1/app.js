
count = 0
function myFunction(id){
  if(count % 2 === 0){
  document.getElementById(id).textContent = 'X';
  count++

  } else {
    document.getElementById(id).textContent = 'O';
    count++
  }
  if(count === 9){
    document.getElementById("console").textContent = 'Winner'
  }
}

function clearBoard (){
  //var x = document.getElementById("1").innerText;

}


function gameplay(){
console.log('its working')
var position1 = document.getElementById(1).innerText
var position2 = document.getElementById(2).innerText
var position3 = document.getElementById(3).innerText
console.log(position1)
console.log(position2)
console.log(position3)
if(position1 && position2 && position3 === 'X'){
  console.log('winner')
  // document.getElementById("console").textContent = 'X Wins'
}
}





