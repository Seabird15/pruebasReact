
import React, { useEffect, useState } from 'react'

import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Dani',
        email: 'fernando@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    // useEffect dispara efectos secundarios 
    useEffect(() => {
        console.log('useEffect called!')

        //El arreglo vacio significa que el useEffect solo se dispara 1 vez y cuando el componente es montado la primera vez
        //
    }, [])
    useEffect(() => {
        console.log('el formState cambio! ')

        //Se dispara cada vez que el formState cambia 
    }, [formState])


    
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input type="text" className='form-control' placeholder='Username' name='username'
        value={username}
        onChange={onInputChange} />

        <input type="email" className='form-control mt-2'  placeholder='fernando@google.com' name='email'
        value={email}
        onChange={onInputChange} />

        {
            // condicion si usuario Dani2 ya existe entonces mostrar Message
            (username === 'Dani2') &&        <Message />

        }

    </>
    
  )
}
