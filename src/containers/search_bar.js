import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    //setting the initial state to empty string.
    this.state = { term : '' };

    //this is required otherwise all the event call like onInputChange
    // function will get error using this keyword.
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // whenever the input is changed the state is updated to the input
  // by user.
  onInputChange(event){
    //console.log(event.target.value);
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    // this will prevent the form from submitting the input on clicking
    // submit button or by pressing enter key.
    event.preventDefault();

    //we need to fire action creator to fetch data whenever user submits the form.
    this.props.fetchWeather(this.state.term);
    // also we need to clear the input whenever the submit or enter is clicked
    this.setState({ term: ''});
  }

  render(){
    return(
      // we are using form here bcoz it have builtin functionality that
      // we can submit data either by clicking submit or by pressing enter
      // so no need to write extra code for this.
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Please enter city name"
          className="form-control"
          //we want value of the input is controlled by the state of component.
          value={this.state.term}
          // on input change below function will be called.
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
   );
 }
}

// to bind the action fetchWeather to our container SearchBar.
// so that fetchWeather action is available as this.props.fetchWeather
function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
