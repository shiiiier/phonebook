export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
  }
  
  export interface Action {
    type: string;
    payload: Contact;
  }