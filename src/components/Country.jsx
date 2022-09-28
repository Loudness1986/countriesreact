const Country = ({ country }) => {

    return <li>

        <p>Name: {country.name.official + " "}</p>
        <p>Capital: {country.capital}</p>
        <img src={country.flags.png + " "} alt="flag" />
        <br />
    </li>;
}

export default Country;
