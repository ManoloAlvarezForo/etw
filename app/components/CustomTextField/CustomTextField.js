import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
    palette: {
      textColor: '#232c39',
    }
  });
  

const CustomTextField = ({hintText, floatingLabelText, styles}) => {
    return(
        <MuiThemeProvider muiTheme={muiTheme}>
        <TextField style={styles}
          hintText={hintText}
            floatingLabelText={floatingLabelText}
          />
        </MuiThemeProvider>
    )
}

export default CustomTextField;