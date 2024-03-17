import { useDispatch } from 'react-redux';

import { contactsOperations } from '../../redux/contacts';
import styles from './styles.module.css';

export const ContactItem = ({ item }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  return (
    <li className={styles.item}>
      <p>{item.name}:</p>
      <div className={styles.number}>{item.number}</div>
      <button type="button" onClick={() => onDeleteContact(item.id)}>
        delete
      </button>
    </li>
  );
};
