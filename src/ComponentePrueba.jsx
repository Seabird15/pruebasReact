import { useState } from "react"


export const ComponentePrueba = () => {

    const [text, setText] = useState("Go Somewhere!")

    const handleText = () => {
        setText('Clickeaste!')
    }

  return (
    <div className="container text-left">
    <div className="row">
      <div className="col">
        <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" widht="18rem" >
            <img src="https://picsum.photos/600/300" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quos?</p>
                <a href="#" className="btn btn-primary" onClick={()=>handleText()}>{text}</a>
            </div>
        </div>
      </div>
      <div className="col">
      <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" widht="18rem">
            <img src="https://picsum.photos/600/300" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quos?</p>
                <a href="#" className="btn btn-primary">Go Somewhere</a>
            </div>
        </div>
      </div>
      <div className="col">
      <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded" widht="18rem">
            <img src="https://picsum.photos/600/300" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, quos?</p>
                <a href="#" className="btn btn-primary">Go Somewhere</a>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}


