import PropTypes from 'prop-types';
import s from './ContactList.module.css';
export default function ContactsList({ contacts, removeContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          {name} : {number}
          <button className={s.button} onClick={() => removeContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactsList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func.isRequired,
};
