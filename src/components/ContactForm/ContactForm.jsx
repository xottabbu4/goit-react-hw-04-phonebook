import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const state = {
    name: setName,
    number: setNumber,
  };

  const inputChange = event => {
    const { name, value } = event.target;
    state[name](value);
    }
  
    const handleSubmit = event => {
      event.preventDefault();
      addContact(name, number);
      event.target.reset();
    };

    return (
      <>
        <div>
          <form className={css.form} onSubmit={handleSubmit}>
            <p className={css.formText}>Name</p>
            <input
              className={css.formInput}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={inputChange}
              value={name}
            />
            <p className={css.formText}>Number</p>
            <input
              className={css.formInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={inputChange}
              value={number}
            />
            <button className={css.formButton} type="submit">Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
