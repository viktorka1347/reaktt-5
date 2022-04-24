import React from 'react';
import './bootstrap.css';
import './App.css';
import TaskHeader from './TaskHeader';
import Cards from './task1/Cards';
import Yandex from './task2/Yandex';
import data from './task2/data';

function App() {
  return (<React.Fragment>
    <div className="task-1">
      <TaskHeader title="Задача 1" />
      <Cards />
    </div>
    <div className="task-2">
      <TaskHeader title="Задача 2" />
      <Yandex data={data} /> 
    </div>
  </React.Fragment>);
}

export default App;
