import React from "react";
import Table from "react-bootstrap/esm/Table";
import { Button } from "@material-ui/core";

function Pastries() {

    return(
        <div class="container-fluid">
        <Table class="table">
            <tr>
                <th class="w-50">Croissant</th>
                <th class="w-20">₹90</th>
                <Button>-</Button>
                <Button>+</Button>
            </tr>
            <tr>
                <th>Eclairs</th>
                <th>₹80</th>
                <Button>-</Button>
                <Button>+</Button>
            </tr>
            <tr>
                <th>Macaroons</th>
                <th>₹60</th>
                <Button>-</Button>
                <Button>+</Button>
            </tr>
            <tr>
                <th>Red Velvet</th>
                <th>₹50</th>
                <Button>-</Button>
                <Button>+</Button>
            </tr>
            <tr>
                <th>Mousse</th>
                <th>₹90</th>
                <Button>-</Button>
                <Button>+</Button>
            </tr>
        </Table>
        </div>
    )
}

export default Pastries;