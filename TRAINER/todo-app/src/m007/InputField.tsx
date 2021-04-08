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
            {/* ChangeEventHandler<HTMLInputElement> | undefined' */}
                <input type="text" onChange={(event) => this.handleChange(event.target.value)} value={this.state.eingabe}/>
                <output>{this.state.eingabe}</output>
            </>
        )
    }
}