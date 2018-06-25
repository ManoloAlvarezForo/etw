import React, { Component } from 'react';
import './Section.css'

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
          <div className="sectionHead" onClick={this.handleClick} style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{fontWeight: 'bold'}}>{this.props.title}</div>
          <div style={{fontStyle: 'italic', fontSize: '13px'}}>2 Salidas</div>
          </div>
        </div>
        <div className="articleWrap">
          <div className="article">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
};

export default Section;