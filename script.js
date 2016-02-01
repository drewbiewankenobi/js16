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


var orangeRuffy = new FoodItem(
	'Orange Ruffy',
	230,
	false,
	true
	)

var filetMignon = new FoodItem(
	'Filet Mignon',
	550,
	false,
	true,
	true
	)

var pumpkinRavioli = new FoodItem(
	'Pumpkin Ravioli',
	360,
	true,
	false,
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

console.log(orangeRuffy.stringify())
console.log(filetMignon.stringify())
console.log(pumpkinRavioli.stringify())

var Drink = function(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients.split(",")
}

var mimosa = new Drink(
	'Mimosa',
	'Orange and Champagne',
	8,
	"orange juice, champagne"
	)
var margarita = new Drink (
	'Cadillac Margarita',
	'Fancy Margarita for You',
	12,
	"patron reposado, cointreau, fresh OJ, fresh lime"
	)
var smoothie = new Drink (
	'Breakfast Smoothie',
	'A Seasonal Blend of Fruit and Veggies',
	15,
	"fruit, kale, protein powder, hot sauce"
	)

console.log(mimosa)
console.log(margarita)
console.log(smoothie)


var Plate = function(name,description,price,ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients.split(",");
}

var filetPlate = new Plate (
	'Filet Dinner',
	'Filet Mignon with Garlic Potatoes',
	40,
	'BEEF!, Potatoes, Garlic, Bordelaise'
	)

var ruffyPlate = new Plate (
	'Orange Ruffy Dinner',
	'Fish with Citrus Beur Blanc',
	32,
	'Stuff, stuff, stuff'
	)

var burritoPlate = new Plate (
	'Big Burrito Dinner',
	'A big, fat, smothered burrito with all the fixins.',
	9,
	'Beef, Chicken, Guacamole, Sour Cream, Green Chili (contains pork), rice, black beans'
	)

var guacPlate = new Plate (
	'Spicy Habanero Guacomole',
	'Chunky Guacomole with a big kick!',
	5,
	'Habanero, Onion, Avocado, Lime Juice, Garlic, Tomatoes, Cilantro'
	)


var Menu = function(plate) {
	this.plate = plate
}


var currentMenu = new Menu(
	[burritoPlate, guacPlate, margarita]
	)

var Order = function(myOrder) {
	this.myOrder = myOrder
}

var lunchOrder = new Order(
	[filetPlate, ruffyPlate]
	)

Menu.prototype.stringify= function (){

}
console.log (lunchOrder)

//call property for each item in 'myOrder' array

lunchOrder.myOrder.forEach(function(element) {
	console.log(element.name)
})

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

console.log(myRestaurant)

Restaurant.prototype.stringify = function(){
	return ("Welcome to " + this.name + "!" + "\n" + this.description + "\n" + this.menu.stringify())

}

console.log(myRestaurant.stringify())


