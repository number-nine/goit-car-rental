import { useSelector, useDispatch } from 'react-redux';
import * as contactsAPI from 'redux/contactOperations';
import {
  selectAuth,
  selectVisibleContacts,
} from 'redux/selectors';

import {
  ListWrapper,
  PrivateContact,
  SharedContact,
} from './ContactsList.styled';
import { Button } from '../common.styled';


const ContactsList = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return visibleContacts.length === 0 ? (
    <p>Nothing to show</p>
  ) : (
    <ListWrapper>
      {visibleContacts.map(({ id, name, phone, isPrivate }) => {
        return (
          <li key={id}>
            {name}: {phone}
            {isLoggedIn &&
              (isPrivate ? (
                <PrivateContact>private</PrivateContact>
              ) : (
                <SharedContact>shared</SharedContact>
              ))}
            {isLoggedIn && (
              <Button
                type="button"
                onClick={() => dispatch(contactsAPI.deleteContactById(id))}
              >
                 Delete
              </Button>
            )}
          </li>
        );
      })}
    </ListWrapper>
  );
};

export default ContactsList;
