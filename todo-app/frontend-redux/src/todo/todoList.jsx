import React from "react";
import { connect } from "react-redux";
import IconButton from "../template/iconButton";

const todoList = props => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? "done" : ""}>{todo.description}</td>
        <td>
          <IconButton
            styleBtn="primary"
            icon="check-square-o"
            onClick={() => props.handleCheck(todo)}
          />
          <IconButton styleBtn="danger" icon="trash" onClick={() => props.handleRemove(todo)} />
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
//const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch)

export default connect(mapStateToProps)(todoList);
