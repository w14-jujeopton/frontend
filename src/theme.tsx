// src/theme.ts
import { createTheme } from '@mui/material/styles';

const customFrame = {
    minWidth: 320,
    maxWidth: 640,
};

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // 원하는 색상 코드로 변경
        },
        // secondary, error 등도 여기서 설정 가능
    },
});

// You can export customFrame if you need to use it elsewhere
export { customFrame };

export default theme;
