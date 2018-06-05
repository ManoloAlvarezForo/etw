import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
        textColor: '#232c39',
    }
});

 class CustomPopover extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            value: 0
        };
    }

    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    onChange = (event: object, menuItem: object, index: number) => {
        this.setState({
            open: false,
            value: index
        });
    }

    onChangeEvent = (event, index, value) => {
        this.setState({ value })
    }

    render() {
        return (
            <div style={{ width: '10%' }}>
                <div style={{ cursor: 'pointer'}}
                    onClick={this.handleClick}
                    value={this.state.value}
                    onChange={this.onChangeEvent}
                >{this.props.dataModel}</div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose}
                        animation={PopoverAnimationVertical}
                    >
                        <Menu onItemClick={this.onChange}>
                            <MenuItem primaryText="Manana" />
                            <MenuItem primaryText="Tarde" />
                            <MenuItem primaryText="Noche" />
                        </Menu>
                    </Popover>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default CustomPopover;