//Query Selectors: 
// When? We want things rendered from HTML,  and something with it in JS.
// Use case: to reset the record form after save
// Use case: when the user click on a button or hover on a word, I want it to change color, change background, print a list of items in separate rows, etc. 
// this.element.querySelectorAll(selector) brings data from multiple elements to JS.
// If we use this.element.querySelector(selector) we will get the 1st element
//(selector) => is the class, element tou are beringing from HTML

import { LightningElement } from 'lwc';

export default class QuerySelectors extends LightningElement {
    fruits = ["Apple", "Orange", "Banana", "Grapes"];

    clickHandler(){
        //we need to create var to store the elem coming from HTML
        const elem = this.template.querySelector('h1'); //takes h1 from HTML
            console.log(elem.innerText);
        //to apply some styling to that eleemnt 
            elem.style.border = "2px solid green";
            elem.style.backgroundColor = "yellow";

        //querySelectorAll (to access multiple elements by using a class name)
        const fruitElems = this.template.querySelectorAll(".fruit");
        //to display each element
            fruitElems.forEach(item => {
            console.log(item.innerText);
            if(item.innerText === "Apple"){
                item.style.color = "red";
            } else if (item.innerText === "Banana"){
                item.style.color = "yellow";
            } else {
                item.style.color = "black";
            }
             //change the font color upon clicking
            item.setAttribute("class", "slds-align_absolute-center") //align at the center
        })
    }
}