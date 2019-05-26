import getConfig from 'next/config';

const {
  publicRuntimeConfig: {
    NEXTJS_ENV: env,
    NODE_API_URL: nodeApiUrl,
    VOOV_IMG_URL: voovImgUrl,
    CGI_API_URL: cgiApiUrl,
    CGI_SMUSIC_URL: cgiSmusicUrl,
    CDN_BASE_URL: cdnBaseUrl,
    L5_ON: l5On,
    L5_DEBUG: l5Debug,
  },
} = getConfig();

export {
  env,
  nodeApiUrl,
  voovImgUrl,
  cgiApiUrl,
  cgiSmusicUrl,
  cdnBaseUrl,
  l5On,
  l5Debug,
};
