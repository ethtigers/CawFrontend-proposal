import EmptyContent from "src/components/EmptyContent";
import PageWrapper, { Layout } from 'src/components/wrappers/PageWrapper';
import { MotionContainer } from 'src/components/animate';

ExplorePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout>{page}</Layout>;
};

export default function ExplorePage() {
    return (
        <PageWrapper title="Explore">
            <MotionContainer>
                <div>
                    <h1>Explore</h1>
                </div>
                <EmptyContent title="No content yet" />
            </MotionContainer>
        </PageWrapper>
    );
}