var FoodItem = function(name, calories, vegan, glutenFree, citrusFree){
	this.name = name;
	this.calories = calories;
	this.vegan = vegan || false;
	this.glutenFree = glutenFree || false;
	this.citrusFree = citrusFree || false; 
}

FoodItem.prototype.stringify = function(){
		
		if (this.vegan) {
			var vegString = "This item is vegan friendly"
		} else { var vegString = "Sorry stupid vegans"}
		
		if (this.glutenFree) {
			var glutString = "Guaranteed gluten free"
		} else { var glutString = "Sorry not sorry, glutards"}
		
		if (this.citrusFree){
			var citrusString = "Contains no citrus"
		} else { var citrusString = "Citrus all up in yo grill"}

		return (this.name + " has " + this.calories + " calories." +"\n"
				+ vegString + "/" + glutString + "/" + citrusString)
}



var tequila = new FoodItem(
	'Citrus Tequila',
	100,
	true,
	true,
	false
	)

var burrito = new FoodItem(
	"Big Ol' Burrito ",
	750,
	false,
	false,
	true
	)

var guacamole = new FoodItem(
	'Spicy Habanero Guacamole',
	360,
	true,
	true,
	false
	)



var Drink = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients
}


var margarita = new Drink (
	'Cadillac Margarita',
	'Fancy Margarita for You',
	12,
	[tequila]
	)

Drink.prototype.isVegan = function(){
	var isItVegan = false
	// console.log(this.ingredients)
	this.ingredients.forEach(function(element){
		if (element.vegan === true) {
			isItVegan = true
		} else {isItVegan = false}
	})
	return isItVegan
}

Drink.prototype.isGlutenFree = function(){
	// console.log(this.ingredients)
	var isItGF = false
	this.ingredients.forEach(function(element){
		if (element.glutenFree === true) {
			isItGF = true
		} else {isItGF = false}
	})
	return isItGF
}


Drink.prototype.isCitrusFree = function(){
	var isItCF = false
	// console.log(this.ingredients)
	this.ingredients.forEach(function(element){
		if (element.citrusFree === true) {
			isItCF = true
		} else {isItCF = false}
	})
	return isItCF
}

Drink.prototype.stringify = function(){
	plateText = ""
	if (this.isVegan() === true){
		plateText += " -- Ok, it's vegan why not? --\n"
	} else {plateText +=" -- You better shut up Vegan --\n"}
	if (this.isGlutenFree() === true){
		plateText += " -- Safe for glutards -- \n"
	} else {plateText +=" -- Sorry not sorry glutards --\n"}
	if (this.isCitrusFree() === true){
		plateText += " -- No citrus hyah --\n"
	} else {plateText += " -- Citrus all up in yo grill! --\n"}
	return plateText
}



var Plate = function(name,description,price,ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients
}



var burritoPlate = new Plate (
	'Big Burrito Dinner',
	'A big, fat, smothered burrito with all the fixins.',
	9,
	[burrito]
	)

var guacPlate = new Plate (
	'Spicy Habanero Guacomole',
	'Chunky Guacomole with a big kick!',
	5,
	[guacamole]
	)

Plate.prototype.isVegan = function(){
	var isItVegan = false
	this.ingredients.forEach(function(element){
		if (element.vegan === true) {
			isItVegan = true
		} else {isItVegan = false}
	})
	return isItVegan
}

Plate.prototype.isGlutenFree = function(){
	var isItGF = false
	this.ingredients.forEach(function(element){
		if (element.glutenFree === true) {
			isItGF = true
		} else {isItGF =false}
	})
	return isItGF
}

Plate.prototype.isCitrusFree = function(){
	var isItCF = false
	this.ingredients.forEach(function(element){
		if (element.citrusFree === true) {
			isItCF = true
		} else {isItCF = false}
	})
	return isItCF
}

Plate.prototype.stringify = function(){
	plateText = ""
	if (this.isVegan() === true){
		plateText += " -- Ok, it's vegan why not? -- \n"
	} else {plateText += " -- You better shut up Vegan -- \n"}
	if (this.isGlutenFree() === true){
		plateText += " -- Safe for glutards -- \n"
	} else {plateText += " -- Sorry not sorry glutards -- \n"}
	if (this.isCitrusFree() === true){
		plateText += " -- No citrus hyah -- "
	} else {plateText += " -- Citrus all up in yo grill! -- "}
	return plateText
}




var Menu = function(plate) {
	this.plate = plate
}


var currentMenu = new Menu(
	[burritoPlate, guacPlate, margarita]
	)

var Order = function(myOrder) {
	this.myOrder = myOrder
}



Menu.prototype.stringify= function (){
	var menuText = ""
	this.plate.forEach(function(element){
	menuText += element.name + "\n"
	menuText += element.description + "\n"
	menuText += "Price: $" + element.price + "\n"
	menuText += element.stringify() + "\n\n"
}) 
	return menuText
}

var Restaurant = function(name, description, menu){
	this.name = name
	this.description = description
	this.menu = menu
}

var myRestaurant = new Restaurant(
	"D.B.'s Tex-Mex Shack",
	"A refined eatery in a refined shack.",
	currentMenu
	)



Restaurant.prototype.stringify = function(){
		return ("Welcome to " + this.name + "!" + "\n" + this.description + "\n\n" + "Today's menu:" + "\n" + this.menu.stringify())

}

console.log(myRestaurant.stringify())


