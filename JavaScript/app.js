/*Welcome to my Code 
alert("Welcome to my Humble site");

console.log("HI FROE JAVASCRIPT FILE")
var A1= prompt( "Would you like to buy from us","yes or no");
var A2= prompt( "Enter your Name");

document.write("we happy to have you here " + A2)

if(A1==='yes'){
    alert("We are happy to give you Discount code : Anas0000");
;

}else{
    document.write('<img src="https://www.jcrew.com/s7-img-facade/85231_WT0002?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=850&hei=850"')

}
*/

var initialImag=''
var age = prompt("pleass enter your age . . ","you should be 18+ to enter site ")
while ( age <= 17 ){
    alert("sorry you are not allowable to be here ")
    var age = prompt("pleass try  agine . . ")
}

var itemNum = prompt("How many shoes would you like to buy from us ")

for (var i = 1 ; itemNum>=i ; i=i+1 ){
    initialImag = initialImag + '<img src="Photos/Boot01.jpg" />'


}
console.log(i)
document.write(initialImag)