import React, { Component } from "react";


class Body extends Component {
  render() {
const personajes = [{nombre: 'Eric Cartman', foto: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'
}, {nombre: 'Stan Marsh', foto: 'https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png'
}, {nombre: 'Kyle Broflovski', foto: 'https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png'
}, {nombre: 'Kenny McCormick', foto: 'https://vignette.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502'
}];
let tarjeta=1;

    return (
         <div className = 'containerTarjetas'>
         {
            personajes.map( personaje  =>{
            return(
            <div className= 'tarjeta'>
                <h3 className='tituloTarjeta'>Información</h3>
                <div>
                    <p className ='nombreTarjeta'> Tarjeta n° {tarjeta++}:{personaje.nombre} </p>
                    <img  className='fotoTarjeta' src= {personaje.foto} />
                </div>
            </div> 
            )
            })
        }
        </div>
        )
    }
}

export default Body;