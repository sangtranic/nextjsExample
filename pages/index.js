import React from 'react';
import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { LayoutMain } from "@/components/layouts";
import { getPageHomeRadio } from "@/services/radio/pageHome";
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getHomeData, getMenuMain } from '@/services/main/home';
import { RadioLink } from '@/components/radioLink';
const inter = Inter({ subsets: ['latin'] })
const HomeWapper = props => {
  const { navBarData, data } = props;
  return (
    <LayoutMain navBarData={navBarData}>
      <Head>
        <title>Example Nexjs</title>
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
                          <img src={item.thumbnail} className="size-image_size-img__1V_wO " alt={item.title}/>
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
    </LayoutMain>
  )
}
HomeWapper.propTypes = {
  navBarData: PropTypes.any,
  data: PropTypes.any
};

HomeWapper.getInitialProps = async ({ req }) => {
  const { data: dataMenu } = await getMenuMain(req?.headers['user-agent']);
  const { menu: navBarData } = dataMenu;
  const { data: dataHome } = await getHomeData(req?.headers['user-agent']);
  const { tinNoiBat: data } = dataHome;
  return { navBarData, data };
};
export default withRouter(HomeWapper);
