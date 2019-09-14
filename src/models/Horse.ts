class Horse {
  public HorseId: number;
  public Title: string;
  public Number: number | null;
  public Age: string;
  public HclassId: Hclass;

  constructor(public horseid: number, public title: string, public _number: number, public age: string, public hclassId: Hclass) {
    this.HorseId = horseid;
    this.Title = title;
    this.Number = _number;
    this.Age = age;
    this.HclassId = hclassId;
  }
}
