import getConfig from 'next/config';
import API_VOH from './api';

const { publicRuntimeConfig } = getConfig();
export const getHomeData = async userAgent => {
    const response = await API_VOH.get(
        publicRuntimeConfig.VOH_API + 'home',
        {
            headers: {
                'User-Agent': userAgent || (process.browser && navigator?.userAgent),
            },
        },
    );
    return response;
};
