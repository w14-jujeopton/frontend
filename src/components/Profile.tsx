// Profile.tsx (변경 없음, 부모에서 높이 지정)
import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';

const Profile: React.FC = () => {
    const user = {
        name: '홍길동',
        email: 'honggildong@example.com',
        avatarUrl: '',
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
            component={Paper}
            elevation={3}
            p={4}
        >
            <Avatar
                src={user.avatarUrl}
                sx={{ width: '20%', height: '20%', mb: 2, bgcolor: '#1976d2' }}
            >
                {user.name[0]}
            </Avatar>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
                {user.email}
            </Typography>
            <button
                style={{
                    background: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                    marginTop: 16,
                    padding: '8px 16px',
                }}
                onClick={async () => {
                    try {
                        await fetch('http://goochul.iptime.org:4000/user/logout', {
                            method: 'POST',
                            credentials: 'include',
                        });
                        window.location.href = '/';
                        alert('로그아웃 되었습니다.');
                    } catch (error) {
                        window.location.href = '/';
                    }
                }}
            >
                로그아웃
            </button>
        </Box>
    );
};

export default Profile;

