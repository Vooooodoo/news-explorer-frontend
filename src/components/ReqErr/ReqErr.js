import React from 'react';
import Preloader from '../Preloader/Preloader';

function ReqErr() {
  return (
    <Preloader
      subTitle="Во&nbsp;время запроса произошла ошибка. Возможно, проблема с&nbsp;соединением или сервер недоступен. Подождите немного и&nbsp;попробуйте ещё раз."
    />
  );
}

export default ReqErr;
