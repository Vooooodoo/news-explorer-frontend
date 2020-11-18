export const BASE_URL = 'https://api.vdnews.students.nomoreparties.co';

export function register(email, password, name) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  })

    .then((res) => res.json())

    .then((res) => res);
}

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })

    .then((res) => res.json())

    .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    });
}

//* функция для проверки токенов авторизованных пользователей, которые вернулись в приложение
export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 400) {
          throw new Error('Токен не передан или передан не в том формате');
        }
        if (res.status === 401) {
          throw new Error('Переданный токен некорректен');
        }
      } catch (error) {
        return error;
      }
    })

    .then((data) => data);
}
