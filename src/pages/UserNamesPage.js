import { Title, NameContainer } from '../style';
import { Card } from '../components/Card/Card';
import useRequestData from '../hooks/useRequestData';

const UserNamesPage = () => {
    const retornoDaFuncao = useRequestData('users');
    return (
        <div>
            <Title>Nomes dos usuários</Title>
            <NameContainer>
                {retornoDaFuncao.map((usuario) => {
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
