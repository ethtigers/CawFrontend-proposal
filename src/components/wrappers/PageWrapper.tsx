import { Container } from "@mui/material";

import Page from 'src/components/wrappers/Page';
import Layout from 'src/layouts';

export { Layout };

type Props = {
    title: string;
    children?: React.ReactNode;
}

export default function PageWrapper({ title, children }: Props) {

    return (
        <Page title={title}>
            <Container maxWidth={'xl'}>
                {children}
            </Container>
        </Page>
    );
}