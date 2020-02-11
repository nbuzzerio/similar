const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const Dog = require('./components/dog.jsx').default;

class Similar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Dog id = '1'></Dog>
        <Dog id = '2'></Dog>
      </div>
    )
  }
}

// ReactDOM.render(
//   <App id = '1'/>, document.getElementById('similarContainer')
// )

window.Similar = Similar;
