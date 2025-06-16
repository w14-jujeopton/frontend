import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Box, CircularProgress } from "@mui/material"

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
        <Container maxWidth="md" sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
            <Box sx={{ width: "100%" }}>
                <Box display="flex" justifyContent="center">
                    <Typography variant="h6" gutterBottom>
                        Grid Example
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box sx={{ width: 400 }}>
                        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
                            <Box bgcolor="primary.main" color="white" p={2} borderRadius={2} textAlign="center">1</Box>
                            <Box bgcolor="secondary.main" color="white" p={2} borderRadius={2} textAlign="center">2</Box>
                            <Box bgcolor="success.main" color="white" p={2} borderRadius={2} textAlign="center">3</Box>
                            <Box bgcolor="error.main" color="white" p={2} borderRadius={2} textAlign="center">4</Box>
                            <Box bgcolor="warning.main" color="white" p={2} borderRadius={2} textAlign="center">5</Box>
                            <Box bgcolor="info.main" color="white" p={2} borderRadius={2} textAlign="center">6</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
        <Box
            position="fixed"
            bottom={0}
            left={0}
            width="100%"
            bgcolor="background.paper"
            boxShadow={3}
            zIndex={1300}
        >
            <Box display="flex" justifyContent="space-around" alignItems="center" py={1}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <img src="/logo192.png" alt="Home" style={{ width: 28, height: 28 }} />
                    <Typography variant="caption" color="textSecondary">
                        Home
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <span role="img" aria-label="board" style={{ fontSize: 28 }}>📝</span>
                    <Typography variant="caption" color="textSecondary">
                        My Board
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <span role="img" aria-label="mypage" style={{ fontSize: 28 }}>👤</span>
                    <Typography variant="caption" color="textSecondary">
                        My Page
                    </Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default Home;