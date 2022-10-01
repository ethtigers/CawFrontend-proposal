import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';

BookmarksPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default function BookmarksPage() {
    return (
        <PageWrapper title="Bookmarks">
            <div>
                <h1>Bookmarks</h1>
            </div>
        </PageWrapper>
    );
}