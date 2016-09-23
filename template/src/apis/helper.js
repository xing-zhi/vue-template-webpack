// 和服务端接口交互
// Restful风格
// 分为get、post、put、del和postForm5个方法分别进行CRUD操作和提交二进制文件
// 除了postForm方法外，其他都是发送的json
// 接口返回结果为json
// 开发时，使用webpack-dev-server，接口请求，无论是mock server，还是实际server，都被转接，不需要处理跨域问题
import request from 'superagent';

function handleResponse(err, res, resolve, reject) {
  if ( err ) {
    reject(err);
  }

  const status = res.status;
  const data = res.body;

  // 根据接口规范，进一步补充
}

export function get(baseUrl, params = [], query = {}) {
  const url = `${baseUrl}/${params.join('/')}`;

  return new Promise((resolve, reject) => {
    request.get(url)
      .query(query)
      .end((err, res) => {
        if ( err ) {
          reject(err);
        }

        handleResponse(err, res, resolve, reject);
      });
  });
}

export function post(baseUrl, data, params = []) {
  const url = `${baseUrl}/${params.join('/')}`;

  return new Promise((resolve, reject) => {
    request.post(url)
      .send(data)
      .end((err, res) => {
        handleResponse(err, res, resolve, reject);
      });
  });
}

export function put(baseUrl, data, params = []) {
  const url = `${baseUrl}/${params.join('/')}`;

  return new Promise((resolve, reject) => {
    request.put(url)
      .send(data)
      .end((err, res) => {
        handleResponse(err, res, resolve, reject);
      });
  });
}

export function del(baseUrl, params = []) {
  const url = `${baseUrl}/${params.join('/')}`;

  return new Promise((resolve, reject) => {
    request.del(url)
      .end((err, res) => {
        handleResponse(err, res, resolve, reject);
      });
  });
}

export function postForm(baseUrl, data, params = []) {
  const url = `${baseUrl}/${params.join('/')}`;

  return new Promise((resolve, reject) => {
    const form = new FormData();

    try {
      Object.keys(data).forEach((key) => {
        form.append(key, data[key]);
      });
    } catch (e) {
      reject(new Error('请使用最新版的Chrome浏览器！'));
    }

    request.post(url)
      .send(form)
      .end((err, res) => {
        handleResponse(err, res, resolve, reject);
      });
  });
}
