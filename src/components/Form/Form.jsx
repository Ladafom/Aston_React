import React from 'react';
import EnteredFormData from '../EnteredFormData/EnteredFormData';
import './style.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submitted: false,
    };
    this.inputRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log('componentDidMount invoked')
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value ||
        prevState.submitted !== this.state.submitted ||
        prevState.focused !== this.state.focused) {
      console.log('componentDidUpdate invoked');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount invoked')
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      value: event.target.value,
      submitted: false,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      submitted: true
    });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className='form'>
          <label>
            Enter something here:
          </label>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            autoFocus={this.state.focused}
            ref={this.inputRef}
          />
          <input
            type="submit"
            value="Submit"
            disabled={ this.state.value.toLowerCase() === 'реакт'}
          />
        </form>

        <button
          onClick={()=>{this.inputRef.current.focus()}}
        >
          Focus
        </button>

        {
          this.state.submitted &&
          <EnteredFormData value={this.state.value}/>
        }
      </>
    );
  }
}

export default Form