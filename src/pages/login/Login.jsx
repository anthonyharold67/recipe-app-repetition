import LoginStyle, { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './Login.style';
import mealSvg from "../../assets/meal.svg";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate= useNavigate();

    const userInfo={
        username:"ahmet",
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("user",JSON.stringify(userInfo));
        navigate(-1)
    }

    return (
        <LoginContainer>
            <FormContainer onSubmit={handleSubmit} >
                <StyledImg src={mealSvg}/>
                <Header>{"<CW/>"}Recipe</Header>
                <StyledForm>
                    <StyledInput type="text" placeholder="username" required />
                    <StyledInput type="password" placeholder="password" required />
                    <StyledButton type="submit">Login</StyledButton>
                </StyledForm>
            </FormContainer>
        </LoginContainer>
    );
};

export default Login;
