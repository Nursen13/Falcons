//4th type of communication from parent to child

import { LightningElement } from 'lwc';

export default class ProgressBarParent extends LightningElement {
    value = 10;

    changeHandler(event){
        this.value = event.target.value;
    }
    //like in apex if calling a nonstatic method, create an instance
    resetprogressBar(){

        //to achieve sync to have parent the same valuet
        this.value= 50;
        //if you go to template go to progress bar and fetch that method
        this.template.querySelector('c-progress-bar').resetProgress();

    }
}