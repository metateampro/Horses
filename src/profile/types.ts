export interface EventCharacteristic {
  eventid: number;
  characteristicid: number;
}
export interface EventHclass {
  eventid: number;
  hclassid: number;
}
export interface EventHorse {
  eventid: number;
  horseid: number;
}
export interface EventH {
  eventid: number;
  title: string;
  judges?: number;
  eventdate?: Date | string;
  adress?: string;

  hclasses?: Hclass[];
  characteristics?: Characteristic[];
  horses?: Horse[];

  eventcharacteristic?: EventCharacteristic[];
  eventhclass?: EventHclass[];
  eventhorse?: EventHorse[];
}

export interface Hclass {
  hclassid: number;
  title: string;
}

export interface Horse {
  horseid: number;
  title: string;
  number?: number;
  age: number;
  hclass?: Hclass;
  hclassid?: number;
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
  currentEvent?: EventH;
  forms: Form[];
}

