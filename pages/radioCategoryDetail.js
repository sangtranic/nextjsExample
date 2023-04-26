import React from "react"
import { withRouter } from "next/router"
import { LayoutRadio } from "@/components/layouts";
import Head from "next/head";
const RadioCategoryDetail = props => {
    const { navBarData } = props;
    console.log(navBarData);
    return (
        <LayoutRadio
            navBarData={navBarData}>
            <Head>
                <title>Radio Category Page</title>
                <meta name="description" content="Example Nexjs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/vohonline.svg" />
            </Head>
            <div className='min-h-screen'>
            <h1>Radio Category Page</h1>
            </div>
        </LayoutRadio>
    )
}
export default withRouter(RadioCategoryDetail)