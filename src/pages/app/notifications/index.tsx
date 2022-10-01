import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';

NotificationsPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default function NotificationsPage() {
    return (
        <PageWrapper title="Notifications">
            <div>
                <h1>Notifications</h1>
            </div>
        </PageWrapper>
    );
}