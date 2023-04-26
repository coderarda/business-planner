export class CalendarEvent {
	private _date: Date;
	private _desc: string;
	private _title: string;
	private _ID: number;

	constructor(
		eventDate: Date,
		eventTitle: string,
		eventDesc: string,
		eventID: number
	) {
		this._date = eventDate;
		this._ID = eventID;
		this._desc = eventDesc;
		this._title = eventTitle;
	}

	public get date(): Date {
		return this._date;
	}

	public set date(val: Date) {
		this._date = val;
	}

	public get id(): number {
		return this._ID;
	}

	public set id(i: number) {
		this._ID = i;
	}

	public get title(): string {
		return this._title;
	}

	public set title(val: string) {
		this._title = val;
	}

	public get description(): string {
		return this._desc;
	}

	public set description(val: string) {
		this._desc = val;
	}
}