console.log("seasonal sales");
var seasonDropdown = document.getElementById("season-dropdown");
var seasonSelected = seasonDropdown.value;
var seasonDiscountPrice = [];
var finalPrice = document.getElementsByClassName("the-price");
var arrayArray = [];

//XHR//
function executeThisCodeAfterFileLoads(){
	var productsData = JSON.parse(this.responseText).products;
	console.log("products", productsData);
	getCategories(productsData);
} 

function executeThisCodeIfFileErrors(){
	console.log("Broken!!!!");
}

var myProductsRequest = new XMLHttpRequest();
myProductsRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myProductsRequest.addEventListener("error", executeThisCodeIfFileErrors);
myProductsRequest.open("GET", "products.json");
myProductsRequest.send();

function getCategories(products){
	var myCategoriesRequest = new XMLHttpRequest();
	myCategoriesRequest.addEventListener("load", executeThisCodeAfterFileLoads2);
	myCategoriesRequest.addEventListener("error", executeThisCodeIfFileErrors);
	myCategoriesRequest.open("GET", "categories.json");
	myCategoriesRequest.send();

	function executeThisCodeAfterFileLoads2() {
		var categoriesData = JSON.parse(this.responseText).categories;
		addCategoriesToProducts(products, categoriesData);
		console.log("products next to categories", products);
	}
}

function addCategoriesToProducts(productsArray, categoriesArray){
	productsArray.forEach(function(product){
		var categoryId = product["category_id"];
		categoriesArray.forEach(function(category){
			if(categoryId === category.id){
				product["category"] = category.name;
				product["season"] = category["season_discount"];
				product["discount"] = category.discount;
				product["discountPrice"] = product.price - (product.price * product.discount);

			}
		});
	});
	domString(productsArray);

}


function domString(yay) {
	var domString = "";
	for (var i = 0; i < yay.length; i++){
		if(seasonDropdown.value = yay[i].categoryId){
			var totalPrice = yay[i].discountedPrice.toFixed(2);
		} else {
			var totalPrice= yay[i].price;
		}
		domString += `<div class="productCard">`;
		domString += 	`<h4>${yay[i].category}</h4>`;
		domString += 	`<h4>${yay[i].name}</h4>`;
		domString +=  	`<h5 class="the-price">${yay[i].price}</h5>`;
		domString +=  `</div>`;
	}

	writeToDom(domString);
}



function writeToDom(strang) {
	var productContainer = document.getElementById("product-container");
	productContainer.innerHTML = strang;
}


	seasonDropdown.addEventListener("change", function(event){
		console.log("change event", event);
		if(seasonDropdown.value === "1"){
			console.log("winter selected", 1);
		} else if(seasonDropdown.value === "2"){
			console.log("autumn selected", 2);
		} else if(seasonDropdown.value === "3"){
			console.log("spring selected", 3);
		}
	});




