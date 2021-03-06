export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: {
    //alanin bos olabilecegini ve bir object oldugunu belirtir
    address: string;
    city: string;
    country: string;
  };
  onlineUrl?: string;
  sessions: ISession[];
}

export interface ISession {
  id: number;
  name: string;
  presenter: string;
  duration: number;
  level: string;
  abstract: string;
  voters: string[];
}
