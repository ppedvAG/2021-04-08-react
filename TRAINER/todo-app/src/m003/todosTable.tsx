export default function TodosTable() {
    const todos = [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
        {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
        }
    ]
    /* Übung M003 */
    /* text-decoration: line-through */
    let table = (
        <>
            <table>
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id} className={todo.completed ? 'erledigt' : ''}>
                                <td>{todo.id}</td>
                                <td>{todo.userId}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed.toString()}</td>
                            </tr>))
                    }
                </tbody>
            </table>
            <table id="table2">
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id} className={todo.completed ? 'erledigt' : ''}>
                                <td>{todo.id}</td>
                                <td>{todo.userId}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed.toString()}</td>
                            </tr>))
                    }
                </tbody>
            </table>
            <table id="table3">
                <tbody>
                    {
                        todos.map(todo => (
                            <tr key={todo.id} className={todo.completed ? 'erledigt' : ''}>
                                <td>{todo.id}</td>
                                <td>{todo.userId}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed.toString()}</td>
                            </tr>))
                    }
                </tbody >
            </table >
        </>
    )

    return (
        <>
            {table}
        </>


    )
}

