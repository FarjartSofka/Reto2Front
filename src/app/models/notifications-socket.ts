export interface NotificationsSocket {
  distancia:         number;
  carrilId:          ID;
  juegoId:           ID;
  when:              string;
  uuid:              string;
  type:              string;
  aggregateRootId:   string;
  aggregateParentId: string;
  aggregate:         string;
  versionType:       number;
}

export interface ID {
  uuid: string;
}
