import { Box, Typography } from "@mui/material";

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
    <Box display="flex" justifyContent="space-around" alignItems="center" py={1}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <img src="/logo192.png" alt="Home" style={{ width: 28, height: 28 }} />
        <Typography variant="caption" color="textSecondary">
          Home
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <span role="img" aria-label="board" style={{ fontSize: 28 }}>📝</span>
        <Typography variant="caption" color="textSecondary">
          My Board
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <span role="img" aria-label="mypage" style={{ fontSize: 28 }}>👤</span>
        <Typography variant="caption" color="textSecondary">
          My Page
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default BottomNav;
