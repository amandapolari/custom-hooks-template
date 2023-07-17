import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/constants';
import axios from 'axios';
import { Title, PostContainer } from '../style';
import { Card } from '../components/Card/Card';

const CommentsPage = () => {
    const [postagens, setPostagens] = useState([]);

    useEffect(() => {
        axios
            .get(`${BASE_URL}comments`)
            .then((response) => {
                setPostagens(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Title>Comentários dos usuários</Title>
            <PostContainer>
                {postagens.map((post) => {
                    //console.log(post);
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
