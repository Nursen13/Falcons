//user case: parent is exposing student info to the child, visible to any other component by @api
//Name of student, age of students and place of the student 


import { LightningElement, api } from 'lwc';

export default class ParentToChildCommunicationPrimitivesChild extends LightningElement {
    //data coming from parent will be kept in these properties
    @api name;
    @api age;
    @api placeOfLiving;
}