const Country = ({ country }) => {

    return <div className="feo">
        <li>
            <p>Name: {country.name.official + " "}</p>
            <p>Capital: {country.capital}</p>
            <img src={country.flags.png + " "} alt="flag" />
            <br />
        </li>
    </div>;
}

export default Country;
