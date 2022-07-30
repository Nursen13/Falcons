import { LightningElement } from 'lwc';

export default class ModalComponentChild extends LightningElement {
    closeHandler(){
        //create event to communicate with c/parentComponent: as we click on close on the child, we want parent to stop dipalyign modal content on the child

        //we do not need to import CustomEvent because it is a web component
        const closeEvent = new CustomEvent('close');

        //send event to parent
        this.dispatchEvent(closeEvent)
    }
}