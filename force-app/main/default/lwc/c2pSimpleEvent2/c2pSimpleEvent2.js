import { LightningElement } from 'lwc';

export default class C2pSimpleEvent2 extends LightningElement {
    //any change 
    input;
    //I use another property just incase parent might send partial id to input, I want it to be send after clicking on the button
    accountId;
    showDetails;

    changeHandler(event){
        this.input = event.target.value;
    }

    clickHandler(){
        this.accountId = this.input;

        //when click 
        this.showDetails = true;
    }
}