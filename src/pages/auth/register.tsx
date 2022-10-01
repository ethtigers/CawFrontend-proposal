import { Box, Button, Stack } from "@mui/material";
import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';
import { PATH_AUTH } from "src/routes/paths";

RegisterPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout variant="logoOnly">{page}</Layout>;
};

export default function RegisterPage() {
    return (
        <PageWrapper title="Mint your username">
            <Stack sx={{ mt: 10 }}>
                <Stack direction="row" >
                    <div>
                        <h1>Register page</h1>
                        <p>
                            Mint your username and join the revolution
                        </p>
                        <Box sx={{ mt: 5 }}>
                            <p>
                                Already have your?{" "}
                            </p>
                            <Button
                                variant="text"
                                sx={{ textTransform: 'none' }}
                                href={PATH_AUTH.login}
                                target="_blank"
                                rel="noopener"
                            >
                                Connect
                            </Button>
                        </Box>
                    </div>
                </Stack>
            </Stack>
        </PageWrapper>
    );
}