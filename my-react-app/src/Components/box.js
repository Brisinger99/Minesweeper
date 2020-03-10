import React, {Component} from 'react';
import '../App.css';

class Box extends Component {
constructor(){
        super()
        this.state = {
            picture: "",
            boxClicked: 0,
            canClick: this.boxCaller.bind(this)
        }
    }


    changePicture(value){
        if (value === 0){
            this.setState({ picture: "❌"})
        } else if (value){
            this.setState({ picture: "💥"})
        }
    }


    boxCaller() {
        if (this.props.canShoot === 0 ){
            if (this.state.boxClicked === 0){
                this.props.clickFunction(this.props.value, this.props.ammo);
                this.setState({ boxClicked: 1})
            }
            this.changePicture(this.props.value)
        }
    }
    render(){
        return (
            <div className = "box" onClick = { this.state.canClick }>
                {this.state.picture}
            </div>
        );
    }
}

export default Box;
