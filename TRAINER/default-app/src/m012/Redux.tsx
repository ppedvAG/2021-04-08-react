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

    let handleClick = (actionType: any) => {
        console.log('click getriggert');
        console.log('actionType :>> ', actionType);
        /* myStore.dispatch({ type: 'minus3' }); */
        console.log('myStore.getState() :>> ', myStore.getState());
        switch (actionType) {
            case 'MINUS3':
                myStore.dispatch({ type: 'minus3' });
                break;
            case 'ADD2':
                myStore.dispatch({ type: 'add2' });
                break;
            default:
                myStore.dispatch({ type: '' })
                console.log('myStore.getState() :>> ', myStore.getState());

        }
        

    }

    return (
        <>
            <h3>Redux</h3>
            State aus dem Store: {myStore.getState()}

            <button onClick={(event) => handleClick((event.target as HTMLButtonElement).textContent )}>MINUS3</button>
            <button onClick={(event) => handleClick((event.target as HTMLButtonElement).textContent )}>ADD2</button>
        </>
    )
}