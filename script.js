// console.log("hellow");
const uniqueId = () => Math.random().toString(36).slice(2);

let todos = [
    { title: "Title 1", date: new Date(), id: uniqueId(), isCompleted: false },
    { title: "Title 2", date: new Date(), id: uniqueId(), isCompleted: false },
    { title: "Title 3", date: new Date(), id: uniqueId(), isCompleted: false }
]

const handleCreateTodo = () => {

    let todo = { title: `Title ${todos.length + 1} `, date: new Date(), id: uniqueId(), isCompleted: false }

    todos.push(todo)
}

const handleReadTodo = () => {
    todos.forEach(todo => console.log(todo))
}

const handleUpdateTodo = () => {
    todos = todos.map(todo => {
        if (todo.title == "Title 2") {
            return { ...todo, isCompleted: true }
        }
        return todo;
    })
    handleShowTodo()
}

const handleDeleteTodo = () => {
    todos = todos.filter(todo => todo.title !== "Title 3")
    handleShowTodo()
}

const handleShowTodo = () => {
    // console.log(document.getElementById('table-data'));
    document.getElementById('table-data').innerHTML = ""
    let strength = 0;
    todos.forEach(todo => {
        strength++;
        let value = "No"
        if (todo.isCompleted === true) { value = "Yes" }
        document.getElementById('table-data').innerHTML += `<tr><td>${strength}</td><td>${todo.title}</td><td>${dayjs(todo.date).format("dddd DD/MM/YYYY")}</td><td>${todo.id}</td><td>${value}</td></tr>`
    })
}