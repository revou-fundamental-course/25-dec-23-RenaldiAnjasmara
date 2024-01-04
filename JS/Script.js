function area() {
  if (formarea.height1.value==""){
    alert("You must fill the height please")
  }
  if (formarea.base1.value==""){
    alert("You must fill the base please")
  }
var height = document.getElementById("height1").value;
var base = document.getElementById("base1").value;
result1=0.5*(height*base);

document.getElementById("result1").value=result1;
}

function reseta(){
  document.getElementById("formarea").reset();
}

function circum() {
  if (circumform.sa1.value==""){
    alert("You must fill the Side A please")
  }
  if (circumform.sb1.value==""){
    alert("You must fill the Side B please")
  }
  if (circumform.sc1.value==""){
    alert("You must fill the Side C please")
  }
  var sa = document.getElementById("sa1").value;
  var sb = document.getElementById("sb1").value;
  var sc = document.getElementById("sc1").value;
  let circum1 = parseInt(sa) + parseInt(sb) + parseInt(sc);

  document.getElementById("circum1").value=circum1;
}

function resetb(){
  document.getElementById("circumform").reset();
}

