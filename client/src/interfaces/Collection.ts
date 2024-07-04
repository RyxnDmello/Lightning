import PROTOCOL from "../types/Protocol";

export interface Collection {
  _id: string;
  name: string;
  requests: Request[];
}

export interface Request {
  _id: string;
  url: string;
  protocol: PROTOCOL;
  name: string;
}
