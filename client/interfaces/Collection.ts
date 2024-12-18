export type PROTOCOL = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export default interface Collection {
  id: string;
  name: string;
  requests: Request[];
}

export interface Request {
  id: string;
  name: string;
  url: string;
  protocol: PROTOCOL;
}
