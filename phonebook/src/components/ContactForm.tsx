
import React, { FC, ChangeEvent, useState, FormEventHandler } from 'react';
import { Button, Form } from 'react-bootstrap';

const ContactForm: FC = () => {
    const [contact, setContact] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      address: '',
      email: '',
    });

    return (
        <h3>Form</h3>
    )

}
export default ContactForm;