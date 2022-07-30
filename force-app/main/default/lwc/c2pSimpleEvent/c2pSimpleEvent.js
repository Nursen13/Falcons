import { LightningElement } from 'lwc';

export default class C2pSimpleEvent extends LightningElement {
    showModal = false;
    clickHandler(){
        this.showModal = true;
    }

    //child is sending message to parent to make the modal hidden
    childHandler(){
        this.showModal = false;
    }
}