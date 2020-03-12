import React, {Component} from 'react';
import '../App.css';

class Box extends Component {
constructor(){
        super()
        this.handelClick = this.handelClick.bind(this);
        this.state = {
            picture: "",
            boxClicked: 0,
            canClick: this.boxCaller.bind(this),
            name: "box",
        }
    }


    changePicture(value){
        this.setState({ picture: "0"})
            if (value === 9){
            this.setState({ picture: "💣"})
        } else if (value === 0) {
            this.numberStyle(value)
            this.setState({ picture: ""})
        }else {
            this.numberStyle(value)
            this.setState({ picture: value})
        }
    }

    numberStyle(value){
        if (value === 0){
            this.setState({ name: 'box box0'})
        }
        else if (value === 1){
            this.setState({ name: 'box box1'})
        }
        else if (value === 2){
            this.setState({ name: 'box box2'})
        }
        else if (value === 3){
            this.setState({ name: 'box box3'})
        }
        else if (value === 4){
            this.setState({ name: 'box box4'})
        }
        else if (value === 5){
            this.setState({ name: 'box box5'})
        }
        else if (value === 6){
            this.setState({ name: 'box box6'})
        }
        else if (value === 7){
            this.setState({ name: 'box box7'})
        }
        else if (value === 8){
            this.setState({ name: 'box box8'})
        }
    }

    handelClick = (e) => {
        if (e.altKey) {
            if (this.state.picture !== "🚩" && this.state.picture !== this.props.value){
                this.setState({ picture: "🚩"})
                this.setState({ boxClicked: 1})
            }
            else if (this.state.picture === "🚩"){
                this.setState({ picture: ""})
                this.setState({ boxClicked: 0})

            }

        } else {
         this.boxCaller()
        }
    }

    cascade(index1, index2) {

    }

    boxCaller() {
        if (this.state.boxClicked === 0 && this.state.picture !== "🚩"){
            this.changePicture(this.props.value)
            this.setState({ boxClicked: 1})
            if (this.props.value === 0) {
                this.cascade(this.props.index1, this.props.index2)
            }
        }
        else {

        }
    }
    render(){
        return (
            <div className = {this.state.name} onClickCapture = { this.handelClick } ref = {this.canClick}>

                {this.state.picture}

            </div>
        );
    }
}

export default Box;
