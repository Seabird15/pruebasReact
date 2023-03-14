
import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    
    

    // const {username, email, password} = formState;


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
        <h1>Formulario con CustomHook</h1>
        <hr />

        <input type="text" className='form-control' placeholder='Username' name='username'
        value={username}
        onChange={onInputChange} />

        <input type="email" className='form-control mt-2'  placeholder='fernando@google.com' name='email'
        value={email}
        onChange={onInputChange} />

        <input type="password" className='form-control mt-2'  placeholder='Contraseña' name='password'
        value={password}
        onChange={onInputChange} />


        <button onClick={onResetForm} className='btn btn-primary mt-2'>Borrar</button>
    </>
    
  )
}
