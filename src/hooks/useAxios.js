
import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const useAxios = (url) => {
    const [response, setResponse] = useState([]);

    const addData = async (formatter = data => data, restOfTheUrl = "") => {
        console.log(restOfTheUrl);
        const response = await axios.get(`${url}${restOfTheUrl}`);
        console.log(response);
        setResponse(data => [...data, formatter({ ...response.data, id: uuid() })]);
    };

    return [response, addData]
}

export default useAxios;