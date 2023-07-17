import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';
import axios from 'axios';

const useRequestData = (path) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}${path}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return data;
};

export default useRequestData;
