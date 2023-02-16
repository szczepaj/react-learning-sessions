import {useCallback, useMemo, useState} from "react";

// useMemo - zapisanie wartości wynikowej funkcji filterPlanets, wartość nie zmienia się dopóki nie zmienimy QUERY
// useCallback - zapisanie funkcji w cache'u. Funkcja nie zostanie ponownie obliczona dopóki nie zmienimy QUERY

export const Planet = ({ name }) => {
    const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
    const [query, setQuery] = useState("");
    const [clicks, setClicks] = useState(0);

    const filterPlanets = () => {
        console.log('filtering planets', query)
       return  planets.filter(planet => planet.includes(query))
    }

    const filteredPlanets = useMemo(() => filterPlanets(), [query])
    const filterPlanetsFn = useCallback(filterPlanets, [query])
    return (
        <div>
            <div>Hello: {name}</div>
            <button onClick={() => setClicks(clicks + 1)}>
                Number of clicks: {clicks}
            </button>
            <div>
                {filteredPlanets.map(planet => (
                    <div key={planet}>{planet}</div>
                ))}
            </div>
            <input type={"text"} onChange={evt => setQuery(evt.target.value)} value={query} />
        </div>
    );
}