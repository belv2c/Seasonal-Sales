console.log("Whoami");

var products = [];
var categories = [];
var numOfXHRLoaded = 0;
var productContainer = document.getElementById("product-container");
var winterButton = document.getElementById("winter");
var autumnButton = document.getElementById("autumn");
var springButton = document.getElementById("spring");

function decideDataType(dataFromArray){
	console.log("HEY");
	var dataType = "product";
	for(var i=0; i<dataFromArray.length; i++){
		if(dataFromArray[i].season_discount){
			dataType = "category";
		}
	}
	if (dataType === "product") {
		products = dataFromArray;
	}else if (dataType = "category") {
		categories = dataFromArray;
	}
	numOfXHRLoaded++;
	if (numOfXHRLoaded === 2){
		addCategoriesToProduct();
	}

}
	

function addCategoriesToProduct () {
	console.log("products");
	for(var i=0; i<products.length; i++) {

	for(var j=0; j<categories.length; j++) {
		if(categories[j].id === products[i]["category_id"]) {
			products[i].categoryName = categories[j].name;
			products[i].categorySeasonal = categories[j]["season_discount"];
			products[i].categoryPrice = categories[j].price;
			products[i].categoryDiscount = categories[j].discount;
	  }
   	}
  }
  productString();
}

function productString(){
	console.log("products");
	var domString = "";
	for(var i=0; i<products.length; i++){
		domString += `<div id="product-container">`;
		domString +=   `<h4 class="name">${products[i].name}</h4>`;
		domString +=   `<h4 class="price">${products[i].price}</h4>`;
		domString +=   `<h4 class="cost">${products[i].categoryName}</hr>`;
		domString += `</div>`;
		}

		writeToDom(domString);
}

function writeToDom(string){
	productContainer.innerHTML = string;
}

//* DISCOUNT SECTION*//
/*products.price*/

function executeThisCodeAfterFileLoads(){
	var data = JSON.parse(this.responseText);
	// console.log(data);
	decideDataType(data.products);
} 

function executeThisCodeAfterFileLoads2(){
	var data = JSON.parse(this.responseText);
	// console.log(data);
	decideDataType(data.categories);
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
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
myRequest2.open("GET", "categories.json");
myRequest2.send();