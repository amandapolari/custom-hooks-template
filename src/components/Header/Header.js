import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.gif';
import { goToCommentsPage, goToNamesPage } from '../../routes/coordinator';

import { StyledHeader, ButtonContainer, TittleContainer } from './style.js';

export const Header = () => {
    const navigate = useNavigate();
    return (
        <StyledHeader>
            <TittleContainer>
                <img src={logo} alt="logo" />
                <h2>Labenomes</h2>
            </TittleContainer>

            <ButtonContainer>
                <button onClick={() => goToNamesPage(navigate)}>
                    Lista de usuários
                </button>
                <button onClick={() => goToCommentsPage(navigate)}>
                    Lista de comentários
                </button>
            </ButtonContainer>
        </StyledHeader>
    );
};
