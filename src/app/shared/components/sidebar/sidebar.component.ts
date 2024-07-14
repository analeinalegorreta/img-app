import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gitsService: GifsService) { }

  get tags() {
    return this.gitsService.tagHistory;
  }

  searchTag(index: string) {
    // debugger
    this.gitsService.searchTag(index);

  }

}
