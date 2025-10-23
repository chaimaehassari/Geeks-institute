import React from 'react';
import './Exercise3.css';

class Exercise extends React.Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>This is a header</h1>
        <p className="para">This is a paragraph with CSS styling</p>
        <a href="https://reactjs.org">Go to React website</a>
        <form>
          <input type="text" placeholder="Type something..." />
          <button>Submit</button>
        </form>
        <img src="https://placekitten.com/200/300" alt="Cute cat" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
