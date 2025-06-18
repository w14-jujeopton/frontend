import { Box } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FrameLayout from "./FrameLayout";
import { Link } from 'react-router-dom';

const BottomNav = () => (
    <Box
        position="fixed"
        bottom={0}
        left={0}
        width="100%"
        height="56px"
        bgcolor="background.paper"
        boxShadow={3}
        zIndex={1300}
    >
        <FrameLayout>
            <Box display="flex" justifyContent="space-around" alignItems="center" py={1}>
                {/* 홈 아이콘 */}
                <Box display="flex" flexDirection="column" alignItems="center">
                    {/* TODO: 추후 Link 태그로 새로고침 없이 만들어보기 */}
                    <Link to="/">
                        <HomeRoundedIcon sx={{ color: 'primary.main', fontSize: 40 }} />
                    </Link>
                </Box>

                {/* 가운데 아이콘 → Board */}
                <Box display="flex" flexDirection="column" alignItems="center">
                <Link to="/myboard">
                    <StickyNote2RoundedIcon sx={{ color: 'primary.main', fontSize: 40 }} />
                </Link>
                </Box>

                {/* 마이페이지 */}
                <Box display="flex" flexDirection="column" alignItems="center">
                <Link to="/mypage">
                    <PersonRoundedIcon sx={{ color: 'primary.main', fontSize: 40, mr: 2 }} />
                </Link>
                </Box>
            </Box>
        </FrameLayout>
    </Box>
);

export default BottomNav;
