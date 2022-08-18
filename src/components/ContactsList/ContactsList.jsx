// import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import { removeContact } from '../../redux/contacts/contacts-actions';
import { useDispatch, useSelector } from 'react-redux';

export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()),
    );
  };

  const filteredContacts = getFilteredContacts();
  return (
    <ul className={s.list}>
      {filteredContacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <p className={s.name}>
            {contact.name}: {contact.number}
          </p>
          <button
            type="button"
            onClick={() => dispatch(removeContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// ContactsList.propTypes = {
//   filterContact: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }),
//   ),
//   deleteContact: PropTypes.func.isRequired,
// };
