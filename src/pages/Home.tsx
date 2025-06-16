import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box, CircularProgress } from "@mui/material"
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import BottomNav from "../components/BottomNav";


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
            <Masonry columns={3} spacing={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="body2" color="textSecondary">
                            Welcome to the Home page!
                        </Typography>
                    </CardContent>
                </Card>
                {/* 추가 카드가 있다면 여기에 계속 Card 컴포넌트를 추가하면 됩니다 */}
            </Masonry>
        </Container>
        
        <BottomNav />
        </>
    )
}

export default Home;