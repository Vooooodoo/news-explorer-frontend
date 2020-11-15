class NewsApi {
  constructor() {
    this._date = new Date();
    this._today = `${this._date.getFullYear()}-${this._date.getMonth() + 1}-${this._date.getDate()}`;
    this._weekAgoDate = new Date();
    this._weekAgoDay = this._weekAgoDate.setDate(this._weekAgoDate.getDate() - 7);
    this._weekAgo = `${this._weekAgoDate.getFullYear()}-${this._weekAgoDate.getMonth() + 1}-${this._weekAgoDate.getDate()}`
  }

  _setDate(dayAgo) {
    const date = new Date();

    date.setDate(date.getDate() - dayAgo);
  }

  _getDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  _fetch(theme, options) {
    return fetch(`https://newsapi.org/v2/everything?q=${theme}&from=${this._weekAgo}&to=${this._today}&language=ru&pageSize=100&apiKey=70091bdd11724ad58795297088c46456`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return Promise.reject(`${res.status}`);
      });
  }

  get(theme) {
    return this._fetch(theme, {
      method: 'GET',
    });
  }
}



const newsApi = new NewsApi();

export default newsApi;
