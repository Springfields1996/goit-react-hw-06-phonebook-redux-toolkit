import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT } from '../types';

export const addContact = createAction(ADD_CONTACT);
export const deleteContacts = createAction(DELETE_CONTACT);
