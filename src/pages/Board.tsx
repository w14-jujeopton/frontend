import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Fab, Paper, Typography } from '@mui/material';
import { Masonry } from '@mui/lab';
import BottomNav from '../components/BottomNav';
import HomeHeader from '../components/HomeHeader';
import FrameLayout from '../components/FrameLayout';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

type PostType = {
  id: number;
  content: string;
  author: string;
  date: string;
};

// 🧪 더미 카드 12개
const dummyPosts: PostType[] = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    content:
    i % 2 === 0
      ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at elit quis arcu tempus gravida. Sed vehicula libero ut felis laoreet luctus.'
      : 'Vivamus feugiat lacus a felis accumsan, nec vehicula lorem fermentum.',
    author: ['나물', '콩', '깻잎', '감자', '고구마', '초코'][i % 6],
    date: new Date(Date.now() - i * 86400000).toLocaleDateString(), // 오늘 - i일
}));
  
const Board = () => {
    const navigate = useNavigate();

    return (
      <FrameLayout>
        <Box sx={{ 
                minHeight: '120vh', 
                bgcolor: '#fffdf8', 
                pb: '80px', 
                pt: '24px',
              }}>
            <HomeHeader />

            <Box
              px={2}
              py={3}
              sx={{
                display: 'flex',           // 🔹 Masonry를 가운데로 감싸기
                justifyContent: 'center',  // 🔹 중앙 정렬
              }}
            >
                <Masonry columns={2} spacing={2}>
                {dummyPosts.map((post) => (
                    <Paper key={post.id} elevation={3} sx={{ p: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, whiteSpace: 'pre-line' }}>
                        {post.content}
                    </Typography>

                    <Typography 
                        variant="caption" 
                        color="text.secondary" 
                        sx={{ display: 'block', textAlign: 'right' }}>
                        {post.author} ・ {post.date}
                    </Typography>
                    </Paper>
                ))}
                </Masonry>
            </Box>

            {/* FAB 버튼 */}
            <Fab
                color="primary"
                aria-label="add"
                onClick={() => navigate('/post?owner=나물')}
                sx={{
                    position: 'fixed',
                    bottom: 100,
                    right: 100,
                    zIndex: 1000,
                }}>
            <AddIcon />
            </Fab>

          <BottomNav />
        </Box>
      </FrameLayout>
    );
  };

export default Board;



// const Board = () => {
//   const [posts, setPosts] = useState<PostType[]>([]);

//   useEffect(() => {
//     axios
//       .get('http://goochul.iptime.org:4000/post')
//       .then((res) => setPosts(res.data))
//       .catch((err) => console.error('포스트 불러오기 실패:', err));
//   }, []);

//   return (
//     <FrameLayout>
//       <div className="bg-[#fffdf8] min-h-screen flex flex-col pb-24">
//         <HomeHeader />

//         <main className="flex-1 py-6 px-4">
//           <div className="max-w-screen-lg mx-auto columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
//             {posts.map((post) => (
//               <div
//                 key={post.id}
//                 className="break-inside-avoid p-4 bg-white rounded-lg shadow transition hover:shadow-md"
//               >
//                 <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800">
//                   {post.content}
//                 </p>
//                 <p className="text-right text-xs text-gray-500 mt-2">- {post.author}</p>
//               </div>
//             ))}
//           </div>
//         </main>

//         <BottomNav />
//       </div>
//     </FrameLayout>
//   );
// };

// export default Board;
