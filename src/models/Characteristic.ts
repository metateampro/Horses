class Characteristic {
  public CharacteristicId: number;
  public Title: string;

  constructor(public characteristicid: number, public title: string) {
    this.CharacteristicId = characteristicid;
    this.Title = title;
  }
}
