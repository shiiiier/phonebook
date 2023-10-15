import React, { FC } from 'react';
import { Contact } from '../type';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const ContactItem: FC<Contact> = ({ firstName, lastName, phoneNumber }) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phoneNumber}</td>
      <td>
        <AiFillEdit size={20} color='blue' className='icon' />
      </td>
      <td>
        <AiFillDelete size={20} color='red' className='icon' />
      </td>
    </tr>
  );
};
export default ContactItem;