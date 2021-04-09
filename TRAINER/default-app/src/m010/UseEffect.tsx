import { useEffect, useState } from "react";

export default function UseEffect() {
    const [myState, changeState] = useState({ timeProp: new Date().toLocaleTimeString() })

    useEffect(
        () => {
        const intervalId = setInterval(() => {
           changeState({ timeProp: new Date().toLocaleTimeString() })
        }, 1000)
        return(
            () => {
                console.log('will unmount in UseEffect');
                clearInterval(intervalId);
            }
        )
    }
    , []);

    return (
        <>
            <h3>Use Effect Hook</h3>
            <span>{myState.timeProp}</span>
        </>
    )

}

/*
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
} */