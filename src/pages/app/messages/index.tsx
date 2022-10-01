import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';

MessagesPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default function MessagesPage() {
    return (
        <PageWrapper title="Messages">
            <div>
                <h1>Messages</h1>
            </div>
        </PageWrapper>
    );
}