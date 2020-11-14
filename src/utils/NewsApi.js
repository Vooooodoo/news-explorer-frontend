class NewsApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _fetch(options) {
    //* если в опциях будет body, добавить свойство с преобразованием объекта JSON в строку,
    //* для будущей передачи на сервер
    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    options.headers = this._headers;

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
  get() {
    return this._fetch({
      method: 'GET',
    });
  }
}

// API INSTANCE
const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=70091bdd11724ad58795297088c46456',
  headers: {
    authorization: '70091bdd11724ad58795297088c46456',
    'Content-Type': 'application/json'
  },
});

export default newsApi;
