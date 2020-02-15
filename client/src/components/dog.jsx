import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

const StyledImage = styled.img`
  height: 260px;
  margin-right: 10px;
  width: 560px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const StyledImageDiv = styled.div`
  display: inline-block;
`;

const StyledNameDiv = styled.div`
  margin-right: 10px;
  height: 33px;
  width: 480px;
  border-radius: 0 0 10px 10px;
  background-color: #FFF; 
  padding: 15px 40px;
`;

const StyledNameText = styled.h4`
  text-align: center;
  color: #6504b5;
  line-height: 1.2;
  font-size: 24px;   
  margin:0;
  font-weight: 400;
`;

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {url:'', name:''};

    this.setUrl = this.setUrl.bind(this);

    this.setUrl();
  }

  setUrl() {
    var that = this;
    $.ajax({
      method:'GET',
      url: 'http://localhost:3001/url/' + that.props.id
    }).done(function(data){
      that.setState({
        url: data,
        name: 'Dog'
      })
    })
  }

  render() {
    return (
      <StyledImageDiv>
        <StyledImage src = {this.state.url}></StyledImage>
        <StyledNameDiv>
          <StyledNameText>
            {this.state.name}
          </StyledNameText>
        </StyledNameDiv>
      </StyledImageDiv>
    )
  }
}

export default Dog;