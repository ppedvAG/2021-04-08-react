/* 
export default function ElementChildren() {
    const myDiv = (
        <div>
            <p>paragraph1</p>
            <p>paragraph2</p>
        </div>
    )
    // Datentyp von myDiv ist JSX.Element
    console.log('myDiv.props.children :>> ', myDiv.props.children);
    return (
        <>
            <p>div mit 2 p</p>
            {myDiv}
            <p>div children</p>
            {myDiv.props.children}
        </>
    );
} */

import { Component } from "react"

export default class ClassComponent extends Component {
    myDiv = (
        <div>
            <p>paragraph1</p>
            <p>paragraph2</p>
        </div>
    )
    render() {
        return (
            <>
                <h3>Klassenkomponente</h3>
                <pre>div mit 2 p</pre>
                {this.myDiv}
            </>
        )
    }
}

export class ClassComponentWithProps extends Component<{inhalt: string},any> {    
    render() {
        return (
            <>
                <h3>Klassenkomponente mit Props</h3>
                <pre>prop inhalt aus props</pre>
                {this.props.inhalt}
                <pre>prop children mit dem shape 'inhalt: string'</pre>
                {this.props.children}
                <pre>Also im Shape von Props muss nur das angegeben werden, was über Attribute in das Objekt reinkommt</pre>
            </>
        )
    }
}