import React from "react";


export default class HappyBirthDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {classNames: "bg"};
    }

    componentDidMount() {
        let classNames = "bg";
        setTimeout(() => {
            this.setState({classNames: "bg -visible"});
        }, 1000);
    }

    render() {
        return (
            <div id="backGround" className={this.state.classNames}>
              <span className="title">
                <span>HAPPY</span>
                <span>BIRTH DAY</span>
                  <span>MAMA</span>
              </span>
            </div>
        )
    }
}