import React from 'react';
import { Button, Box } from '@mui/material';
import LoginLayout from '../components/LoginLayout';
import FrameLayout from '../components/FrameLayout';
import HomeHeader from '../components/HomeHeader';
import { Container } from '@mui/material';
import BottomNav from '../components/BottomNav';
import { useAuth } from '../components/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const [isLoggingIn, setIsLoggingIn] = React.useState(false);
    const { login } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        setIsLoggingIn(true);
        window.location.href = 'http://goochul.iptime.org:4000/auth/google'; // 백엔드 엔드포인트로 리다이렉트
        console.log("[handleGoogleLogin] true? ", isLoggingIn)

        // localStorage.setItem('token', token); // Token is not available here
        window.dispatchEvent(new Event('storage'));
        navigate('/mypage');
    };

    // const handleLoginSuccess = (token: string) => {
    //     localStorage.setItem('token', token);
    //     window.dispatchEvent(new Event('storage'));
    //     setIsLoggedIn(true);
    //     const from = location.state?.from?.pathname || '/';
    //     navigate(from, { replace: true });
    // };


    // 예시: 일반 로그인 처리 함수
    // const handleLogin = async () => {
    //   try {
    //     const response = await axios.post('/login', { email, password });
    //     localStorage.setItem('token', response.data.token);
    //     setIsLoggedIn(true);
    //     navigate('/', { replace: true });
    //   } catch (error) {
    //     console.error('로그인 실패:', error);
    //   }
    // };

    return (
        <FrameLayout>
            <HomeHeader />

            <Container maxWidth="md">
                {/* 포스트 레이아웃 분리: PostMasonry 컴포넌트 사용 */}
                <LoginLayout handleGoogleLogin={handleGoogleLogin} />
            </Container>

            <BottomNav />
        </FrameLayout>

    );
};

export default Login;
