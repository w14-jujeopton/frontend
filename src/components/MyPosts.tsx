// components/MyComments.tsx
import { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CircularProgress,
    Alert,
    Box
} from '@mui/material'
interface Post {
    id: number;
    author: string;
    owner: string;
    content: string;
}

const MyPosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const response = await axios.get<Post[]>('http://goochul.iptime.org:4000/post');
    //             console.log(response.data)
    //             setPosts(response.data);
    //             console.log("[MyPosts.tsx-useEffect] post received: ", response.data)
    //         } catch (err) {
    //             setError('데이터를 불러오는데 실패헀습니다.');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchUsers();
    //     if (loading) return <CircularProgress sx={{ mt: 4 }} />;
    //     if (error) return <Alert severity='error'>{error}</Alert>
    //     setLoading(false);
    // }, []);
    // post: id, author, owner, content
    // 개발용 더미 데이터
    useEffect(() => {
        setPosts([
            { id: 1, author: 'chulsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'younghee', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' },
            { id: 1, author: 'minsoo', owner: 'dd', content: 'ff' }
        ]);

    })
    return (
        // top: 'calc(30% + 48px)', // 48px is the default Tabs height
        <Box
            sx={{
                overflowY: 'auto',
                // 전체 뷰포트: 100vh
                // 탭 시작 위치: 30vh
                // 탭 사이즈: 48px
                // bottom nav 높이: 56px
                height: 'calc(100vh - 30vh - 56px - 48px - 20vh)',
            }}>
            <Grid container direction="column" spacing={3} sx={{ p: 0, mt: 0, mb: 4 }}>
                {posts.map((post) => (
                    <Grid item xs={12} key={post.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant='h5' component="div">
                                    {post.content}
                                </Typography>
                                <Typography color="text.secondary">
                                    @{post.owner}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MyPosts;
