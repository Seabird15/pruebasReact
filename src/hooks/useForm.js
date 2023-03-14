import { useState } from "react";

     
    export const useForm = (initialForm = {}) => {

        const [formState, setFormState] = useState(initialForm)
    
    
        const onInputChange = ({target}) => {
            const {name, value} = target;
            setFormState({
                ...formState,
                [name]: value
            })
        }
        // volver los valores de los input al valor inicial, se debe retornar para usarla en el componente
        const onResetForm = () => {
            setFormState(initialForm)
        }
            

      return {
        ...formState,
        formState,
        onInputChange,
        onResetForm


      }
    }
    