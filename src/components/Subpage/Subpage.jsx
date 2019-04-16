import React from 'react';

class Subpage extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <h2>Hello, I'm a subpage and this is mysterious todo list...</h2>
        {
          this.props.data.map((item) => {
            return (
              <div key={item.id}>
                <span>{item.id}. </span>
                <span>{item.title}</span>
              </div>
            )
          })
        }
        <button onClick={this.props.showCompleted}>Show completed</button>
      </div>
    )
  }
}

export default Subpage;
