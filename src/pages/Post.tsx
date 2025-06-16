import { useEffect, useState } from 'react';
import axios from "axios";
import { Box, Button, Tab, Tabs, TextField } from '@mui/material';
import BottomNav from "../components/BottomNav";
import HomeHeader from "../components/HomeHeader";

const Post = () => {
  const [tab, setTab] = useState(0); // 0: 레터 쓰기, 1: 주접 떨기
  const [text, setText] = useState('');

  const handleChangeTab = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    setText(''); // 탭 변경 시 입력 초기화 (선택 사항)
  };

  const handleCancel = () => {
    setText('');
  };

  const handleSubmit = () => {
    console.log('등록:', text);
    // API 호출 or props 콜백
  };

  const generateWithGPT = async () => {
    const res = await fetch('/api/gpt', {
      method: 'POST',
      body: JSON.stringify({ prompt: '주접 떨기' }),
      headers: { 'Content-Type': 'application/json' },
    });
    const { result } = await res.json();
    setText(result);
  };

  const generateWithGemini = async () => {
    const res = await fetch('/api/gemini', {
      method: 'POST',
      body: JSON.stringify({ prompt: '주접 떨기' }),
      headers: { 'Content-Type': 'application/json' },
    });
    const { result } = await res.json();
    setText(result);
  };

  return (
    <Box>
        <HomeHeader />

        <Tabs value={tab} onChange={handleChangeTab} centered>
            <Tab label="레터 쓰기" />
            <Tab label="주접 떨기" />
        </Tabs>

        <Box sx={{ p: 2 }}>
            <TextField
            fullWidth
            multiline
            rows={6}
            placeholder={tab === 0 ? '마음껏 적어주세요' : '주접을 떨어보세요'}
            value={text}
            onChange={(e) => setText(e.target.value)}
            />

            {tab === 1 && (
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                <Button variant="outlined" onClick={generateWithGPT}>GPT로 주접</Button>
                <Button variant="outlined" onClick={generateWithGemini}>Gemini로 주접</Button>
            </Box>
            )}

            <Box sx={{ mt: 2, display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
            <Button variant="text" onClick={handleCancel}>취소</Button>
            <Button variant="contained" onClick={handleSubmit}>등록</Button>
            </Box>
        </Box>
    <BottomNav />
    </Box>
  );
};

export default Post;