export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface EventH {
  EventId: number;
  Title: string;
  Judges?: number;
  EventDate?: Date;
  Adress?: string;

  Hclasses?: Hclass[];
  Characteristics?: Characteristic[];
  Horses?: Horse[];
}

export interface Hclass {
  ClassId: number;
  Title: string;
}

export interface Horse {
  HorseId: number;
  Title: string;
  Number: number | null;
  Age: string;
  HclassId: Hclass;
}

export interface Characteristic {
  CharacteristicId: number;
  Title: string;
}

export interface ProfileState {
  sideBarOpen: boolean;
  events?: EventH[];
  horses?: Horse[];
  characteristics?: Characteristic[];
  hclassess?: Hclass[];
  currentEvent: EventH | null;
}

