import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(
     JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    const isExist = contacts.find(contact => contact.name === name);
    if (isExist) {
      alert(`${contact.name} already exist!`);
      return;
    }

    setContacts([...contacts, contact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onInputChange = event => {
    setFilter({ filter: event.currentTarget.value });
  };

  const getVisibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
    return (
      <>
        <section className={css.phonebook}>
          <div className={css.container}>
            <h1>Phone Book</h1>
          </div>
          <div className={css.container}>
            <h2>Contacts</h2>
            <ContactForm addContact={addContact} btnText="Create"/>
            <Filter filter={filter} onChange={onInputChange}/>
            <ContactList
              contacts={getVisibleContacts}
              deleteContact={deleteContact}
            />
          </div>
        </section>
      </>
    );
  };
