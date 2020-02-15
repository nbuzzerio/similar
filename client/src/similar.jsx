const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const styled = require('styled-components');
const Dog = require('./components/dog.jsx').default;

class Similar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var dogID = Number.parseFloat(window.location.pathname);
    if (Number.isNaN(dogID)) {
      return;
    }
    

  }

  render() {
    return (
      <div>
        <Dog id = '1'></Dog>
        <Dog id = '2'></Dog>
        <Dog id = '3'></Dog>
        <Dog id = '4'></Dog>
        <Dog id = '5'></Dog>
        <Dog id = '6'></Dog>
        <Dog id = '7'></Dog>
        <Dog id = '8'></Dog>
        <Dog id = '9'></Dog>
        <Dog id = '10'></Dog>
      </div>
    )
  }
}

// ReactDOM.render(
//   <App id = '1'/>, document.getElementById('similarContainer')
// )

window.Similar = Similar;
