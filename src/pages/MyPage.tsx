import { Tabs, Tab, Box } from '@mui/material';
import { useState } from 'react';
import MyPosts from '../components/MyPosts';
import MyComments from '../components/MyComments';
import MyInfo from '../components/MyInfo';
import FrameLayout from '../components/FrameLayout';
import BottomNav from '../components/BottomNav';
import HomeHeader from '../components/HomeHeader';

const menu = [
    { label: '내 포스트', value: 0 },
    { label: '내 댓글', value: 1 },
    { label: '내 정보', value: 2 },
];

export default function MyPage() {
    const [tab, setTab] = useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setTab(newValue);
    };

    return (

        <FrameLayout>
            <HomeHeader />
            <Box
                sx={{
                    position: 'fixed',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                    width: '90%',
                    maxWidth: 400,
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
                    }}
                >
                    {menu.map((item) => (
                        <Tab key={item.value} label={item.label} />
                    ))}
                </Tabs>
            </Box>
            

            {/* 아래 영역에 각 컴포넌트 렌더링 */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 'calc(30% + 48px)', // 48px is the default Tabs height
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    zIndex: 9,
                    width: '90%',
                    maxWidth: 400,
                    mt: 0,
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
