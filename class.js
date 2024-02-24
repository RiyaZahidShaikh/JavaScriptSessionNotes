// creating class using functional constructor
function Fruit(name,color,season) {
    this.name = name;
    this.color = color;
    this.season = season;
}
const apple = new Fruit("Apple","Red","Winter");
console.log(apple);
apple.plant = "Trees";
console.log(apple);
let grapes = new Fruit("Grapes","Green","Monsoon","Creeper");
console.log(grapes);