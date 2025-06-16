import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box, CircularProgress } from "@mui/material"
import BottomNav from "../components/BottomNav";
import BoardList from "../components/BoardList";
import HomeHeader from "../components/HomeHeader";

const Home = () => {
    useEffect(() => {
        axios.get('/')
            .then((res) => {

            })
            .catch();
    }, []);

    return (
        <>
        <HomeHeader />

        <Container maxWidth="md">
            {/* 포스트 레이아웃 분리: PostMasonry 컴포넌트 사용 */}
            
        </Container>
            <BoardList/>
        <BottomNav />
        </>
    )
}

export default Home;