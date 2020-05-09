import React, { Component } from 'react'
import classes from "./shell.module.scss";
import Films from "./films/films";
import Details from "./details/details";

class Shell extends Component {
    render() {
        return (
            <div>
                Shell
                <Films/>
                <Details/>
            </div>
        )
    }
}

export default Shell