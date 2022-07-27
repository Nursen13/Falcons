//Parent Component: have 2 inputs. 1 for student name (text), and another student class (number). Send the data upon change to child comp.
//Child Component: Grab the name and class from parent and display them
import { LightningElement } from 'lwc';

export default class StudentDetail extends LightningElement {
    sName;
    sClass;
    changeHandler1(event) {
            this.sName = event.target.value;
       
            
        }
    changeHandler2(event){
        this.sClass = event.target.value;
    }
    }
