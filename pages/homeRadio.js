import React from 'react';
import { LayoutRadio } from "@/components/layouts";
import { getPageHomeRadio } from "@/services/radio/pageHome";
import Head from "next/head";
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
const HomeRadioWapper = props => {
    const { navBarData } = props;
    console.log(navBarData);
    return (
        <LayoutRadio
            navBarData={navBarData}>
            <Head>
                <title>Example Nexjs</title>
                <meta name="description" content="Example Nexjs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/vohonline.svg" />
            </Head>
            <div className='min-h-screen'>
                <h1>Trang home radio</h1>
            </div>
        </LayoutRadio>
    )
}
HomeRadioWapper.propTypes = {
    navBarData: PropTypes.any,
};

HomeRadioWapper.getInitialProps = async ({ req }) => {
    const { data } = await getPageHomeRadio(req?.headers['user-agent']);
    const navBarData = data.menu;
    return { navBarData };
};
export default withRouter(HomeRadioWapper);
