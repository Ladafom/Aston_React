import React from 'react';
import './style.css'

class EnteredFormData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='enteredFormData'>
        <h2>
          Entered form data:
        </h2>
        <p>
          {this.props.value ? this.props.value : 'No data entered :('}
        </p>
      </div>
    );
  }
}

export default EnteredFormData