let out = '';
const div1 = document.querySelector(".divvy");
const paras = document.querySelectorAll("p");
let p1 = '';
let p2 = 'Second value: ';
let p1text;
let p2text;
let currentModifier = "+";
// Change
document.addEventListener('keyup', (e) => {
  if (e.key === "1"){
    out += "1";
    writeOut();
  }
  if (e.key === "2") {
    out += "2";
    writeOut();
  }
  if (e.key === "3") {
    out += "3";
    writeOut();
  }
  if (e.key === "4") {
    out += "4";
    writeOut();
  }
  if (e.key === "5") {
    out += "5";
    writeOut();
  }
  if (e.key === "6") {
    out += "6";
    writeOut();
  }
  if (e.key === "7") {
    out += "7";
    writeOut();
  }
  if (e.key === "8") {
    out += "8";
    writeOut();
  }
  if (e.key === "9") {
    out += "9";
    writeOut();
  }
  if (e.key === "0") {
    out += "0";
    writeOut();
  }
  if (e.key === "+"){
    out += "+";
    writeOut();
  }
  if (e.key === "-") {
    out += "-";
    writeOut();
  }
  if (e.key === "*") {
    out += "*";
    writeOut();
  }
  if (e.key === "/") {
    out += "/";
    writeOut();
  }
  if (e.key === "="){
    out += "=";
    writeOut();
  }

});
clear();
window.onload = function(){
	p1text = document.getElementById("screen");
	p2text = document.getElementById("storage");
	p1text.innerHTML = "";
    p2text.innerHTML = "";
}
function writeOut() {
	if (p1text.innerHTML != "" && p2text.innerHTML != "" && document.getElementById("box0").innerText != ""){
		p1text.innerHTML = "";
		p2text.innerHTML = "";
		document.getElementById("box0").innerText = "";
	}
  if (out.slice(-1) == "C"){
	  out = "";
	  p1text.innerHTML = "";
	  p2text.innerHTML = "";
  }
  else if (out.slice(-1) == "+"){
	  currentModifier = "+";
	  addValue();
	  out = "";
  }
  else if (out.slice(-1) == "-"){
	  currentModifier = "-";
	  addValue();
	  out = "";
  }
  else if (out.slice(-1) == "*"){
	  currentModifier = "*";
	  addValue();
	  out = "";
  }
  else if (out.slice(-1) == "/"){
	  currentModifier = "/";
	  addValue();
	  out = "";
  }
  else if (out.slice(-1) == "=" && p2text.innerHTML == "" && p1text.innerHTML != "" && out != ""){ // slice works like a substring, it reads the characters at a point (or inbetween points) of a string{
	  p2text.innerHTML = out.slice(0,out.length-1);
	  
  if (currentModifier == "+")
	  out = parseFloat(p1text.innerHTML) + parseFloat(p2text.innerHTML);
  if (currentModifier == "-")
	  out = parseFloat(p1text.innerHTML) - parseFloat(p2text.innerHTML);
  if (currentModifier == "*")
	  out = parseFloat(p1text.innerHTML) * parseFloat(p2text.innerHTML);
  if (currentModifier == "/")
	  out = parseFloat(p1text.innerHTML) / parseFloat(p2text.innerHTML);
  p1text.innerHTML = "";
  p2text.innerHTML = "";
  }
  document.getElementById("box0").innerText = out;
}
document.addEventListener("click", function (event) {
    if (event.target.nodeName === 'BUTTON') {
      out += event.target.innerText;
      writeOut();
  }
});
function addValue(){
		if (p1text.innerHTML == ""){
	  p1text.innerHTML = out.slice(0,out.length-1);
	  }
	  else if (p2text.innerHTML == ""){
	   p2text.innerHTML = out.slice(0,out.length-1);
	  }
}
  function clear(){
  out = '';
    p1 = '';
    p2 = 'Second value: ';
  if (!(document.getElementById("box0"))){
	  console.log("no paragraphs");
	  return;
  }
  if (event.key !== 'Backspace') {
    out = '';
    p1 = '';
    p2 = 'Second value: ';
    p1text.innerText = '';
    p2text.innerText = '';
    writeOut();
  }
  if (event.which > 47 && event.which < 58) {
    out += event.key;
    writeOut();
  } 
    else if (p2 === 'Second value: ') {
      p2 += out;
      p2text.innerText = p2;
      out = '';
      writeOut();
    }   

  //subtract();
}
  



