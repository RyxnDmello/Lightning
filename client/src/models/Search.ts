import PROTOCOL from "../types/Protocol";

type _ = "ALL" | PROTOCOL;

export const protocols: _[] = ["ALL", "GET", "POST", "PUT", "PATCH", "DELETE"];
