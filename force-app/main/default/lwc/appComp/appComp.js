import { LightningElement } from 'lwc';

export default class AppComp extends LightningElement {
    showHandler(event){
        console.log("A grant parent component");
        console.log(event.target.nodeName); //NodeName is the tag name in HTML
        console.log(event.currentTarget.nodeName); //currenttarget is parent

    }
}