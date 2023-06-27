import { useJsonFetch } from '../hooks/useJsonFetch';
import { Props } from '../models/index';

export default function RecpComp({url, opts}: Props) {
  const [data, loading, error] = useJsonFetch(url, opts);
  const newData = JSON.stringify(data);

  return (
    <div>
      <h3>url: {url}</h3>
      {loading && <p>Loading...</p>}
      {newData && <p>data : {newData}</p>}
      {error && <p>{error}</p>}
    </div>
  )
}