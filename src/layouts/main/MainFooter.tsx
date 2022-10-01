import { Box, Container, Typography } from "@mui/material";

export default function MainFooter() {

    return (
        <Box
            sx={{
                py: 5,
                textAlign: 'center',
                position: 'relative',
                bgcolor: 'background.default',
            }}
        >
            <Container>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    The CAWMmunity is here. Join us!
                </Typography>
            </Container>
        </Box>
    );
}