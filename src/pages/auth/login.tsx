import { useEffect } from "react";
import useAuth from "src/hooks/useAuth";
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack'

import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';
import { PATH_AUTH, PATH_DASHBOARD } from "src/routes/paths";
import { Button, Stack } from "@mui/material";

LoginPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout variant="logoOnly">{page}</Layout>;
};

export default function LoginPage() {

    const { pathname, replace } = useRouter();
    const { isAuthenticated, login } = useAuth();
    const { enqueueSnackbar } = useSnackbar();
    const isLoginPage = pathname === PATH_AUTH.login;


    useEffect(() => {
        if (isAuthenticated)
            replace(PATH_DASHBOARD.app.home);

    }, [ isAuthenticated, replace ])


    const handleLogin = async () => {
        try {
            await login('', '');
        }
        catch (error) {
            enqueueSnackbar(error.message || 'Something went wrong', { variant: 'error' });
        }
    }

    return (
        <PageWrapper
            title="Login"
        >
            <Stack
                sx={{ mt: isLoginPage ? 10 : 5 }}
            >
                <h1>Login</h1>
                <p>
                    It looks like you are not logged in. Please login to continue.
                </p>
                <Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Button
                            variant="text"
                            onClick={handleLogin}
                        >
                            Connect
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </PageWrapper>
    );
}