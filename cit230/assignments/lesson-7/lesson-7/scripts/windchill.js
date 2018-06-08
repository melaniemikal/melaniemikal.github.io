var highTemp = 90;
var lowTemp = 66;
var temp = (highTemp + lowTemp)/2;
var s = 5

var x = Math.pow(s, 0.16);
var windChill = 35.74 + (0.6215 * temp) - (35.75 * x) + (0.4275 * temp * x);
windChill = Math.round(windChill*100)/100;
document.getElementById("windchill").innerHTML = "Windchill" + ":" + " " + windChill + "&deg;F";