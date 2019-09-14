class EventH {
  public EventId: number;
  public Title: string;
  public Judges: number | null;
  public EventDate: Date;
  public Adress: string;

  public Hclasses: Hclass[];
  public Characteristics: Characteristic[];
  public Horses: Horse[];


  constructor(public eventid: number, public title: string, public judges: number | null, public eventdate: Date, public adress: string) {
    this.EventId = eventid;
    this.Title = title;
    this.Judges = judges;
    this.EventDate = eventdate;
    this.Adress = adress;

    this.Hclasses = [];
    this.Characteristics = [];
    this.Horses = [];
  }
}
