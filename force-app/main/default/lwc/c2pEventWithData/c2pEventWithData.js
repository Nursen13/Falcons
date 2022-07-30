import { LightningElement, track } from 'lwc';

export default class C2pSimpleEvent2 extends LightningElement {
    //any change 
    input;
    //I use another property just incase parent might send partial id to input, I want it to be send after clicking on the button
    contactId;
    showDetails;
    @track output ={}; //to reflect the changes ion HTML

    changeHandler(event){
        this.input = event.target.value;
    }

    clickHandler(){
        this.contactId = this.input;

        //when click 
        this.showDetails = true;
    }
    closeHandler(event){ //parent HTML contains data
        this.showDetails = false;
        console.log(event);
        console.log(JSON.stringify(event.detail));
        this.output = event.detail;
    }
}