import React, { Component } from "react";
import { Link } from "react-router-dom";
import sideNavStyles from "./Sidenav.css";

const options = [
    { id: 1, name: "Inicio", path: "/home", isSelected: true },
    { id: 2, name: "Predicacion", path: "/preachings", isSelected: false },
    { id: 3, name: "Microfonos", path: "/counter", isSelected: false },
    { id: 4, name: "Acomodadores", path: "/counter", isSelected: false },
    { id: 5, name: "Capitanes Bus", path: "/counter", isSelected: false },
    { id: 6, name: "Configuracion", path: "/counter", isSelected: false },
    { id: 7, name: "Logout", path: "/", isSelected: false }
];

const styles = {
    sideNavContainer: {
        height: "100vh",
        width: "17%",
        minWidth: "220px",
        display: "flex",
        flexDirection: "column"
    },
    sideNavHeaderContainer: {
        marginTop: "5px",
        marginBottom: "50px"
    },
    sideNavTitle: {
        height: "90px",
        fontWeight: "bold",
        color: "rgb(249, 247, 250)",
        fontFamily: "monospace",
        fontSize: "5rem",
        textAlign: "center"
    },
    sideNavSubtitle: {
        fontSize: "1.1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    sideNavBodyContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
};

export default class Sidenav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: options,
            isSelected: "is-a-selected",
            title: "TW",
            subTitle: "Los Sauces"
        };
    }

    selectOption(optionSelected) {
        this.setState({
            options: this.state.options.map(option => {
                optionSelected === option
                    ? (option.isSelected = true)
                    : (option.isSelected = false);
                return option;
            })
        });
    }

    render() {
        return (
            <div className="sidenav-background" style={styles.sideNavContainer}>
                <div style={styles.sideNavHeaderContainer}>
                    <div style={styles.sideNavTitle}>{this.state.title}</div>
                    <div style={styles.sideNavSubtitle}> {this.state.subTitle}</div>
                </div>
                <div style={styles.sideNavBodyContent}>
                    {this.state.options.map((option, index) => (
                        <Link
                            onClick={() => this.selectOption(option)}
                            className={`${
                                option.isSelected ? sideNavStyles.is_selected : sideNavStyles.a_custom
                                }`}
                            key={index}
                            to={option.path}
                        >
                            {option.name}
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
