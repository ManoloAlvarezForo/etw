// @flow
import React from "react";
import DatePicker from "material-ui/DatePicker";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import styles from "./Preaching.css";
import Section from '../Utils/Section';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CustomPopover from '../CustomPopover/CustomPopover';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PreachingsActions from '../../actions/preachings';
import { withRouter } from 'react-router';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#232c39',
  }
});

const CustomDatePicker = ({ hintText }) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <DatePicker
        textFieldStyle={{ width: "120px" }}
        hintText={hintText}
      />
    </MuiThemeProvider>
  )
}

class Preaching extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: [
        "Maniana", "Tarde", "Noche"
      ]
    }
  }

  componentDidMount() {
    this.props.getPreachingModel(parseInt(this.props.id));
  }


  selectedAction = (parent) => {
    let index = this.props.preaching.preachingsDays.indexOf(parent);
    this.props.preaching.preachingsDays[index] = parent;
    this.props.updatePreaching(this.props.preaching);
  }

 
  render() {
    return (
      <div style={{ height: '100vh', margin: '10px', backgroundColor: 'rgb(222, 222, 222)', borderRadius: '5px'}} className="animated slideInRight">
      <div style={{ flexDirection: "column", display: "flex",height: '100vh', margin: '10px', overflow: 'hidden' }}>
        <div className={styles.date_selection}>
          <CustomDatePicker hintText="Fecha de Inicio" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: "20px", marginRight: "20px" }}>
              <b> --> </b>
            </div>
          </div>
          <CustomDatePicker hintText="Fecha Final" />
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px", overflow: 'auto', paddingLeft: '10px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '5px', }}>
          {this.props.preaching.preachingsDays.map((preachingDay, index) => (
            <Section
              key={index}
              title={preachingDay.day + " - " + preachingDay.date}
              content={
                <div style={{ paddingLeft: "10px" }}>
                  <div style={{ display: 'flex', flexDirection: 'row', border: '1px solid', borderRadius: '5px', marginBottom: '5px', boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 4px 0', paddingLeft: '5px', paddingRight: '5px' }}>
                    <div style={{ width: '10%', textAlign: 'center' }}><b>Cuando</b></div>
                    <div style={{ width: '10%', textAlign: 'center' }}><b>Hora</b></div>
                    <div style={{ width: '30%', textAlign: 'center' }}><b>Lugar</b></div>
                    <div style={{ width: '30%', textAlign: 'center' }}><b>Conductor</b></div>
                    <div style={{ width: '20%', textAlign: 'center' }}><b>Territorio</b></div>
                  </div>
                  {preachingDay.preachingEvents.map((preachingEvent, index) => (

                    <div style={{ paddingLeft: '5px', paddingRight: '5px', marginTop: '5px', marginBottom: '5px', borderRadius: '5px', display: 'flex', flexDirection: 'row', boxShadow: 'rgba(0, 0, 0, 0.2) 0 1px 4px 0' }} key={index}>
                      <CustomPopover parent={preachingDay} item={preachingEvent} menuList={this.state.menuList} type={'moment'} dataModel={preachingEvent.moment} onSelectedAction={this.selectedAction} />
                      <div style={{ width: '10%', textAlign: 'center' }}>{preachingEvent.time}</div>
                      <div style={{ width: '30%', textAlign: 'center' }}>{preachingEvent.side}</div>
                      <div style={{ width: '30%', textAlign: 'center' }}>{preachingEvent.preachingLead}</div>
                      <div style={{ width: '20%', textAlign: 'center' }}>{preachingEvent.territory}</div>
                    </div>
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    preaching: state.preaching,
    id: ownProps.match.params.id
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(PreachingsActions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Preaching));
