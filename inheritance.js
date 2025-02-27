
class Category {
    constructor(c) {
        console.log("Inside the Category class", this.__proto__);
        this.categoryName = c;
    }
}

class Product extends Category {
    constructor(n, c) {
        super(c);
        console.log("Inside the Product class", this.__proto__);
        this.name = n;
    }
}


const p1 = new Product("Iphone 15", "Mobile");

console.log(p1);