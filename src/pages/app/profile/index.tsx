import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';

UserProfilePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default function UserProfilePage() {
    return (
        <PageWrapper title="My profile">
            <div>
                <h1>My profile</h1>
            </div>
        </PageWrapper>
    );
}