import { api, LightningElement } from 'lwc';

export default class ProgressBar extends LightningElement {
    @api progressValue;

    //methods can be public as well
    @api resetProgress (){
        this.progressValue = 50;
    }
}