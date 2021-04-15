import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus, faSyncAlt, faMinus} from '@fortawesome/free-solid-svg-icons';

class Clicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    onClickPlusCounter = () => {
        this.setState((prevState) => ({counter: prevState.counter + 1}))
    }

    onClickResetCounter = () => {
        this.setState(() => ({counter: 0}))
    }

    onClickMinusCounter = () => {
        this.setState((prevState) => ({counter: prevState.counter - 1}))
    }

    render() {
        return (
            <div className="container">
                <div className="clicker">
                    <div className="clicker-display">
                        <h1>{this.state.counter}</h1>
                    </div>
                    <ul className="clicker-btn">
                        <li onClick={this.onClickPlusCounter}><i><FontAwesomeIcon icon={faPlus}/></i></li>
                        <li onClick={this.onClickResetCounter}><i><FontAwesomeIcon icon={faSyncAlt}/></i></li>
                        <li onClick={this.onClickMinusCounter}><i><FontAwesomeIcon icon={faMinus}/></i></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Clicker;