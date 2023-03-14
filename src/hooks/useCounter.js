import { useState } from "react"

// Enviar por parametro valor ingresado por el usuario, si no ingresa nada, tendra valor de 10
export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        setCounter( counter + 1)
    }
    const decrement = () => {
        // Definir como tope de descrecer =
        if (counter === 0) return;
        setCounter( counter - 1 )
    }
    const reset = () => {
        setCounter(initialValue)
    }
// Se retorna un objeto, {} 
    return {
        counter,
        increment,
        decrement,
        reset
    }
}


