import { LightningElement } from 'lwc';
import searchContact from '@salesforce/apex/ContactController.searchContact';

const COLUMNS = [
    {label: "First Name", fieldName: "FirstName", type: "text"},
    {label: "Last Name", fieldName: "LastName", type: "text"},
    {label: "Title", fieldName: "Title", type: "text"},
    {label: "Department", fieldName: "Department", type: "text"}
];

export default class ContactSearch extends LightningElement {
    searchWord;
    contacts;
    columns = COLUMNS;
    error = "Start entering key words to get matching contacts";
    changeHandler(event) {
        this.searchWord = event.target.value;
        searchContact({searchKey: this.searchWord})
            .then(result => {
                this.contacts = result;
                if(this.contacts.length == 0) {
                    this.error = "No matching contacts found. Try with other search words...";
                } else {
                    //when there is at least one result, make the error undefined
                    this.error = undefined;
                }
            })
            .catch(error => {
                //if there is an error lets make it undefined
                this.error = error.body.message;
                this.contacts = undefined;
            });
    }
}








