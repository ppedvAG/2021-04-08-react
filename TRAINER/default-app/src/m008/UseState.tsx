import { useState } from "react"

export default function UseState() {
    const [myState, changeMyState] = useState({ eingabe: 'placeholder' });
    let handleChange = (inputEingabe: string) => {
        changeMyState({ eingabe: inputEingabe })
    }
    return (
        <>
            <h3>Use State Hook</h3>
            <input type="text" onChange={(event) => handleChange(event.target.value)} value={myState.eingabe} />
            <output>{myState.eingabe}</output>
        </>
    )
}

/*
import { Component } from "react"

export default class InputField extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            eingabe: 'placeholder'
        }
    }

    handleChange = (inputEingabe: string) => {
        this.setState({eingabe: inputEingabe})

    }

    render() {
        return (
            <>
            <input type="text" onChange={(event) => this.handleChange(event.target.value)} value={this.state.eingabe}/>
            <output>{this.state.eingabe}</output>
        </>
    )
}
} */