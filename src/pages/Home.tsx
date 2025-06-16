import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box, CircularProgress } from "@mui/material"
import BottomNav from "../components/BottomNav";
import PostMasonry from "../components/PostMasonry";


const Home = () => {
    useEffect(() => {
        axios.get('/')
            .then((res) => {

            })
            .catch();
    }, []);

    return (
        <>
        <Box display="flex" alignItems="center" justifyContent="flex-start" mt={2} mb={4}>
            <img
                src="/logo192.png"
                alt="Logo"
                style={{ height: 48, marginRight: 16 }}
            />
            <Typography variant="h5" component="div">
                Home
            </Typography>
        </Box>

        <Container maxWidth="md">
            {/* 포스트 레이아웃 분리: PostMasonry 컴포넌트 사용 */}
            <PostMasonry />
        </Container>
        
        <BottomNav />
        </>
    )
}

export default Home;