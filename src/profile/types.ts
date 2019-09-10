export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface EventH {
  eventid: number;
  title: string;
  judges?: number;
  eventdate?: Date;
  adress?: string;

  hclasses?: Hclass[];
  characteristics?: Characteristic[];
  horses?: Horse[];
}

export interface Hclass {
  classid: number;
  title: string;
}

export interface Horse {
  horseid: number;
  title: string;
  number: number | null;
  age: string;
  hclassid: Hclass;
}

export interface Characteristic {
  characteristicid: number;
  title: string;
}

export interface Form {
  formname: string;
  formtitle: string;
}

export interface ProfileState {
  sideBarOpen: boolean;
  events?: EventH[];
  horses?: Horse[];
  characteristics?: Characteristic[];
  hclassess?: Hclass[];
  currentEvent: EventH;
  forms: Form[];
}

