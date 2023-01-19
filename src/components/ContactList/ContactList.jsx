import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ deleteContact, contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          <p className={css.contactInfo}>{contact.name}</p>
          <p className={css.contactInfo}>{contact.number}</p>
          <button
            className={css.contactItemButton}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
