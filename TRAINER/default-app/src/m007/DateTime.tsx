import { Component } from "react";

export class DateTime extends Component<{}, { timeProp: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            timeProp: new Date().toLocaleTimeString()
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ timeProp: new Date().toLocaleTimeString() })
        }, 1000)
    }
    componentWillUnmount() {
        console.log('will unmount');
    }

    render() {
        return (
            <>
                <span>{this.state.timeProp}</span>
            </>
        )
    }
}