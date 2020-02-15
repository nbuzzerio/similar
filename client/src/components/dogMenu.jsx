import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';
import Dog from './dog.jsx';

const StyledMenu = styled.div`
  clear:both;
  background-color: #efeef1;
  max-width: 1220px;
  margin: 0 auto;
  padding-top: 20px;
  display: inline-block;
`;

const ArrowContainer = styled.div`
  border-radius: 50px;
  height: 44px;
  width: 44px;
  background: #FFF;
  opacity: .6;
  text-align:center;
  line-height: 44px;
  font-size: 50px;
  font-weight: 900;
  position: absolute;
  top: 200px;
  margin-left: 5px;
`;

const ArrowContainerRight = styled.div`
  border-radius: 50px;
  height: 44px;
  width: 44px;
  background: #FFF;
  opacity: .6;
  text-align:center;
  line-height: 44px;
  font-size: 50px;
  font-weight: 900;
  position: absolute;
  top: 200px;
  margin-left: 1170px;
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
        <ArrowContainer>
          {'<'}
        </ArrowContainer>
        <DogContainer>
          {mappedItems}
        </DogContainer>
        <ArrowContainerRight>
          {'>'}
        </ArrowContainerRight>
      </StyledMenu>
    )
  }
}

export default DogMenu;