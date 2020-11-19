class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _fetch(endPoint, options) {
    //* если в опциях будет body, добавить свойство с преобразованием объекта JSON в строку,
    //* для будущей передачи на сервер
    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    options.headers = this._headers;

    //* метод fetch создаёт запрос на сервер и возвращает его ответ,
    //* вторым аргументом передадим объект опций
    return fetch(this._baseUrl + endPoint, options)
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
  get(endPoint) {
    return this._fetch(endPoint, {
      method: 'GET',
    });
  }

  //* метод для для отправки данных на сервер
  post(endPoint, body) {
    return this._fetch(endPoint, {
      method: 'POST',
      body,
    });
  }

  //* метод для удаления ресурса с сервера
  delete(endPoint) {
    return this._fetch(endPoint, {
      method: 'DELETE',
    });
  }

  changeArticleMarkStatus(endPoint, isArticleMarked) {
    return this._fetch(endPoint, {
      method: isArticleMarked ? 'DELETE' : 'POST',
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
