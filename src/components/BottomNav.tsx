import { Box } from "@mui/material";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FrameLayout from "./FrameLayout";

const BottomNav = () => (
    <Box
        position="fixed"
        bottom={0}
        left={0}
        width="100%"
        bgcolor="background.paper"
        boxShadow={3}
        zIndex={1300}
    >
        <FrameLayout>
            <Box display="flex" justifyContent="space-around" alignItems="center" py={1}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    {/* TODO: 추후 Link 태그로 새로고침 없이 만들어보기 */}
                    <a href="/">
                        <HomeRoundedIcon sx={{ color: 'primary.main', fontSize: 40, mr: 2 }} />
                    </a>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <a href="/">
                        <StickyNote2RoundedIcon sx={{ color: 'primary.main', fontSize: 40, mr: 2 }} />
                    </a>
                </Box>

                <Box display="flex" flexDirection="column" alignItems="center">
                    <a href="/mypage">
                        <PersonRoundedIcon sx={{ color: 'primary.main', fontSize: 40, mr: 2 }} />
                    </a>
                </Box>
            </Box>
        </FrameLayout>
    </Box>
);

export default BottomNav;
