
import axios from "axios";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const useAxios = (url) => {
    const [response, setResponse] = useState([]);

    const addData = async () => {

        const res = await axios.get(url);
        setResponse(data => [...data, { ...res.data, id: uuid() }]);
    }

    return [response, addData]
}

export default useAxios;