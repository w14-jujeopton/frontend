import { Tabs, Tab, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MyPosts from '../components/MyPosts';
import MyComments from '../components/MyComments';
import MyInfo from '../components/MyInfo';
import FrameLayout from '../components/FrameLayout';
import BottomNav from '../components/BottomNav';
import HomeHeader from '../components/HomeHeader';
import Profile from '../components/Profile';

const HEADER_HEIGHT = 46;
const PROFILE_HEIGHT = 200;
const TABS_HEIGHT = 48;
const CONTENT_TOP = HEADER_HEIGHT + PROFILE_HEIGHT + TABS_HEIGHT + 24; // 24px margin

const menu = [
    { label: '내 포스트', value: 0 },
    { label: '내 댓글', value: 1 },
    { label: '내 정보', value: 2 },
];

export default function MyPage() {
    const [tab, setTab] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/mypage', { credentials: 'include' });
    }, []);
    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (
        <FrameLayout>
            <HomeHeader />
            {/* box 1 */}
            <Box
                sx={{
                    position: 'fixed',
                    top: `${HEADER_HEIGHT}px`,
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    zIndex: 10,
                    width: '90%',
                    maxWidth: 400,
                    height: `${PROFILE_HEIGHT}px`,
                    mt: 3,
                    mb: 3,
                    border: 'solid 1px'
                }}
            >
                <Profile />
            </Box>
            {/* box 2 */}
            <Box
                sx={{
                    position: 'fixed',
                    top: `${HEADER_HEIGHT + PROFILE_HEIGHT + 100}px`,
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    zIndex: 10,
                    width: '90%',
                    maxWidth: 400,
                    height: `${TABS_HEIGHT}px`,
                    border: 'solid 1px'
                }}
            >
                <Tabs
                    value={tab}
                    onChange={handleChange}
                    centered
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: 2,
                        boxShadow: 1,
                        width: '100%',
                        maxWidth: '100%',
                        flex: 1,
                        minHeight: `${TABS_HEIGHT}px`,
                        height: `${TABS_HEIGHT}px`,
                    }}
                >
                    {menu.map((item) => (
                        <Tab key={item.value} label={item.label} sx={{ minHeight: `${TABS_HEIGHT}px`, height: `${TABS_HEIGHT}px` }} />
                    ))}
                </Tabs>
            </Box>
            {/* box 3 */}
            <Box
                sx={{
                    position: 'fixed',
                    top: `${HEADER_HEIGHT + PROFILE_HEIGHT + TABS_HEIGHT + 24 + 100}px`,
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    zIndex: 9,
                    width: '90%',
                    maxWidth: 400,
                    mt: 0,
                    border: 'solid 1px'
                }}
            >
                {tab === 0 && <MyPosts />}
                {tab === 1 && <MyComments />}
                {tab === 2 && <MyInfo />}
            </Box>
            <BottomNav />
        </FrameLayout>
    );
}
