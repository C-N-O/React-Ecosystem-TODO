import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createToDo } from './actions';
import './NewToDoForm.css';

const NewToDoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className='new-todo-form'>
      <input
        className='new-todo-input'
        type='text'
        placeholder='Type your new todo here'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          //check if the text is already in the todo list
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
        className='new-todo-button'
      >
        Create ToDo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createToDo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);
