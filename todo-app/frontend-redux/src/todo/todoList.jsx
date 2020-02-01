import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkTodo, deleteTodo } from "./todoActions";

import IconButton from "../template/iconButton";

const todoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    const { checkTodo, deleteTodo } = props;
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "done" : ""}>{todo.description}</td>
        <td>
          <IconButton
            styleBtn="primary"
            icon="check-square-o"
            onClick={() => props.checkTodo(todo)}
          />
          <IconButton styleBtn="danger" icon="trash" onClick={() => props.deleteTodo(todo)} />
        </td>
      </tr>
    ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = state => ({ list: state.todo.list });
const mapDispatchToProps = dispatch => bindActionCreators({ checkTodo, deleteTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
