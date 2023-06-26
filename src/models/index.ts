export interface User {
  id: number,
  name: string, 
}

export interface UserDetails {
  id: number,
  name: string, 
  avatar: string, 
  details: {
    city: string, 
    company: string, 
    position: string, 
  }
}

export interface ListProps {
  list: User[], 
  setId: (val: number) => void, 
}

export interface DetailsProps {
  id: number,
}

export interface Options {
  
}