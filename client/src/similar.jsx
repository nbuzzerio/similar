const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const styled = require('styled-components').default;
const Dog = require('./components/dog.jsx').default;
const DogMenu = require('./components/dogMenu.jsx').default;
// list of items

const list = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
  { id: '10' }
];

const StyledHeader = styled.h3`
  color: #6504b5;
  text-align: center;
  font-size: 40px;
  clear:both;
  margin: 0 10px;
`;

class Similar extends React.Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
  }

  componentDidMount() {
    var dogID = Number.parseFloat(window.location.pathname);
    if (Number.isNaN(dogID)) {
      return;
    }
  }
  
  render() {

    const menu = this.menuItems;

    return (
      <div className = 'App'>
        <StyledHeader>Similar Breeds</StyledHeader>
        <DogMenu
          list = {list}
        />
      </div>
    )
  }
}

// ReactDOM.render(
//   <App id = '1'/>, document.getElementById('similarContainer')
// )

window.Similar = Similar;
