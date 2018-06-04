import React, { Component } from 'react';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      class: "section"
    }
  }

  handleClick = () => {
    if (this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    } else {
      this.setState({
        open: true,
        class: "section open"
      });
    }
  }

  getInitialState = () => {
    return {
      open: false,
      class: "section"
    }
  }

  render() {
    return (
      <div className={this.state.class}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
        </div>
        <div className="articlewrap">
          <div className="article">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
};

export default Section;