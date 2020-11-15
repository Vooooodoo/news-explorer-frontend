class NewsApi {
  constructor(dayAgo) {
    this._date = new Date();
    this._today = this._getDate(this._date);
    this._weekAgoDate = this._setDate(dayAgo);
    this._weekAgo = this._getDate(this._weekAgoDate);
  }

  _setDate(dayAgo) {
    const date = new Date();

    date.setDate(date.getDate() - dayAgo);

    return date;
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



const newsApi = new NewsApi(7);
//* в качестве аргумента передали количество дней назад от текущей даты, за которые будет поиск статей

export default newsApi;
