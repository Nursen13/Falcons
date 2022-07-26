//To achieve readability and useability we can modularize our code, meaning putting similar things together. Eg: creating a lastname validation component and calling it when needed. 
//This concept is called composition and communication. Enables Building complex components using simple components. We can break the requirement into smaller req and create one LWC component for each and call the other component from another component. 
//-use kebab-case to connect components, use camel case for naming components

import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {}
