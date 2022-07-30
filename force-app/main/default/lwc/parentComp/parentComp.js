import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    showHandler1(event){
        console.log("A parent component");
        console.log(event.target.nodeName); //NodeName is the tag name in HTML, target is coming from child
        console.log(event.currentTarget.nodeName); //currenttarget is parent

    }

    showHandler2(event){
        console.log("A parent component - div");
        console.log(event.target.nodeName); //NodeName is the tag name in HTML
        console.log(event.currentTarget.nodeName);

    }
}