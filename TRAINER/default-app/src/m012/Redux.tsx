import { createStore } from "redux";
import React from 'react';

export default function Redux() {

    const myReducer = (state = 0, action: { type: string }) => {
        switch (action.type) {
            case 'add2':
                return state + 2;
            case 'minus3':
                return state - 3;
            default:
                return state;
        }
    }

    const myStore = createStore(myReducer);

    myStore.dispatch({type: 'add2'});
    myStore.dispatch({type: 'minus3'});
    return (
        <>
            <h3>Redux</h3>
            State aus dem Store: {myStore.getState()}
        </>
    )
}