import React from 'react';

const items =[
  'First Interview',
  'Second Interview',
  'Third Interview'
];

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <p>
        Company:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </p>
      <p>
        Location:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </p>
      <p>
        Contact:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </p>
      <p>
        Notes:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </p>
        <div>
          <input type="checkbox" value="First Interview" onChange={this.toggleCheckboxChange}/>
          First Interview
        </div>
        <div>
          <input type="checkbox" value="First Interview" onChange={this.toggleCheckboxChange}/>
          Second Interview
        </div>
        <div>
          <input type="checkbox" value="First Interview" onChange={this.toggleCheckboxChange}/>
          Offer Interview
        </div>
        <div>
          <input type="checkbox" value="First Interview" onChange={this.toggleCheckboxChange}/>
          Rejected Interview
        </div>
      <div>
        <button type="submit" onClick={this.handleClick}> Save </button>
      </div>
      </form>
    );
  }
}