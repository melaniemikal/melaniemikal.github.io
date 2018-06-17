
var highTemp = parseInt(document.getElementById("high").innerHTML);
var lowTemp = parseInt(document.getElementById("low").innerHTML);
var temp = (highTemp + lowTemp) / 2;
var s = parseInt(document.getElementById("wspeed").innerHTML);

var x = Math.pow(s, 0.16);
var windChill = parseInt(35.74 + (0.6215 * temp) - (35.75 * x) + (0.4275 * temp * x));
windChill = Math.round(windChill * 100) / 100;
document.getElementById("windchill").innerHTML = "Windchill" + ":" + " " + windChill + "&deg;F";



