import React from "react"
import { withRouter } from "next/router"
import { LayoutMain } from "@/components/layouts";
import { getArticleDetail, getMenuMain } from '@/services/main/home';
import { RadioLink } from '@/components/radioLink';
import Head from "next/head";
const ArticleDetailWapper = ({ router, navBarData, dataArticle }) => {
    const { content: NewsContent } = dataArticle;
    const { slug, id } = router.query;
    
    return (
        <LayoutMain navBarData={navBarData}>
            <>
                <Head>
                    <title>{dataArticle.title}</title>
                    <meta name="description" content="{dataArticle.intro}" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/vohonline.svg" />
                </Head>
                <div className="container">
                    <div className="DefaultLayout_content-wrapper__5n_fy">
                        <div className="Home_home-wrapper__19AOT" >
                            <div className="Home_body-home-container__1VznX" >
                                <div className="Home_body-home-left__37mb7">
                                <div class="news-detail-content_detail-title__2NXA9">
                                    <h1 class="style_html-tag-h1__23liH">{dataArticle.title}</h1>
                                </div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: NewsContent,
                                    }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </LayoutMain>
    )
}
ArticleDetailWapper.getInitialProps = async ({ query, req }) => {
    const { data: dataMenu } = await getMenuMain(req?.headers['user-agent']);
    const { menu: navBarData } = dataMenu;
    const { data: dataArticle } = await getArticleDetail(
        query.id,
        req?.headers['user-agent'],
    );
    return { navBarData, dataArticle };
};
export default withRouter(ArticleDetailWapper)