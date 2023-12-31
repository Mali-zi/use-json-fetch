# Кастомный хук useJsonFetch

Реализован кастомный хук useJsonFetch, который позволяет с помощью fetch осуществлять HTTP-запросы.

Использование этого хука должно выглядеть следующим образом:

const [data, loading, error] = useJsonFetch(url, opts);
где:

data — данные, полученные после response.json(), не Promise, а именно данные;
error — ошибка: ошибка сети, ошибка ответа, если код не 20x, ошибка парсинга, если пришёл не JSON;
loading — boolean флаг, сигнализирующий о том, что загрузка идёт.

Показано использование этого хука на примере трёх компонентов, каждый из которых делает запросы на следующие адреса:

GET http://localhost:7070/data — успешное получение данных;
GET http://localhost:7070/error — получение 500 ошибки;
GET http://localhost:7070/loading — индикатор загрузки.

Backend размещен в каталоге backend.

<img width="900" alt="use-effect-screenshot" src="https://github.com/Mali-zi/use-json-fetch/blob/master/img/screenshot.PNG">