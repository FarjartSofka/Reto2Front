export interface ResultadoCarrera {
  podio: Podio;
  when: string;
  uuid: string;
  type: string;
  aggregateRootId: string;
  aggregateParentId?: any;
  aggregate: string;
  versionType: number;
}


export interface Nombre {
  value: string;
}

export interface Color {
  value: string;
}

export interface EntityId {
  uuid: string;
}

export interface PrimerLugar {
  nombre: Nombre;
  color: Color;
  puntos: number;
  entityId: EntityId;
}

export interface Nombre2 {
  value: string;
}

export interface Color2 {
  value: string;
}

export interface EntityId2 {
  uuid: string;
}

export interface SegundoLugar {
  nombre: Nombre2;
  color: Color2;
  puntos: number;
  entityId: EntityId2;
}

export interface Nombre3 {
  value: string;
}

export interface Color3 {
  value: string;
}

export interface EntityId3 {
  uuid: string;
}

export interface TercerLugar {
  nombre: Nombre3;
  color: Color3;
  puntos: number;
  entityId: EntityId3;
}

export interface Podio {
  primerLugar: PrimerLugar;
  segundoLugar: SegundoLugar;
  tercerLugar: TercerLugar;
}

export interface RootObject {
  podio: Podio;
  when: string;
  uuid: string;
  type: string;
  aggregateRootId: string;
  aggregateParentId?: any;
  aggregate: string;
  versionType: number;
}

