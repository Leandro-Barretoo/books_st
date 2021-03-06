import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './BookActions.css';
import { removeBook } from '../redux/books/books';

const BookActions = (props) => {
  const dispatch = useDispatch();
  const { bookid } = props;

  const removeBookFromStore = () => {
    const deleteBooks = () => (dispatch) => {
      dispatch(removeBook(bookid));
      fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ym9eiorepf3iLhrJ7Q7F/books/${bookid}`, {
        method: 'DELETE',
        body: JSON.stringify({ item_id: `${bookid}` }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response);
    };

    dispatch(deleteBooks());
  };

  return (
    <div className="Btn-Container">
      <button className="Btn" type="button">Comments</button>
      <button className="Btn" type="button" onClick={removeBookFromStore}>Remove</button>
      <button className="Btn" type="button">Edit</button>
    </div>
  );
};

BookActions.defaultProps = {
  bookid: '',
};

BookActions.propTypes = {
  bookid: PropTypes.string,
};

export default BookActions;
