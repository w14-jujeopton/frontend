import { Box, Typography } from "@mui/material";
import FrameLayout from "./FrameLayout";

const HomeHeader = () => (
<Box
    position="fixed"
    top={0}
    left={0}
    width="100%"
    zIndex={1100}
    display="flex"
    alignItems="center"
    justifyContent="flex-start"
    bgcolor="background.paper"
    boxShadow={1}
    height="46px"
    py={2}
    px={3}
>
    <FrameLayout>
    <span style={{ display: "flex", alignItems: "center", marginRight: 16 }}>
        <a href="/">
            Jung/e Board
        </a>
    </span>
    </FrameLayout>
</Box>
);

export default HomeHeader;
