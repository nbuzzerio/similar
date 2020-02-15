import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styled from 'styled-components';

const StyledImage = styled.img`
  height: 300px;
  width: 500px;
  object-fit: contain;
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
      <div>
        <StyledImage src = {this.state.url}></StyledImage>
        <div id = 'name'>{this.state.name}</div>
      </div>
    )
  }
}

export default Dog;