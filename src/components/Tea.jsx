import React from "react";
import Table from "react-bootstrap/esm/Table";
import { Button } from "@material-ui/core";

function Tea() {

    return(
        <div class="container-fluid">
        <Table class="table">
        <tr>
            <th class="w-50">Elaichi Tea</th>
            <th class="w-30">₹15</th>
            <Button>-</Button>
            <Button>+</Button>
        </tr>    
        <tr>
            <th>Ginger Tea</th>
            <th>₹15</th>
            <Button>-</Button>
            <Button>+</Button>
        </tr>
        <tr>
            <th>Green Tea</th>
            <th>₹25</th>
            <Button>-</Button>
            <Button>+</Button>
        </tr>
        <tr>
            <th>Lemon Tea</th>
            <th>₹20</th>
            <Button>-</Button>
            <Button>+</Button>
        </tr>
        <tr>
            <th>Black Tea</th>
            <th>₹25</th>
            <Button>-</Button>
            <Button>+</Button>
        </tr>
        </Table>
        </div>
    )
}

export default Tea;