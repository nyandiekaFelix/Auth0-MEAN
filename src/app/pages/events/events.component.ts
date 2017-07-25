import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
    pageTitle = 'Events';

    constructor(private title: Title) { }

    ngOnInit() {
        this.title.setTitle(this.pageTitle);
        
    }

}
