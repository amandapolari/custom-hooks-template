/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/constants';
import axios from 'axios';

const useRequestData = (path) => {
    const [data, setData] = useState([]);
    const [isLoading, seIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios
            .get(`${BASE_URL}${path}`)
            .then((response) => {
                setData(response.data);
                // setTimeout(() => seIsLoading(false), 6000);
                seIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                seIsLoading(false);
                setIsError(true);
            });
    }, []);
    return [data, isLoading, isError];
};

export default useRequestData;
