
function clic(val) {
  var dis = document.getElementById("numbers").value += val;

}
function down(event){

  
  console.log(event);
  if (
    (event.key >= '0' && event.key <= '9') || 
    event.key === '.' ||                      
    event.key === '+' ||                      
    event.key === '-' ||                     
    event.key === '*' ||                      
    event.key === '/' ||                      
    event.key === '(' ||                      
    event.key === ')' ||
    event.key === "Backspace"                 
) {
  var dig = document.getElementById("numbers").value;
  dig += event.key; 
} else {
    event.preventDefault(); 
    dig = ""
}
}
document.addEventListener("DOMContentLoaded", function() {
  var ac = document.getElementById("AC");
  ac.addEventListener("click", function() {
      document.getElementById("numbers").value = "";
  });
});

function solve() {
  var dis = document.getElementById("numbers").value;
  console.log("Input:", dis);
  var result = math.evaluate(dis);
  console.log("Result:", result);
  document.getElementById("numbers").value = result;
}

function cal() {
  console.log("Calculating...");
  solve();
}
function up(){
  var dis = document.getElementById("numbers").value;
  var del = dis.slice(0, dis.length-1);
  document.getElementById("numbers").value = del; 
}