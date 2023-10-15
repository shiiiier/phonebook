import React, { FC } from "react";
import { Contact } from "../type";
import ContactItem from "./ContactItem";

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className="contacts-list">
      <h3 className="contacts-list-title">List of Contacts</h3>
      <div className="contacts-list-table-container">
        <table className="contacts-list-table">
          <thead className="contacts-list-header">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map(({ firstName, lastName, phoneNumber, id}) => (
              <ContactItem
              key={id}
              id={id}
              firstName={firstName}
              lastName={lastName}
              phoneNumber={phoneNumber}></ContactItem>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
