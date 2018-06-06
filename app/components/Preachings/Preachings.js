// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import preachingStyles from "./Preachings.css";
import { getPreachingModel } from "../../actions/preachings";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TitleActions from "../../actions/title";
import LargeModal from "../Modals/LargeModal";
import PreachingForm from "../Preaching/PreachingForm";

const styles = {
  mainContainer: {
    height: "100vh"
  },
  bodyContainer: {
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "#dedede",
    borderRadius: "5px"
  },
  preachingsContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "10px"
  },
  list: {
    height: "50px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    width: "95%",
    color: "black",
    fontWeight: "bold",
    fontSize: '1.1rem'
  },
  newPreachingDialog: {
    transition: "0.3s",
    fontSize: "20px",
    fontWeight: "bold",
    borderRadius: "5px",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 3px 8px 1px"
  },
  buttonContainer: {
    width: "42px"
  },
  listContainer: {
    display: "flex",
    flexDirection: "column"
  },
  listElement: {
    fontWeight: 'bold'
  }
};

class Preachings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalStyle: "modal",
      modalCard: "modal-card animated zoomIn",
      preachingSelected: {},
      title: "SALIDAS A LA PREDICACION"
    };
  }

  componentDidMount() {
    this.props.setTitle("Predicacion");
    this.props.loadPreachings();
  }

  showNewPreachingDialog = () => {
    this.props.getPreachingModel();
    this.setState({
      modalStyle: "modal is-active"
    });
  };

  showDetailPreachingDialog(preachingId) {
    this.props.getPreachingModel(preachingId);
    this.setState({
      modalStyle: "modal is-active"
    });
  }

  closeDialog = () => {
    this.setState({
      modalStyle: "modal"
    });
    this.props.cleanPreachingModel();
  };

  savePreaching = () => {
    alert(JSON.stringify(this.props.preaching));
    this.closeDialog();
  }

  render() {
    return (
      <div className="animated pulse" style={styles.mainContainer}>
        <div style={styles.bodyContainer}>
          <div style={styles.preachingsContainer}>
            <div style={styles.list}>
              <div style={styles.title}>
                {this.state.title}
              </div>
              <div style={styles.buttonContainer}>
                <button onClick={this.showNewPreachingDialog}
                  style={styles.newPreachingDialog}
                  className="button is-primary">
                  +
                </button>
              </div>
            </div>
            <br />
            <div className={preachingStyles.customlist} style={styles.listContainer}>
              {this.props.preachings.map((preaching, index) => (
                <a onClick={() => this.showDetailPreachingDialog(preaching.id)} style={ styles.listElement} key={index}>
                  {preaching.initDate + " - " + preaching.endDate}
                </a>
              ))}
            </div>
            <LargeModal
              title=""
              content={<PreachingForm preaching={this.props.preaching} />}
              modalStyle={this.state.modalStyle}
              closeDialog={this.closeDialog}
              save={ this.savePreaching }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(TitleActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Preachings);
