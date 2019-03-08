import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../actions';

class AddSmurf extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = () => {
    const { name, age, height } = this.state;
    this.props.postSmurf({ name, age, height });
    this.setState({ name: '', age: '', height: '' });
  };

  render() {
    return (
      <form>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={ this.state.name }
          onChange={this.handleChanges}
        />
        <input
          name="age"
          type="text"
          placeholder="age"
          value={ this.state.age }
          onChange={ this.handleChanges }
        />
        <input
          name="height"
          type="text"
          placeholder="height"
          value={ this.state.height }
          onChange={ this.handleChanges }
        />
        <button onClick={() => this.addSmurf()}>
          Add Smurf
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect( mapStateToProps, { postSmurf } )( AddSmurf );