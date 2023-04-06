import { useFetch, useCounter } from "../hooks"
import { Quotes } from "../03-examples/Quotes";
import { LoadingQuote } from "../03-examples/Loading"; 


export const Layout = () => {

    const { counter, increment, decrement, reset } = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    
    //Si la data tiene un valor, entonces toma la data en la posicion 0
    const {author, quote} = !!data && data[0]
 
    // Condicion Loading
    // Loading en true termina en este return
    // if (isLoading) {
    //   return (
    //       <h1>Cargando...</h1>
    //   )
    // }


  return (
    
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
          isLoading
            ? <LoadingQuote />
            : <Quotes author = {author} quote = {quote}/>  
  
        }
      

      
      <button className="btn btn-primary" disabled= {isLoading} onClick={() => increment ()}>Next Quote</button>



        
    
    </>
  )
}
