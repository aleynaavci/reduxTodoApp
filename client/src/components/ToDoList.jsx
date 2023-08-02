import {useEffect} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux';
import Loading from './Loading';
import Error from './Error';
import {getTodosAsync, toggleTodoAsync, removeTodoAsync} from '../redux/todos/services';
import { selectFilteredTodos } from '../redux/todos/todosSlice';


function ToDoList() {
    const dispatch= useDispatch()
    const filteredTodos=useSelector(selectFilteredTodos);
    const isLoading = useSelector(state => state.todos.isLoading);
    const error= useSelector(state=>state.todos.error)

    useEffect(()=>{
        dispatch(getTodosAsync());
    },[dispatch])

    const handleDestroy = async(id)=>{ 
        if(window.confirm('are you sure?')){
            await dispatch(removeTodoAsync(id))}
        }

        const handleToggle= async(id, completed) => {
            await dispatch(toggleTodoAsync({id, data: { completed}}));
        }
        
        if(isLoading){
            return <Loading/>
        }

        if(error){
            return <Error message={error}/>
        }

  return (
    <ul className="todo-list">
        {
            filteredTodos.map((item)=>(
                <li key={item.id} className={item.completed ?'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={item.completed} onChange={()=>handleToggle(item.id, !item.completed)} />
                <label>{item.title}</label>
                <button className="destroy" onClick={()=> handleDestroy(item.id)}></button>
            </div>
        </li>
            ))
        }
    </ul>
  )
}

export default ToDoList