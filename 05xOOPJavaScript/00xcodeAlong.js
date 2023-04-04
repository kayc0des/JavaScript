/* 
Object Oriented Programming - Grouping Data and Functionality
*/ 

let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function () {
        let amount = this.shoes * this.stateTax;
        console.log("Total Amount:", amount);
    }
}

purchase1.totalPrice();

let purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function () {
        let amount = this.shoes * this.stateTax;
        console.log("Total Amount:", amount);
    }
}

purchase2.totalPrice();