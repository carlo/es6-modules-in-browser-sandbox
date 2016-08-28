import h from 'react-hyperscript';
import React from 'react';
import ReactDOM from 'react-dom';


class BorkBork extends React.Component {

  render() {
    return (
      h('div', [
        h('h3#headline', 'React is go!'),
        h('p', 'This is the best day of my life.'),
      ])
    );
  }

}


ReactDOM.render(
  React.createElement(BorkBork),
  document.querySelector('#component')
);
