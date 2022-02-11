import { useState, useEffect } from 'react';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';

export default function App() {
  const contactsArr = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const contactsStorage = JSON.parse(localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(
    () => contactsStorage || contactsArr
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const formSubmit = contact => {
    if (
      contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }

    setContacts(prev => [...prev, contact]);
  };

  const handleChange = e => {
    const { value } = e.target;

    setFilter(value);
  };

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const removeContact = id =>
    setContacts(prev => prev.filter(item => item.id !== id));

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChange} />
      <ContactsList contacts={filterContact()} removeContact={removeContact} />
    </div>
  );
}
