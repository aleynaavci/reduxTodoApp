import {useEffect} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { changeActiveFilter, clearCompleted, selectActiveFilter, selectTodos } from '../redux/todos/todosSlice';
import { useDispatch } from 'react-redux';
import { removeTodoAsync } from '../redux/todos/services';

function MainFooter() {
    const dispatch = useDispatch();
    const items =useSelector(selectTodos);
    const itemsLeft = items.filter(item=>!item.completed).length;
    console.log(itemsLeft)

    const activeFilter =useSelector(selectActiveFilter);

    useEffect(()=>{
        localStorage.setItem('activeFilter', activeFilter)
    },[activeFilter])

    const handleDestroyAll = () => {
        if (window.confirm("Are you sure?")) {
          const completedItems = items.filter((item) => item.completed === true);
          completedItems.forEach(async (element) => {
            await dispatch(removeTodoAsync(element.id));
          });
        }}
  return (
    <footer className="footer">
    <span className="todo-count">
        <strong>{itemsLeft}</strong>
        item{itemsLeft>1 &&'s'} left
    </span>

    <ul className="filters">
        <li>
            <a href="#/" className={activeFilter === 'all'? 'selected' :''} onClick={()=> dispatch(changeActiveFilter('all'))}>All</a>
        </li>
        <li>
            <a href="#/" className={activeFilter === 'active'? 'selected' :''} onClick={()=> dispatch(changeActiveFilter('active'))}>Active</a>
        </li>
        <li>
            <a href="#/" className={activeFilter === 'completed'? 'selected' :''}onClick={()=> dispatch(changeActiveFilter('completed'))}>Completed</a>
        </li>
    </ul>

    <button className="clear-completed" onClick={()=>handleDestroyAll()}>
        Clear completed
    </button>
</footer>
  )
}

export default MainFooter