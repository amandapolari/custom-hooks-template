import { Title, NameContainer } from '../style';
import { Card } from '../components/Card/Card';
import useCapturarNome from '../hooks/useCapturarNome';

const UserNamesPage = () => {
    const retornoDaFuncao = useCapturarNome();

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
