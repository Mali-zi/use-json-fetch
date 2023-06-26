import { ListProps } from '../models/index';
import Button from 'react-bootstrap/Button';

/** 
 * Компонент List выводит список пользователей, загруженных с сервера.
 */
export default function List({setId, list}: ListProps): React.ReactElement{
  const newList = list.map(item => {
    return (
      <Button 
        key={item.id}
        as="li" 
        variant="outline-primary"
        className="list-group-item"
        style={{borderRadius: 0}}
        onClick={() => setId(item.id)}
      >
        {item.name}
      </Button>
    )
  });

  return (
    <ul 
      className="list-group list-group-flush border border-secondary-subtle" 
      style={{width: "18rem", borderRadius: 0}}
    >
      {newList}
    </ul>
  )
}