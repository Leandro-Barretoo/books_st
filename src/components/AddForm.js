import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const dispatch = useDispatch();

const submitBookToStore = () => {
  const newBook = {
    id: uuidv4(),
    categorie: document.getElementById('categories-input').value,
    title: document.getElementByClassName('TextInput')[0].value,
    author: 'unknown',
  };
  dispatch(addBook(newBook));
};

const AddForm = () => (
  <div>
    <span>ADD NEW BOOK</span>
    <form>
      <input className="TextInput" />
      <select id="categories-input">
        <option value="action">Action</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="economy">Economy</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>ADD BOOK</button>
    </form>
  </div>
);

export default AddForm;
