import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";
import { SmurfList } from "./SmurfList"

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if ( this.props.error ) {
      return <h1>{ this.props.error }</h1>
    } else if ( this.props.fetching ) {
      return <h1>Loading...</h1>
    }
    return (
      <div>
        <SmurfList smurfs={ this.props.smurfs } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetchingSmurfs
  };
};

export default connect( mapStateToProps, { getSmurfs } )( App );