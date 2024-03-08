import { useEffect, useState } from "react";
import axios from 'axios';
const Recipe = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/recipe/?query=italian&wedding&soup', {
            headers: {
                'X-API-KEY': "QC7AYURk7uuWwLb43MfmFQ==YBKfir6ZIMpc0l4I"
            },
            method: 'GET'
        }).then((response) => setData(response.data)).catch(error => console.log(error))
    }, [])

    return (
        <div>
            {data.map((result, index) => (
                <p key={index}>{result.title}</p>
            ))}
        </div>
    )
}

export default Recipe;