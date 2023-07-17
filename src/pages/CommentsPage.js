import { Title, PostContainer } from '../style';
import { Card } from '../components/Card/Card';
import useRequestData from '../hooks/useRequestData';

const CommentsPage = () => {
    const postagens = useRequestData('comments');

    return (
        <div>
            <Title>Comentários dos usuários</Title>
            <PostContainer>
                {postagens.map((post) => {
                    return (
                        <Card
                            key={post.id}
                            text={post.body}
                            backgroudColor={'#1dc690'}
                            textColor={'#ffffff'}
                        />
                    );
                })}
            </PostContainer>
        </div>
    );
};

export default CommentsPage;
