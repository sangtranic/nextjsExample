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
export const getMenuMain = async userAgent => {
    const response = await API_VOH.get(
        publicRuntimeConfig.VOH_API + 'cate/menuv2',
        {
            headers: {
                'User-Agent': userAgent || (process.browser && navigator?.userAgent),
            },
        },
    );
    return response;
};

export const getCategory = async (id, page, userAgent, dow) => {
    try {
      const response = await API_VOH.get(
        publicRuntimeConfig.VOH_API + `cate/${id}/${page}`,
        {
          headers: {
            'User-Agent': userAgent || (process.browser && navigator?.userAgent),
          },
          params: {
            dow,
          },
        },
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };
  export const getArticleDetail = async (id, userAgent) => {
    try {
      const response = await API_VOH.get(
        publicRuntimeConfig.VOH_API + `news/${id}`,
        {
          headers: {
            'User-Agent': userAgent || (process.browser && navigator?.userAgent),
          },
        },
      );
      return response;
    } catch (err) {
      console.log(err);
    }
  };