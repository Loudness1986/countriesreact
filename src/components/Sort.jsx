import { useState } from 'react'


const Input = () => {

    const [texto, setTexto] = useState(null)

    const inputEventHandler = (event) => {
        setTexto(event.target.value)
    }

    return (
        <>
            <input
                name='buscar'
                type="text"
                placeholder='escribe el nombre de un pais'
                onChange={inputEventHandler}>


            </input> &nbsp;

            <button>A-Z</button>

            <br />
            <br />
            {!!texto && <p> Hola {texto}</p>}


        </>
    );
};

export default Input