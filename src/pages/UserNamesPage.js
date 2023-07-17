import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { Title, NameContainer } from '../style';
import { Card } from '../components/Card/Card';

const UserNamesPage = () => {
    const [nomeUsuarios, setNomeUsuarios] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}users`)
            .then((response) => {
                setNomeUsuarios(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Title>Nomes dos usuários</Title>
            <NameContainer>
                {nomeUsuarios.map((usuario) => {
                    return (
                        <Card
                            key={usuario.id}
                            text={usuario.name}
                            backgroudColor={'nome'}
                            textColor={'nome'}
                        />
                    );
                })}
            </NameContainer>
        </div>
    );
};

export default UserNamesPage;
