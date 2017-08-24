console.log("Whoami");

var products = [];
var categories = [];
var numOfXHRLoaded = 0;
var productContainer = document.getElementById("product-container");

function decideDataType(dataFromArray){
	var dataType = "product";
	for(var i=0; i<dataFromArray.length; i++){
		if(dataFromArray[i].season_discount){
			dataType = category
		}
	}
		if (dataType === "product") {
			products = dataFromArray;}
		else if (dataType = "category") {
			categories = dataFromArray;
		}

		if (numOfXHRLoaded === 2){
			moveOn();
	}
}

function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText);
	decideDataType(data)
}

function executeThisCodeAfterFileLoads2(){
	var data = JSON.parse(this.responseText);
	decideDataType(data)
}

function executeThisCodeIfFileErrors(){
	console.log("Broken!!!!");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "products.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest.addEventListener("load", );
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "products.json");
myRequest.send();