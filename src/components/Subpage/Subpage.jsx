import React from 'react';
import styles from './subpage.scss';
import pandas from '../../assets/images/pandas.jpg';

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
                <span className={styles.colorful}>{item.id}. </span>
                <span>{item.title}</span>
              </div>
            )
          })
        }
        <button onClick={this.props.showCompleted}>Show completed</button>
        <img src={pandas} width={200} height={200} />
      </div>
    )
  }
}

export default Subpage;
