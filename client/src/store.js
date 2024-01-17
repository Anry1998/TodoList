import {makeAutoObservable} from 'mobx'
import axios from 'axios'

class ToDoStore {

    // const [data, setData] = React.useState(null)

//     React.useEffect(() => {
//     axios('http://localhost:5002/api/posts')
//       .then(res => setData(res.data))
//   }, [])


//    todos = axios('http://localhost:5002/api/posts').then(res => setData(res.data))


    // todos = [
    //     {id: 1, content: 'Выучить JS', completed: false},
    //     {id: 2, content: 'Выучить React', completed: false},
    // ]

    constructor() {
        makeAutoObservable(this)
    }

    getAllTodos() {
        
    }

    addTodo(todo) { 
        
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    updateTodo() {
        
    }

    completeTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }

    
}

export default new ToDoStore()