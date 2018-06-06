// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TitleActions from '../../actions/title';


class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.setTitle('Inicio');
  }
  render() {
    return (
      <div style={{ height: '100vh' }} className="animated pulse">
        <div style={{ height: '100vh', margin: '10px', backgroundColor: '#dedede', borderRadius: '5px' }}>
          <div style={{ padding: '10px', height: '100vh', color: '#3e3d3d' }}>
            <div style={{ fontWeight: 'bold', color: 'black', textAlign: 'center', margin: '50px', fontSize: '3rem' }}>Teocratic Wall</div>
            <div style={{margin: '50px'}}>
              Bienvenido a Teocratic Wall querido hermano recuerde que esta aplicacion a sido creada para ayudarnos a organizarnos de mejor manera en distintas
              partes de nuestro ministerio y reuniones de tal manera si usted no es la persona encargada de user esta aplicacion
              le pedimos por favor salir de la misma y desintalar esta aplicacion.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(TitleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

