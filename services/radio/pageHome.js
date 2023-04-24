import getConfig from 'next/config';
import API_RADIO from './api';

const { publicRuntimeConfig } = getConfig();
export const getPageHomeRadio = async userAgent => {
    const response = await API_RADIO.get(
        publicRuntimeConfig.RADIO_API + 'page/home',
        {
            headers: {
                'User-Agent': userAgent || (process.browser && navigator?.userAgent),
            },
        },
    );
    return response;
};
