import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';

ListsPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default function ListsPage() {
    return (
        <PageWrapper title="Lists">
            <div>
                <h1>Lists</h1>
            </div>
        </PageWrapper>
    );
}