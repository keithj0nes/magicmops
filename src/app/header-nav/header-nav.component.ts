import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
}
})
export class HeaderNavComponent implements OnInit {

    isScrolled = false;
    currPos: Number = 0;
    startPos: Number = 0;
    changePos: Number = 100;

    constructor() {}

    updateHeader(evt) {
        this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
        // console.log(evt.target.clientTop)
        if(this.currPos >= this.changePos ) {
            this.isScrolled = true;
        } else {
            this.isScrolled = false;
        }
    }

    ngOnInit() {
    }

}
