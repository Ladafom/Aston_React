import React from 'react';

class EnteredFormData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
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