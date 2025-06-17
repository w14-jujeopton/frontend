import { Box } from '@mui/material';

import type { ReactNode } from 'react';

type FrameLayoutProps = {
    children: ReactNode;
};
function ScrollableBox({ children }: { children: ReactNode }) {
    return (
        <Box
            sx={{
                height: 300, // 원하는 높이(px, %, vh 등)
                overflowY: 'auto', // 세로 스크롤 활성화
                // 필요시 border, padding 등 추가
                border: '1px solid #ccc',
                p: 2,
            }}
        >
            {children}
        </Box>
    );
}

export default ScrollableBox;