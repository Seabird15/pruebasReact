import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

    const {data, isLoading, hasError} = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/1')
    
    console.log({data, isLoading, hasError})

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

        <div className="alert alert-info text-center">
          Loading...
        </div>

        <blockquote className="blockquote text-right">
          <p className="mb-1">Hola Mundo</p>
          <footer className="blockquote- footer">Daniela L. Aravena</footer>
        </blockquote>
        
    
    </>
  )
}
