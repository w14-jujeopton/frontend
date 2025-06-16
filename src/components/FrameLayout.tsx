import type { ReactNode } from 'react';
import Box from '@mui/material/Box';

type FrameLayoutProps = {
  children: ReactNode;
};

function FrameLayout({ children }: FrameLayoutProps) {
  return (
    <Box
      sx={{
        minWidth: 320,
        maxWidth: 640,
        mx: 'auto',
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
}

export default FrameLayout;
