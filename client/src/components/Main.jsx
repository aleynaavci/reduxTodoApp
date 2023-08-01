import React from 'react'
import ToDoList from './ToDoList'
import MainFooter from './MainFooter'

function Main() {
  return (
    <>
    <section className="main">
    <input className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all">
        Mark all as complete
    </label>
    
    <ToDoList/>
    </section>
    <MainFooter/>
    </>
  )
}

export default Main