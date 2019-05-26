const config = require('../config/L5');
const constants = require('../config/constants');

const env = constants.env;
const L5_ON = constants.l5On;
const L5_Debug = constants.l5Debug;

let L5 = '';
let l5update = '';
if (env !== 'dev') {
  L5 = require('@tencent/joox-l5-api-v2');
}

// 对L5 异步的封装
const instance = {
  /**
   *
   * @param {object} opts e.g.
   * {
          modid: 139009,
          cmd: 65536,
          timeout: 0.2,
          debug: false
      }
   * @return {Promise}
   * @constructor
   */
  ApiGetRoute: opts => {
    return new Promise((resolve, reject) => {
      if (!opts || typeof opts !== 'object') {
        return reject(new Error('illegal arguments'));
      }

      L5.ApiGetRoute(opts, (err, obj) => {
        if (err) {
          return reject(new Error(err));
        }

        obj.cmd = opts.cmd;
        obj.modid = opts.modid;
        obj.debug = opts.debug;

        return resolve(obj);
      });
    });
  },

  /**
   *
   * @param info
   * @return {*}
   * @constructor
   */
  ApiRouteResultUpdate: info => {
    return new Promise((resolve, reject) => {
      if (
        !info ||
        typeof info !== 'object' ||
        typeof info.delay === 'undefined' ||
        typeof info.ret === 'undefined'
      ) {
        return reject(new Error('illegal arguments'));
      }

      L5.ApiRouteResultUpdate(info, (err, ret) => {
        if (err) {
          return reject(err);
        }

        return resolve(ret);
      });
    });
  },
};

// get feature data
async function getBaseUrl(domain, l5_key) {
  let ubase = process.env[domain];

  if (L5_ON && L5) {
    const l5_config = config[env];
    const l5mid = l5_config[l5_key]['L5MODID'];
    const l5cmd = l5_config[l5_key]['L5CMD'];

    const l5r = await L5.ApiGetRoute({
      modid: l5mid,
      cmd: l5cmd,
      timeout: 0.2,
      debug: L5_Debug,
    });

    if (l5r && l5r.ip) {
      ubase = `http://${l5r.ip}:${l5r.port}`;
      console.log(ubase);

      const l5start = process.hrtime();

      l5update = async function() {
        await L5.ApiRouteResultUpdate({
          modid: l5mid,
          cmd: l5cmd,
          usetime: Math.round(process.hrtime(l5start)[1] / 1000000), // ns to ms
          ret: 0,
          ip: l5r.ip,
          port: l5r.port,
          pre: l5r.pre,
          flow: l5r.flow,
          debug: l5debug,
        });
      };
    } else {
      console.log(l5r, '\n------------------L5RESULT---');
    }
  }
  return ubase;
}

export { getBaseUrl, l5update };
