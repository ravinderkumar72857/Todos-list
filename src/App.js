
import './App.css';
import {Header} from './components/Header.js';
import {Footer} from './components/Footer.js';
import {Todos} from './components/Todos.js';
import {AddTodo} from './components/AddTodo.js';
import {About} from './components/About.js';
import React, { useState,useEffect, Fragment } from 'react';
import {
BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  let initTodo;let sno;
  if(localStorage.getItem("todos")===null){
    initTodo=[];

  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    // console.log("le aaya bhai",todo);
    setTodos(todos.filter((e)=>{
      return e!=todo;
    }));

   
    

  }
  const addTodo = (title,desc) => {
    // console.log("i am adding title :",title," and description is ",desc);
    
    if(todos.length===0){
      sno=0;
    }
    else{

      sno = todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    // localStorage.setItem("todos",JSON.stringify(todos));
    // console.log(myTodo)
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  
   
  }, [todos]);
  return (
    <Fragment>
      <Header title="Todos List" searchBar={false} />
      <BrowserRouter>
          <Routes>
              <Route exact path="/todos-list" element={<>
                  <AddTodo addTodo={addTodo}/>
                  <Todos todos={todos} onDelete={onDelete}/>
              </>
              } />
              <Route exact path="/todos-list/about" element={<About />} />
          </Routes>
      </BrowserRouter>
      <Footer />
  </Fragment>
  );
}

export default App;
