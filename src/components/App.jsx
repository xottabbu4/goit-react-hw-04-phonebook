import { ContactForm } from './ContactForm/ContactForm';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    localStorage.getItem('contacts') &&
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  addContact = contact => {
    const isExist = this.state.contacts.find(
      data => data.name === contact.name
    );
    if (isExist) {
      alert(`${contact.name} already exist!`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  setFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <section className={css.phonebook}>
          <div className={css.container}>
            <h1>Phone Book</h1>
          </div>
          <div className={css.container}>
            <h2>Contacts</h2>
            <ContactForm addContact={this.addContact} btnText="Create"/>
            <Filter filter={this.state.filter} onChange={this.setFilter}/>
            <ContactList
              contacts={visibleContacts}
              deleteContact={this.deleteContact}
            />
          </div>
        </section>
      </>
    );
  }
}
