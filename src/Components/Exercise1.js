import { useEffect, useState } from "react"
import './styles.css'


const SearchComponent = ({setFilter}) =>{
    return(
        <input type="text" 
        placeholder="Search a City from Brazil"
        className="input-search"
        onChange={(event) => {
            setFilter(event.target.value)
        }}/>
    )
}
const ResultCard = ({city}) =>{
    return(
        <div className="result-card">
            {city.nome + " - " + city?.municipio?.microrregiao?.mesorregiao?.UF?.sigla}
        </div>
    )
}

const Result = ({filter, data}) =>{
    return(
        <div className="result-container">
            {data.filter((val) =>{
                if(val.nome.toLowerCase().includes(filter.toLowerCase())){
                    return val.nome
                }
            }).map((city) => {
                return(
                    <ResultCard city={city} key={city.id}/>
                )
            })}
        </div>
    )
}
function Exercise1(){
    const [data, setData] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        document.title = "Search a City from Brazil"
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome")
        .then((response) => {return response.json()})
        .then((actualData) => setData(actualData))
    }, [])

    return(
        <div className="main">
            <h1>React.js Search</h1>
            <div className="form">
                <SearchComponent setFilter={setFilter}/>
            </div>
            <div>
                <h3>Results</h3>
                <Result filter={filter} data={data}/>
            </div>
        </div>
    )
}

export default Exercise1