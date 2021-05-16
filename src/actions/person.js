import { ADD_PERSON, DELETE_PERSON } from "./types";

export const addPerson = (person) => ({
  type: ADD_PERSON,
  data: person,
});

export const deletePerson = (key) => ({
  type: DELETE_PERSON,
  key: key,
});
