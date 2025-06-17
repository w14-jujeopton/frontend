import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Box, Button, Tab, Tabs, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BottomNav from "../components/BottomNav";
import HomeHeader from "../components/HomeHeader";
import FrameLayout from "../components/FrameLayout";

const Post = () => {
  const [tab, setTab] = useState(0);      // 0: 레터 쓰기, 1: 주접 떨기
  const [text, setText] = useState('');
  const navigate = useNavigate();         // 뒤로가기용

  const [params] = useSearchParams();
  const owner = params.get('owner');      // URL에서 owner 추출
  const author = '나물';                   // TODO: 실제 로그인 사용자로 교체

  const handleChangeTab = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
    setText('');    // 탭 변경 시 입력 초기화
  };

  const handleCancel = () => {
    setText('');
    navigate(-1);   // 이전 페이지로 이동
  };

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    try {
      await axios.post('http://goochul.iptime.org:4000/post', {
        content: text,
        author,
        owner,
      });

      navigate(-1); // 등록 성공 시 이전 페이지로 이동
    } catch (err) {
      console.error('등록 실패:', err);
      alert('등록에 실패했습니다.');
    }
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
    <FrameLayout>
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
    </FrameLayout>
  );
};

export default Post;