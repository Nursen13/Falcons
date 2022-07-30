import { LightningElement } from 'lwc';

export default class ChildComp extends LightningElement {
    clickHandler(){
    const clickEvent = new CustomEvent('show', {bubbles: true, composed: true});
    this.dispatchEvent(clickEvent);
    console.log("show event has been dispatched from child component!");
}
}