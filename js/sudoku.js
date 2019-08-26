
var makeARandomNumber = function(){
    return Math.floor(Math.random() * 4)+1;
}
var randoms = Array(4).fill(0).map(makeARandomNumber);
console.log(randoms)
var var1=document.getElementById("r0c0").value = randoms[0];
var var2=document.getElementById("r2c1").value = randoms[1];
var var3=document.getElementById("r3c0").value = randoms[2];
var var4=document.getElementById("r3c2").value = randoms[3];
var var5=document.getElementById("r2c3").value = randoms[0];
var var6=document.getElementById("r1c3").value = randoms[1];
// //validate frist col
if(var1==var3 && var1>1){
    var1=var1-1;
    document.getElementById("r0c0").value =var1;
}
else if(var1==var3 && var1==1) {
    var1=var1+1;
    document.getElementById("r0c0").value =var1;
}
//validate fourth row
if(var4==var3 && var4>1){
    var4=var4-1;
    document.getElementById("r3c2").value =var4;
}
else if(var4==var3 && var4==1) {
    var4=var4+1;
    document.getElementById("r3c2").value =var4;
}
//validate fourth col
if(var5==var6 && var5>1){
    var5=var5-1;
    document.getElementById("r2c3").value =var5;
}
else if(var5==var6 && var5==1) {
    var5=var5+1;
    document.getElementById("r2c3").value =var5;
}

//validate left square
if(var2==var3 && var2>1){
    var2=var2-1;
    document.getElementById("r2c1").value =var2;
}
else if(var2==var3 && var2==1) {
    var2=var2+1;
    document.getElementById("r2c1").value =var2;
}

//validate Right square
if(var4==var5 && var4>1){
    var4=var4-1;
    document.getElementById("r3c2").value =var4;
}
else if(var4==var5 && var4==1) {
    var2=var2+1;
    document.getElementById("r3c2").value =var4;
}




function finish() {
    var var7  = document.getElementById("r0c1").value;
    var var8  = document.getElementById("r0c2").value;
    var var9  = document.getElementById("r0c3").value;
    var var10 = document.getElementById("r1c0").value;
    var var11 = document.getElementById("r1c1").value;
    var var12 = document.getElementById("r1c2").value;
    var var13 = document.getElementById("r2c0").value;
    var var14 = document.getElementById("r2c2").value;
    var var15 = document.getElementById("r3c1").value;
    var var16 = document.getElementById("r3c3").value;
    
    fristRow  =  [var1,var7,var8,var9];
    secondRow =  [var6,var10,var11,var12];
    thirdRow  =  [var2,var5,var13,var14];
    fourthRow =  [var3,var4,var15,var16]; 

    fristCol  = [var1,var3,var10,var13];
    secondCol = [var2,var7,var11,var15];
    thirdCol  = [var4,var8,var12,var14];
    fourthCol = [var5,var6,var9,var16];
 
//check dublicate values in the array
var method1 = function(arr) {
    for(var i = 0; i <= arr.length; i++) {
        for(var j = i; j <= arr.length; j++) {
            if(i != j && arr[i] == arr[j]) {
                return true;
            }
        }
    }
    return false;
   
}
if(
!method1(fristRow)&&
!method1(secondRow)&&
!method1(thirdRow)&&
!method1(fourthRow)&&
!method1(fristCol)&&
!method1(secondCol)&&
!method1(thirdCol)&&
!method1(fourthCol)
){
    alert("You win the Game");
}
else alert("you lose the Game");


}
