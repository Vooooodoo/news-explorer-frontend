class NewsApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _fetch(options) {
    //* метод fetch создаёт запрос на сервер и возвращает его ответ,
    //* вторым аргументом передадим объект опций
    return fetch(this._baseUrl, options)
      .then((res) => {
        if (res.ok) { //* если запрос прошёл успешно
          //* асинхронный метод json читает ответ от сервера в формате json и возвращает промис,
          //* из которого можно достать нужные данные через обработчик then
          return res.json();
        }

        return Promise.reject(`${res.status}`); //* если сервер вернул ошибку, отклонили промис, чтобы перейти в блок catch
      });
  }

  //* метод для получения данных с сервера
  get(theme) {
    return this._fetch({
      method: 'GET',
    });
  }
}

// API INSTANCE
const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/v2/everything?q=Путин&from=2020-11-05&to=2020-11-13&language=ru&pageSize=100&apiKey=70091bdd11724ad58795297088c46456',
});

export default newsApi;
