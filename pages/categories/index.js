import React from "react"
import { withRouter } from "next/router"
import { LayoutMain } from "@/components/layouts";
import { getCategory, getMenuMain } from '@/services/main/home';
import Head from "next/head";
const CategoryWapper = ({ router, navBarData, dataCategory }) => {
    
    const { slug,id } = router.query; 
    // const { navBarData } = props;
    // console.log(navBarData);
    return (
        <LayoutMain navBarData={navBarData}>
            <>
            <Head>
                <title>Category Page</title>
                <meta name="description" content="Example Nexjs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/vohonline.svg" />
            </Head>
            <div className='min-h-screen'>
            <h1>Category Page { id }</h1>
            </div>
            </>
        </LayoutMain>
    )
}
CategoryWapper.getInitialProps = async ({ query, req }) => {
    const { data: dataMenu } = await getMenuMain(req?.headers['user-agent']);
    const { menu: navBarData } = dataMenu;
    const { data: dataAllFromCategory } = await getCategory(
      query.id,
      query.page ? query.page - 1 : 0,
      req?.headers['user-agent'],
      query.dow,
    );
    const { cateLayoutData: layoutData } = dataAllFromCategory;
    const { moiCapNhat: dataCategory } = layoutData;
    return { navBarData, dataCategory };
  };
export default withRouter(CategoryWapper)