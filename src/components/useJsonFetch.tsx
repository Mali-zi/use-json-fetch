import { error } from 'console';
import { useEffect, useState } from 'react';


export function useJsonFetch(url: string, opts: string) {
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newError, setNewError] = useState('');
  
  useEffect(() => {
  
    async function startFetching() {
      let controller = new AbortController();
      let result;

      await fetch(url, {
        method: opts,
        signal: controller.signal,
      })
        .then(response => {
          const contentType = response.headers.get('content-type');
          if(!response.ok){
            try {
              throw Error("I'm an error 200-299");
            } catch (e) {
              result = (e as Error).message;
              setNewError(result)
            }
          } else{
            if (!contentType || !contentType.includes('application/json')) {
              try {
                throw TypeError("Ой, мы не получили JSON!");
              } catch (e) {
                result = (e as Error).message;
                setNewError(result)
              }
            } else {
              return response.json()
          }}
        })
        .then(data => {
          console.log('Response Data', data);
          setNewData(data);
        })
        .then(() => {
          setLoading(false);
          controller.abort(); // прервать выполнение fetch
        })
        .catch(error => {
          console.log('ERROR', error);
          result = (error as Error).message;
          setNewError(result);
        });

      const inputProps = {newData, loading, newError};
      return inputProps
    };

  startFetching();
  
  }, []);

  return {

  };
}
