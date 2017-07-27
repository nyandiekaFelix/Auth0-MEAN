import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-meetup',
    templateUrl: './meetup.component.html',
    styleUrls: ['./meetup.component.css']
})
export class MeetupComponent implements OnInit {
    pageTitle = 'Meetup';

    constructor(private title: Title) { }

    ngOnInit() {
        this.title.setTitle(this.pageTitle);
        
    }

}
