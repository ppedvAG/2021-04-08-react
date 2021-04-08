import React from "react";

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
}

export function ComponentChildren(propsVonOben: any) {
    return (
        <>
            {propsVonOben.children}
        </>
    )
}

export function ReactChildren(props: any) {
    let childrenArray = React.Children.toArray(props.children);
    console.log('childrenArray :>> ', childrenArray);
    return (
        <>
            <ul>
                {React.Children.map(props.children, function(child, index) { /* todo */
                    <li>{child.type}, {index}</li>
                })}
            </ul>
            {React.Children.count(props.children)}
        </>
    )
}