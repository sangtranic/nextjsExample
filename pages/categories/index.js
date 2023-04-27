import React from "react"
import { withRouter } from "next/router"
import { LayoutMain } from "@/components/layouts";
import { getCategory, getMenuMain } from '@/services/main/home';
import { RadioLink } from '@/components/radioLink';
import Head from "next/head";
const CategoryWapper = ({ router, navBarData, dataCategory }) => {
    const { news: data } = dataCategory;
    const { slug, id } = router.query;
    // const { navBarData } = props;
    return (
        <LayoutMain navBarData={navBarData}>
            <>
                <Head>
                    <title>{dataCategory.cateName}</title>
                    <meta name="description" content="Example Nexjs" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/vohonline.svg" />
                </Head>
                <div className="container">
                    <div className="DefaultLayout_content-wrapper__5n_fy">
                        <div className="Home_home-wrapper__19AOT" >
                            <div className="Home_body-home-container__1VznX" >
                                <div className="Home_body-home-left__37mb7">
                                    {
                                        data.map((item, index) => (
                                            <div key={index} className="NewsList_news-list-item__I2UeH">
                                                <div className="NewsListItem_news-list-item-thumb__1gs8s">
                                                    <RadioLink to={item.friendlyUrl}>
                                                        <img src={item.thumbnail} className="size-image_size-img__1V_wO " alt={item.title} />
                                                    </RadioLink>
                                                </div>
                                                <div className="NewsListItem_news-list-item-wrapper__15Cd1">
                                                    <div className="NewsListItem_news-list-item-ext__11cfJ">
                                                        <div className="NewsListItem_time__Jp7h5">
                                                            <span>{item.publictDay}</span>&nbsp;-&nbsp;
                                                        </div>
                                                        <div className="NewsListItem_cate-name__YkB_8">
                                                            <RadioLink to={item.frenlyCateUrl}>
                                                                {item.cateName}
                                                            </RadioLink>
                                                        </div>
                                                    </div>
                                                    <div className="NewsListItem_news-list-item-title__2a-Yt">
                                                        <RadioLink to={item.friendlyUrl}>{item.title}</RadioLink>
                                                    </div>
                                                    <div className="NewsListItem_news-list-item-intro__3Ohhu">{item.intro}</div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </LayoutMain>
    )
}
CategoryWapper.getInitialProps = async ({ query, req }) => {
    const { data: dataMenu } = await getMenuMain(req?.headers['user-agent']);
    const { menu: navBarData } = dataMenu;
    const { data: dataCategory } = await getCategory(
        query.id,
        query.page ? query.page - 1 : 0,
        req?.headers['user-agent'],
        query.dow,
    );
    //const { news: dataCategory } = dataAllFromCategory;
    return { navBarData, dataCategory };
};
export default withRouter(CategoryWapper)