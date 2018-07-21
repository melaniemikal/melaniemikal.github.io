var repairRequest = new XMLHttpRequest();
var requestURL = "https://melaniemikal.github.io/cit230/assignments/mountainSpoke/datatable.json";
repairRequest.open('GET',requestURL,true);
repairRequest.send();

repairRequest.onload=function() {
    
    var fix = JSON.parse(repairRequest.response);
    document.getElementById('repair').innerHTML = fix.repairs[0].repair;
        
    var price = JSON.parse(repairRequest.response);
    document.getElementById('cost').innerHTML = "$" + price.repairs[0].cost;
    
    var fix = JSON.parse(repairRequest.response);
    document.getElementById('repair1').innerHTML = fix.repairs[1].repair;
        
    var price = JSON.parse(repairRequest.response);
    document.getElementById('cost1').innerHTML = "$" + price.repairs[1].cost;
    
    var fix = JSON.parse(repairRequest.response);
    document.getElementById('repair2').innerHTML = fix.repairs[2].repair;
        
    var price = JSON.parse(repairRequest.response);
    document.getElementById('cost2').innerHTML = "$" + price.repairs[2].cost;
    
    var fix = JSON.parse(repairRequest.response);
    document.getElementById('repair3').innerHTML = fix.repairs[3].repair;
        
    var price = JSON.parse(repairRequest.response);
    document.getElementById('cost3').innerHTML = "$" + price.repairs[3].cost;
    }

