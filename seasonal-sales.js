console.log("Whoami");

var products = [];
var categories = [];
var numOfXHRLoaded = 0;

// Build domstring
function productString(stuff){
	var domString = "";
	for(var i=0; i<stuff.length; i++){
		domString += `<div id="product-container">`;
		domString +=   `<h4>${stuff[i].name}</h4>`;
		domString +=   `<h4>${stuff[i].price}</h4>`;
		domString += `</div>`;
		}
		writeToDom(domString);
}

//Domstring prints to the page into the product container element
function writeToDom(string){
	var productContainer = document.getElementById("product-container");
	productContainer.innerHTML = string;
}

//Combining categories and products
function addCategoriesToProduct () {
	console.log("products");
	for(var i=0; i<products.length; i++) {
		for(var j=0; j<categories.length; j++) {
		if (products[i]["category_id"] === categories[j].id){
			products[i].categoryName = categories[j].name;
			products[i].categorySeasonal = categories[j]["season_discount"];
			products[i].categoryPrice = categories[j].price;
			products[i].categoryDiscount = categories[j].discount;
	  }
   	}
  }
  productString();
}


// XHR //
function executeThisCodeAfterFileLoads(){
	var productsData = JSON.parse(this.responseText).products;
	console.log(productsData);
	productString(productsData);
} 

function executeThisCodeIfFileErrors(){
	console.log("Broken!!!!");
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "products.json");
myRequest.send();

function getCategories(products){
	var myRequest2 = new XMLHttpRequest();
	myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
	myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
	myRequest2.open("GET", "categories.json");
	myRequest2.send();

	function executeThisCodeAfterFileLoads2(){
		var categoriesData = JSON.parse(this.responseText).categories;
		console.log(data);
		productString(categoriesData);
	}
}



	




//* DISCOUNT SECTION*//
/*products.price*/

