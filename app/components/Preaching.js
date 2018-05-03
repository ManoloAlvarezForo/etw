// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const preachings = [
    { id: 1, date: 'Del 1 de Enero de 2018 al 3 de Enero de 2018'},
    { id: 2, date: 'Del 3 de Enero de 2018 al 6 de Enero de 2018'}
]

export default class Preaching extends Component<Props> {
  props: Props;
  constructor(props){
      super(props);
      this.state = {
          preachings: preachings
      }
  }

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <div style={{ margin: '10px', display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#dedede', borderRadius: '5px' }}>
         <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
         <div style={{ color: '#3e3d3d', marginBottom: '10px', fontWeight: 'bold' }}>
            SALIDAS A LA PREDICACION
          </div>
         { this.state.preachings.map((preaching, index) => <a style={{padding: '10px', borderColor: '#7b7b7b', borderRadius: '5px', margin: '3px', border: '1px solid #8a8989', color: 'black'}} key={index}>{preaching.date}</a>)}
        </div>
         </div>
      </div>
    );
  }
}
