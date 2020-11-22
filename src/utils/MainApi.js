class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _fetch(endPoint, options) {
    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    options.headers = this._headers;

    return fetch(this._baseUrl + endPoint, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`${res.status}`);
      });
  }

  get(endPoint) {
    return this._fetch(endPoint, {
      method: 'GET',
    });
  }

  post(endPoint, body) {
    return this._fetch(endPoint, {
      method: 'POST',
      body,
    });
  }

  delete(endPoint) {
    return this._fetch(endPoint, {
      method: 'DELETE',
    });
  }
}

const jwt = localStorage.getItem('jwt');
const mainApi = new MainApi({
  baseUrl: 'https://api.vdnews.students.nomoreparties.co',
  headers: {
    Authorization: `Bearer ${jwt}`,
    'Content-Type': 'application/json'
  },
});

export default mainApi;
