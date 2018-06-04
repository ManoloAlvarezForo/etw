// @flow
import React from "react";
import DatePicker from "material-ui/DatePicker";
import styles from "./PreachingForm.css";
import Collapsible from "../components/Collapsible";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import Section from "../components/Section";

class PreachingForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ flexDirection: "column", display: "flex" }}>
        <div className={styles.date_selection}>
          <DatePicker
            textFieldStyle={{ width: "120px" }}
            hintText="Fecha de Inicio"
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginLeft: "20px", marginRight: "20px" }}>
              <b> --> </b>
            </div>
          </div>
          <DatePicker
            textFieldStyle={{ width: "120px" }}
            hintText="Fecha final"
          />
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
