import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';

import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Sergey" surname="Nosanov" link="https://google.com" />
        <SayFullName name="Mike" surname="Shinoda" link="https://google.com" />
        <SayFullName name="Rob" surname="Bourdon" link="https://google.com" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
      <h1> Мое имя: {props.name}, фамилия: {props.surname} </h1>
      <a href={props.link}>Ссылка на мой профиль</a>
      </div>
    )
}

export default App;
