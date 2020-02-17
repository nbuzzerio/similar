import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import Dog from './dog.jsx';
import MenuArrow from './arrows.jsx';

const StyledMenu = styled.div`
  clear:both;
  background-color: #efeef1;
  max-width: 1220px;
  margin: 0 auto;
  padding-top: 20px;
  display: inline-block;
  position: relative;
`;

const DogContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
`;

class DogMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var mappedItems = this.props.list.map(el => {
      const {id} = el;
      return <Dog id={id} key={id} />;
    });
    return (
      <StyledMenu>
        <MenuArrow direction = "left"/>
        <DogContainer>
          {mappedItems}
        </DogContainer>
        <MenuArrow direction = "right"/>
      </StyledMenu>
    )
  }
}

export default DogMenu;