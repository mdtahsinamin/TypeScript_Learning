"use strict";
{
    function getMyName(name) {
        return name;
    }
    function add(num1, num2) {
        return num1 + num2;
    }
    add(2, 3);
    const addMy = (num, num1) => {
        return num + num1;
    };
    // object -> function -> method
    const poorUser = {
        name: "Tahsin",
        balance: 0,
        addBalance(balance) {
            return `My balance is ${this.balance + balance}`;
        },
    };
    const arr = [1, 2, 4, 10];
    const newArr = arr.map((elt) => elt * elt);
}
