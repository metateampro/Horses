class EventH{
	EventId: number;
	Title: string;
	Judges: number | null;
	EventDate: Date;
	Adress: string;

	Hclasses: Hclass[];
	Characteristics: Characteristic[];
	Horses: Horse[];


	constructor(public eventid: number, public title: string, public judges: number | null, public eventdate: Date, public adress: string){
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