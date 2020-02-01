import axios from "axios";
const URL = "http://localhost:3003/api/todos";

export const changeDescription = event => ({
  type: "CHANGED_DESCRIPTION",
  payload: event.target.value
});

export const addTodo = description => {
  const request = axios.post(URL, { description });

  return [{ type: "TODO_ADDED", payload: request }, search()];
};

export const search = (description = "") => {
  const search = description ? `&description__regex=/${description}/` : "";
  const request = axios.get(`${URL}?sort=-createdAt${search}`);

  return {
    type: "TODO_SEARCHED",
    payload: request
  };
};
