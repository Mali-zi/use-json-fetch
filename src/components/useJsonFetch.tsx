import { useEffect, useState } from 'react';

export function useJsonFetch(url, opts) {
  fetch('https://example.com/', { method: 'CONNECT' });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
    async function startFetching() {
      // let promise = new Promise(function(resolve, reject) {
      //   setLoading(true);
      //   let controller = new AbortController();
      //   let response = fetch(url, {
      //     signal: controller.signal
      //   });
      //   resolve(response => {

      //   });
      // });
      // // выполнится, когда промис завершится, независимо от того, успешно или нет
      // promise.finally(() => setLoading(false));

      // // resolve запустит первую функцию, переданную в .then
      // promise.then(
      //   result => result.json(), // читаем ответ в формате JSON
      //   error => alert(error) // не будет запущена
      // );


      const badUrl = "https://jsonplaceholder.typicode.com/posts1321654646186/";
      let controller = new AbortController();

      // let response = 
      await fetch(badUrl, {
        method: 'GET',
        signal: controller.signal,
      })
        .then(response => {
          const contentType = response.headers.get('content-type');
          if(!response.ok){
              throw new Error("I'm an error 200-299");
          } else{
            if (!contentType || !contentType.includes('application/json')) {
              throw new TypeError("Ой, мы не получили JSON!");
              } else {
                return response.json()
              }
          }
        })
        .then(data => console.log('Response Data', data))
        .then(() => setLoading(false))
        .catch(error => {console.log('ERROR', error)})


  //     let controller = new AbortController();
  //     let response = await fetch(url, {
  //       signal: controller.signal
  //     });
  //   if (response.ok) { // если HTTP-статус в диапазоне 200-299
  //     // получаем тело ответа (см. про этот метод ниже)
  //     let json = await response.json(); // читаем ответ в формате JSON
  //   } else {
  //     let error = response.status;
  //     alert("Ошибка HTTP: " + error);
  //   }
  // };

  } 

  startFetching();
  
  }, []);

  return {
    data() {
      console.log('✅ Data loaded.');
    },
    loading() {
      console.log('✅ Loading...');
    },
    error() {
      console.log('❌ Error.');
    }
  };
}
