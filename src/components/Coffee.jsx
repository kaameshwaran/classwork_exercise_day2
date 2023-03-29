import React from "react";
import Table from 'react-bootstrap/esm/Table'
import { Button } from "@material-ui/core";
import ButtonGroup from "@mui/material/ButtonGroup";
import { yellow } from "@material-ui/core/colors";
import {createTheme} from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
    palette: {
      primary: yellow,
    },
  });
function Coffee() {

    return(

        <div class="container-fluid">
    <Table class="table table-striped">   
        <tr>
            <th class="w-50">Filter Coffee</th>
            <th class="w-20">₹20</th>
            <ThemeProvider theme={theme}>
            <ButtonGroup variant="contained" aria-label="contained primary button group" >
            <Button>-</Button>
            <Button>+</Button>
            </ButtonGroup>
            </ThemeProvider>
        </tr>
        <tr>
            <th>Black Coffee</th>
            <th>₹25</th>
            <ThemeProvider theme={theme}>
            <ButtonGroup variant="contained" aria-label="contained primary button group">
            <Button>-</Button>
            <Button>+</Button>
            </ButtonGroup>
            </ThemeProvider>
        </tr>
        <tr>
            <th>Cold Coffee</th>
            <th>₹40</th>
            <ThemeProvider theme={theme}>
            <ButtonGroup variant="contained" aria-label="contained primary button group">
            <Button>-</Button>
            <Button>+</Button>
            </ButtonGroup>
            </ThemeProvider>
        </tr>
        <tr>
            <th>Cappuccino</th>
            <th>₹50</th>
            <ThemeProvider theme={theme}>
            <ButtonGroup variant="contained"  aria-label="contained primary button group">
            <Button>-</Button>
            <Button>+</Button>
            </ButtonGroup>
            </ThemeProvider>
        </tr>
        <tr>
            <th>Hot Chocolate</th> 
            <th>₹50</th>
            <ThemeProvider theme={theme}>
            <ButtonGroup variant="contained"  aria-label="contained primary button group">
            <Button>-</Button>
            <Button>+</Button>
            </ButtonGroup>
            </ThemeProvider>
        </tr>
    </Table>
    </div>
    );
    
}

export default Coffee;