import { Component, ViewChild, ElementRef   } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {


@ViewChild('txtTagInput')
public tagInput!: ElementRef<HTMLInputElement>;

constructor(private gitsService:GifsService){}

  searchTag() {
    const newTag=this.tagInput.nativeElement.value;
    this.gitsService.searchTag(newTag);
    this.tagInput.nativeElement.value='';
  }
}
