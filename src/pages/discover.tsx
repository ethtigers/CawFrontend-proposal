import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';

DiscoverPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout variant="main">{page}</Layout>;
};

export default function DiscoverPage() {
    return (
        <PageWrapper title="Discover">
            <div>
                <h1>Discover</h1>
                <p>
                    Find out what's happening in the world right now. Get the latest
                </p>
            </div>
        </PageWrapper>
    );
}