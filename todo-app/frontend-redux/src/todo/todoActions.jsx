import axios from "axios";
const URL = "http://localhost:3003/api/todos";

export const changeDescription = event => ({
  type: "CHANGED_DESCRIPTION",
  payload: event.target.value
});

export const search = (description = "") => {
  const search = description ? `&description__regex=/${description}/` : "";
  const request = axios.get(`${URL}?sort=-createdAt${search}`);

  return {
    type: "TODO_SEARCHED",
    payload: request
  };
};

export const addTodo = description => {
  //const request = ;
  if (!description) return;
  return dispatch => {
    axios
      .post(URL, { description })
      .then(resp =>
        dispatch({
          type: "TODO_ADDED",
          payload: resp.data
        })
      )
      .then(resp => dispatch(search()));
  };
  return [{ type: "TODO_ADDED", payload: request }, search()];
};

export const deleteTodo = todo => {
  return dispatch => {
    axios
      .delete(`${URL}/${todo._id}`)
      .then(resp =>
        dispatch({
          type: "TODO_DELETED",
          payload: resp.data
        })
      )
      .then(resp => dispatch(search()));
  };
};

export const checkTodo = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: !todo.done })
      .then(resp =>
        dispatch({
          type: "TODO_CHECKED",
          payload: resp.data
        })
      )
      .then(resp => dispatch(search()));
  };
};
