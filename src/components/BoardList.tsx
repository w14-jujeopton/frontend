import { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Alert
} from '@mui/material'

interface User {
    nickname: string;
    username: string;
}

const BoardList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const response = await axios.get<User[]>('/user');
    //             setUsers(response.data);
    //         } catch (err) {
    //             setError('데이터를 불러오는데 실패헀습니다.');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchUsers();
    // }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>('http://goochul.iptime.org:4000/user');
                console.log(response.data)
                setUsers(response.data);
            } catch (err) {
                setError('데이터를 불러오는데 실패헀습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();

        // 개발용 더미 데이터

        // setUsers([
        //     { nickname: '철수', username: 'chulsoo' },
        //     { nickname: '영희', username: 'younghee' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' },
        //     { nickname: '민수', username: 'minsoo' }
        // ]);
        setLoading(false);
    }, []);

    if (loading) return <CircularProgress sx={{ mt: 4 }} />;
    if (error) return <Alert severity='error'>{error}</Alert>
    return (
        <Grid container spacing={3} sx={{ p: 3, mt: 10, mb: 4}}>
            {users.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.username}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant='h5' component="div">
                                {user.nickname}의 롤링 페이퍼
                            </Typography>
                            <Typography color="text.secondary">
                                @{user.username}
                            </Typography>
                        </CardContent>
                    </Card>
                </ Grid>
            ))}
        </Grid>
    );
}
export default BoardList;