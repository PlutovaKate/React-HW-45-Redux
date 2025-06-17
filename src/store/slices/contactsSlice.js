import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json";
import { v4 as uuidv4 } from "uuid";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: data,
  reducers: {
    addContact: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
    },
    deleteContact: (state, action) => {
      return state.filter(
        (contact) => String(contact.id) !== String(action.payload)
      );
    },
    updateContact: (state, action) => {
      return state.map((contact) =>
        String(contact.id) === String(action.payload.id)
          ? action.payload
          : contact
      );
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactsSlice.actions;

export default contactsSlice;
