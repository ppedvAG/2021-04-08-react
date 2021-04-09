import { useState } from "react";

const todos = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
        rating: 2
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
        rating: 1
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
        rating: 4
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
        rating: 3
    },
];

function TodosM008() {
    const [myState, changeMyState] = useState({ todos: todos });

    let handleChange = (selectObject: any) => {
        console.log('handleChange triggert');
        console.log('selectObject :>> ', selectObject);
        console.log('selectObject.id :>> ', selectObject.id);
        console.log('selectObject.value :>> ', selectObject.value);
        let newTodos = myState.todos;
        newTodos.forEach((el) => {
            if (el.id === selectObject.id)
                el.rating = selectObject.value
        }) // todo #1
/*         newTodos.map((item) => {
            if (item.id === selectObject.id) {
                item.rating = selectObject.value;
            }
                return item;
        }) */
        console.log('newTodos :>> ', newTodos);
        changeMyState({ todos: newTodos })
        console.log('myState.todos :>> ', myState.todos);
    }

    return (
        <table>
            <tbody>
                {myState.todos.map(todo => (
                    <TodoComponent key={todo.id} todoInProps={todo} handleChangeFuerTodo={handleChange} />
                ))}
            </tbody>
        </table>
    );
}

function TodoComponent(propsVonTodos: any) {
    return (
        <tr key={propsVonTodos.todoInProps.id} className={propsVonTodos.todoInProps.completed ? 'erledigt' : ''}>
            <td>{propsVonTodos.todoInProps.userId}</td>
            <td>{propsVonTodos.todoInProps.id}</td>
            <td>{propsVonTodos.todoInProps.title}</td>
            <td>{propsVonTodos.todoInProps.completed.toString()}</td>
            <td><Rating
                id={propsVonTodos.todoInProps.id}
                stars={propsVonTodos.todoInProps.rating}
                handleChangeFuerRating={propsVonTodos.handleChangeFuerTodo} />
            </td>
            <td><Rating2
                id={propsVonTodos.todoInProps.id}
                stars={propsVonTodos.todoInProps.rating}
                handleChangeFuerRating={propsVonTodos.handleChangeFuerTodo} />
            </td>
        </tr>
    )
}

function Rating(propsVonTodo: any) {
    return (
        <>
            <select id={propsVonTodo.id} onChange={(event) => propsVonTodo.handleChangeFuerRating(event.target)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <span>
                {'*'.repeat(propsVonTodo.stars)}
            </span>
        </>
    )
}

function Rating2(propsVonTodo: { id: string | undefined; handleChangeFuerRating: (arg0: EventTarget & HTMLSelectElement) => void; stars: number }) {
    return (
        <>
            <select
                id={propsVonTodo.id}
                onChange={(event) => propsVonTodo.handleChangeFuerRating(event.target)}
                value={propsVonTodo.stars}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <span>
                {'*'.repeat(propsVonTodo.stars)}
            </span>
        </>
    )
}

export default TodosM008;