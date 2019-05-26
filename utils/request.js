import axios from 'axios';

/**
 *
 * @description 封装的get请求
 * @param {string} apiUrl 向服务器发请求的URL
 * @param {json} params  发请求携带的参数
 * @param {json} options  axios相关配置 可选
 * @return promise
 */
function fetchByGet(apiUrl, params, options) {
  return axios({
    url: apiUrl, // `url`是将用于请求的服务器URL
    method: 'get', // `method`是发出请求时使用的请求方法
    //baseURL: 'https://some-domain.com/api/',
    params,
    timeout: 10000,
    ...options,
  })
    .then(response => response)
    .catch(err => {
      console.log(err);
    });
}

/**
 *
 * @description 封装的post请求
 * @param {string} apiUrl 向服务器发请求的URL
 * @param {json} data  发请求携带的参数
 * @param {json} options  axios相关配置 可选
 * @return promise
 */
function fetchByPost(apiUrl, data, options) {
  return axios({
    url: apiUrl, // `url`是将用于请求的服务器URL
    method: 'post', // `method`是发出请求时使用的请求方法
    //baseURL: 'https://some-domain.com/api/',
    data,
    timeout: 10000,
    ...options,
  })
    .then(response => response)
    .catch(err => {
      console.log(err);
    });
}

/**
 *
 * @description 封装的多个并发请求
 * @param {array} fnList 每个数组是一个axios的请求
 * @return promise
 */
function fetchAll(fnList) {
  return axios
    .all(fnList)
    .then(
      axios.spread(function(...arr) {
        return { ...arr };
      }),
    )
    .catch(err => {
      console.log(err);
    });
}

export { fetchByGet, fetchByPost, fetchAll };
