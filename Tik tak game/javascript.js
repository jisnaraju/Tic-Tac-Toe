var a=0;///main function
function myFunction(id){
var b1=document.getElementById("b1").value;  var b2=document.getElementById("b2").value;  var b3=document.getElementById("b3").value;
var b9=document.getElementById("b9").value;  var b4=document.getElementById("b4").value;  var b5=document.getElementById("b5").value;
var b6=document.getElementById("b6").value;  var b7=document.getElementById("b7").value;  var b8=document.getElementById("b8").value;
if(a==0){                                                          //"X" will be printing
  document.getElementById(id).value="X";
  document.getElementById(id).style
  document.getElementById(id).style.backgroundColor="red";
  console.log(a);
  a=1;
}
else                                                             //"O" will be printing
{
 document.getElementById(id).value="O";
 document.getElementById(id).style.backgroundColor="yellow";
  console.log(a);
  a=0;
}
                  ////////////////////////////////condition checking////////////////////////////////////////////
if((b1===b2&&b1===b3)&&(b1=="X"||b1==="O"))
{
 if(b1=="X"){
   document.getElementById("redw").style.display="block";
   document.getElementById("yelll").style.display="block";
   window.alert("player1 wins");}
   else{ 
     window.alert("player2 wins");
     document.getElementById("yellw").style.display="block";
     document.getElementById("redl").style.display="block";}
}
 
else if((b4===b5&&b5===b6)&&(b4==="X"||b4==="O"))
{
if(b4=="X"){
   window.alert("player1 wins");
   document.getElementById("redw").style.display="block";
   document.getElementById("yelll").style.display="block";}
else{ 
     window.alert("player2 wins");
     document.getElementById("yellw").style.display="block";
     document.getElementById("redl").style.display="block";}
}

else if((b7===b8&&b8===b9)&&(b7==="X"||b7==="O"))
{
if(b7=="X"){
   window.alert("player1 wins");
   document.getElementById("redw").style.display="block";
   document.getElementById("yelll").style.display="block";}
else{ 
     window.alert("player2 wins");
     document.getElementById("yellw").style.display="block";
     document.getElementById("redl").style.display="block";}

}

else if((b1===b5&&b5===b9)&&(b1==="X"||b1==="O"))
{
if(b1=="X"){
   window.alert("player1 wins");
   document.getElementById("redw").style.display="block";
   document.getElementById("yelll").style.display="block";}
else{ 
     window.alert("player2 wins");
     document.getElementById("yellw").style.display="block";
     document.getElementById("redl").style.display="block";}
}
else if((b3===b5&&b5===b7)&&(b3==="X"||b3==="O"))
{
if(b3=="X"){
   window.alert("player1 wins");
   document.getElementById("redw").style.display="block";
   document.getElementById("yelll").style.display="block";}
else{ 
     window.alert("player2 wins");
     document.getElementById("yellw").style.display="block";
     document.getElementById("redl").style.display="block";}
}

else if((b3===b6&&b6===b9)&&(b3==="X"||b3==="O"))
{
if(b3=="X"){
   window.alert("player1 wins");
   document.getElementById("redw").style.display="block";
   document.getElementById("yelll").style.display="block";}
else{ 
     window.alert("player2 wins");
     document.getElementById("yellw").style.display="block";
     document.getElementById("redl").style.display="block";}
}
else if((b1===b4&&b4===b7)&&(b1==="X"||b1==="O"))
{
if(b1=="X"){
   window.alert("player1 wins");
   document.getElementById("redw").style.display="block";
   document.getElementById("yelll").style.display="block";}
else{ 
     window.alert("player2 wins");
     document.getElementById("yellw").style.display="block";
     document.getElementById("redl").style.display="block";}
}
else if((b2===b5&&b5===b8)&&(b2==="X"||b2==="O"))
{
if(b1=="X"){
   window.alert("player1 wins");
   document.getElementById("redw").style.display="block";
   document.getElementById("yelll").style.display="block";}
else{ 
     window.alert("player2 wins");
     document.getElementById("yellw").style.display="block";
     document.getElementById("redl").style.display="block";}
}
else if(b1!=" " && b2!=" " && b3!=" " && b4!=" " && b5!=" " && b6!=" " && b7!=" " && b8!=" " && b9!=" "){
    document.getElementById("tie").style.display="block";}
} 

 

  

