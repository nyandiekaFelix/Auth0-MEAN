export class Meetup {
    constructor(
        public title: string,
        public location: string,
        public startDate: Date,
        public endDate: Date,
        public description: string,
        public _id?: string
    ) {}
}
