import React from 'react';
import ReactDOM from 'react-dom/client';
//import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks';
//import { ComponentePrueba } from './ComponentePrueba';
import './index.css';
import { HooksApp } from './HooksApp';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <MultipleCustomHooks />
  //</React.StrictMode>
);

