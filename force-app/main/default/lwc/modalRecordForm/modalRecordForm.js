//UC: ON CLICK PARENT SHOWS the modal on child object with record information on

import { api, LightningElement } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class ModalRecordForm extends LightningElement {
    @api recordId; //parent will pass the record Id
    objectName = ACCOUNT_OBJECT;
    //when someone click on close on child, we want to pass the event to parent that closes the record info
    closeHandler(){
        const closeEvent = new CustomEvent('close');
        this.dispatchEvent(closeEvent);
    }
}