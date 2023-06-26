import { DetailsProps } from '../models/index';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { UserDetails } from '../models/index';

/** 
 * Компонент Details отрисовывает детальную информацию о пользователе, 
 * принимает id пользователя в props.
 */
export default function Details({id}: DetailsProps): React.ReactElement {
  const initialInfo: UserDetails = {
    id: 0,
    name: "",
    avatar: "",
    details: {
        city: "",
        company: "",
        position: "",
    }
  };
  const [info, setInfo] = useState<UserDetails>(initialInfo);
  const [isLoading, setIsLoding] = useState(true);

  const userCard = () => {
    if (id === 0) {
      return <></>
    } else {
      if (isLoading) {
        return <h4 className='loading'>Loading...</h4>
      } else {
        return (
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={info.avatar + id} />
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Card.Title>{info.name}</Card.Title>
                  </ListGroup.Item>
                  <ListGroup.Item>City: {info.details.city}</ListGroup.Item>
                  <ListGroup.Item>Company: {info.details.company}</ListGroup.Item>
                  <ListGroup.Item>Position: {info.details.position}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </div>
        )
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    if (id !== 0) {
      axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`, {
        signal: controller.signal
      })
      .then((response) => {
        setInfo(response.data);
        setIsLoding(false);
      })
    };
    return () => {
      controller.abort()
    };
  }, [id]);

  return userCard()
}