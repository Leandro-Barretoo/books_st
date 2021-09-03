import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const AddForm = () => {
  const dispatch = useDispatch();
  const submitBookToStore = () => {
    const form = document.getElementById('form');

    const newBook = {
      item_id: uuidv4(),
      category: document.getElementById('categories-input').value,
      title: document.getElementsByClassName('TextInput')[0].value,
      author: 'unknown',
    };

    const fetchBooks = () => () => {
      fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ym9eiorepf3iLhrJ7Q7F/books', {
        method: 'POST',
        body: JSON.stringify(newBook),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json());
    };

    dispatch(fetchBooks());
    form.reset();
  };

  return (
    <div>
      <span>ADD NEW BOOK</span>
      <form id="form">
        <input className="TextInput" />
        <select id="categories-input">
          <option value="action">Action</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="economy">Economy</option>
        </select>
        <button type="button" onClick={submitBookToStore}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddForm;
