//creating a function for temperature
function temperature(){
    const temp = document.getElementById("c").value;
    const fahrenheit = (temp*9/5)+32;
    document.getElementById("f").value = fahrenheit;
    //alert(fahr);
}
function weight(){
    var weight = document.getElementById("kg").value;
    var pound = weight*2.205;
    document.getElementById("lbs").value = pound;
    //alert(pound);
}
function distance(){
    var distance = document.getElementById("km").value;
    var mil = distance/1.609;
    document.getElementById("miles").value = mil;
    //alert(miles);
}