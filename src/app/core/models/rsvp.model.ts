export class Rsvp {
    constructor(
        public userId: string,
        public name: string,
        public meetupId: string,
        public attending: boolean,
        public guests: number,
        public comments?: string,
        public _id?: string
    ) {}
}
