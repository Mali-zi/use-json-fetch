// import { error } from 'console';
import { useEffect, useState } from 'react';

export function useJsonFetch(url: string, opts: string) {
  const [data, setData] = useState('init');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let controller = new AbortController();
    let result = '';
    setLoading(true);
    fetch(url, {
      method: opts,
      signal: controller.signal,
    })
      .then(response => {
        const contentType = response.headers.get('content-type');

        if(!response.ok){
          try {
            throw new Error(`HTTP error, status = ${response.status}`); // Ошибка сети
          } catch (e) {
            result = (e as Error).message;
            setError(result)
          }

        } else {

          if (!contentType || !contentType.includes('application/json')) {
            try {
              throw new TypeError(`TypeError, status = ${response.status}`); // Получен не JSON
            } catch (e) {
              result = (e as Error).message;
              setError(result)
            }

          } else {
            return response.json()
          }
        }
      })
      .then(textData => setData(textData))
      .catch(e => {
        result = (e as Error).message;
        setError(result);
      })
      .finally(() => {
        setLoading(false);
        controller.abort();
      });
    }, []);
  
  const inputProps = {data, loading, error};

  return inputProps;
}
