import { useJsonFetch } from '../hooks/useJsonFetch';
import { Props } from '../models/index';

export default function RecpComp({url, metod}: Props) {
  const {data, loading, error} = useJsonFetch(url, metod);
  console.log(data);
  const newData = JSON.stringify(data);

  return (
    <div>
      <h3>url: {url}</h3>
      {loading && <div>Loading...</div>}
      {newData && <p>data : {newData}</p>}
      { error && <p>{error}</p> }
    </div>
  )
}