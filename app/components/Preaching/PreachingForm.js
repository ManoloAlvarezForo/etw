// @flow
import React from "react";
import DatePicker from "material-ui/DatePicker";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card"; 
import styles from "./PreachingForm.css";
import Section from '../Utils/Section';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#232c39',
  },
  appBar: {
    height: 50,
  },
});

const CustomDatePicker = ({ hintText}) => {
  return(
    <MuiThemeProvider muiTheme={muiTheme}>
    <DatePicker
            textFieldStyle={{ width: "120px" }}
            hintText={ hintText}
          />
    </MuiThemeProvider>
  )
}

class PreachingForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ flexDirection: "column", display: "flex" }}>
        <div className={styles.date_selection}>
          <CustomDatePicker hintText="Fecha de Inicio" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: "20px", marginRight: "20px" }}>
              <b> --> </b>
            </div>
          </div>
          <CustomDatePicker hintText="Fecha Final" />
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          {this.props.preaching.preachings.map((preachingDay, index) => (
            <Section
              key={index}
              title={preachingDay.day + " - " + preachingDay.date}
              content={
                <div style={{ paddingLeft: "10px" }}>
                  {preachingDay.preachingEvents.map((preachingEvent, index) => (
                    <div key={index}>
                      {" "}
                      <b>{preachingEvent.moment}</b> {preachingEvent.time} {preachingEvent.preachingLead}
                    </div>
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default PreachingForm;
