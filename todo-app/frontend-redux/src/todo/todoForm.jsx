import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDescription, search, addTodo } from "./todoActions";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  componentWillMount() {
    this.props.search();
  }

  keyHandler(e) {
    const { add, search, description } = this.props;
    if (e.key === "Enter") e.shiftKey ? search() : add(description);
  }

  render() {
    const { addTodo, search, description } = this.props;
    return (
      <div role="form" className="todoForm">
        <Grid desktop="12" tablet="9" desktop="10">
          <input
            onChange={this.props.changeDescription}
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            onKeyUp={this.keyHandler}
            value={this.props.description}
          />
        </Grid>

        <Grid mobile="12" tablet="3" desktop="2">
          <IconButton
            styleBtn="primary"
            icon="plus"
            onClick={() => {
              addTodo(description);
            }}
            description={this.props.description}
          />
          <IconButton styleBtn="primary" icon="search" onClick={() => search(description)} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription, search, addTodo }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
