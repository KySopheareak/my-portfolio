import { ViewportScroller } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home-component',
  imports: [
    RouterModule
  ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent implements OnInit {

  constructor(private _cd: ChangeDetectorRef, private router: Router, private scroller: ViewportScroller) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      const fragment = this.router.parseUrl(this.router.url).fragment;
      if (fragment) {
        this.scroller.scrollToAnchor(fragment);
      }
    });
  }

  ngOnInit(): void {
    this.loadDescription();
    this.loadPicture();
  }

  private async loadDescription() {
    const items = document.querySelectorAll('.fade-item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 500);
    });
    this._cd.detectChanges();
  }

  private async loadPicture() {
    const flipItems = document.querySelectorAll(".flip-animate");
    flipItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 800);
    });
    this._cd.detectChanges();
  }
}
