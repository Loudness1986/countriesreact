import { useState, useEffect, useCallback } from 'react'
import './App.css'
import Country from './components/Country'
import Campo from './components/Campo'

function App() {



  const [countries, setCountries] = useState([]); {/* creo mi estado para luego fijar mi componente posteriormente en el render*/ }
  const [data, setData] = useState([]);
  const [input, setInput] = useState([]);


  const fetchapi2 = async () => {

    const response2 = await fetch('https://restcountries.com/v3.1/all'); {/* promesa para el componente botón y ordenamiento por default*/ }
    setCountries2(await response.json());
    setData(await response.json());


  }

  const fetchapi = async () => {
    {/* conexión con la api haciendo y retorno de promesa ordenamiento alfabético*/ }

    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const json = await response.json();
      setCountries(json.sort((last, next) => last.name.common > next.name.common ? 1 : -1));
    } catch (error) {
      console.log("hubo un error", error);

    }



  }



  useEffect(() => {
    {/*hook para determinar cambios*/ }

    fetchapi()

  })

  return (
    <div className="App">
      <Campo />

      {/*componente principal que muestra los paises con su capital y su bandera*/}
      <ul>
        {!!countries && countries.map(country =>
          <Country className="pais"
            key={country.name.common}
            country={country}
          />)}
      </ul>
    </div>
  )
}

export default App
