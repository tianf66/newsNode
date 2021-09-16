let config = {
    urls: {
        ads: '//c.bxb.oupeng.com/s',
    	channleList: '/api/list',
    	detail: '/api/detail',
        config: '/api/back/getDistributor',
        relateNews: '/api/news/findDetailFeedNewsList',
        isAdForbidden: '/api/adForbidden/isAdForbidden',
    }
};

let proxyConfig = {
    urls: {
        ads: '//c.bxb.oupeng.com/s',
        channleList: 'http://localhost:3000/api/list',
    	detail: 'http://localhost:3000/api/detail',
        config: 'http://localhost:3000/api/back/getDistributor',
    	relateNews: '/proxy/api/news/findDetailFeedNewsList',
        isAdForbidden: '/proxy/api/adForbidden/isAdForbidden',
    }
};

let urls;
if(process.env.NODE_ENV == 'development') {
    urls =  proxyConfig;
} else {
    urls =  config;
}
export default urls;
