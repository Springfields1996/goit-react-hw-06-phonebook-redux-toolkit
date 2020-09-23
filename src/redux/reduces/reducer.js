import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContacts } from '../actions/contactActions';
import { filterContacts } from '../actions/filterAction';

export const contactReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContacts]: (state, action) => [
    ...state.filter(el => el.id !== action.payload),
  ],
});

export const filterReducer = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
});

export const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactReducer,
});
