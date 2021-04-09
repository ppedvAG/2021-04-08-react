import { Component } from "react";

export default class Lifecycle extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 4,
            intervalId: 0
        }            
        console.log('constructor');
    }
    // intervId = 3; // könnte man auch aus Testzwecken verwenden
    componentDidMount(){
        console.log('componentDidMount');
        let intId  = setInterval(() => {
            let counter = this.state.counter
            counter++
            this.setState({counter: counter})}
            , 2000)
            this.setState({intervalId: intId})
    }
    // z.B bei State-Änderung
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    componentDidCatch(){
        console.log('componentDidCatch');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.state.intervalId) // interval ist nicht gestoppt ohne React.StrictMode!
    }
    render() {
        return (
            <>
            <h3>Lebenszyklusevents</h3>
            <p>{this.props.propForProps}</p>
            <p>{this.state.counter}</p>
            </>
        )
    }
}