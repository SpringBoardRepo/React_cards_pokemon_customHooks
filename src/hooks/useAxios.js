
import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const useAxios = (restOfUrl, url) => {

    // debugging code:
    console.log('useAxios called: ', url, restOfUrl);
    const [response, setResponse] = useState([]);

    const addData = async (formatter = data => data, restOfUrl = "") => {
        const response = await axios.get(`${url}/${restOfUrl}`);
        setResponse(data => [...data, formatter({ ...response.data, id: uuid() })]);
    };

    return [response, addData]
}

export default useAxios;