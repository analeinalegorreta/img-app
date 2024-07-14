import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt: string = "";

  public hasLoad:boolean=false;


  ngOnInit(): void {
    if (!this.url)throw new Error('URL property is required');
  }

  onLoad(){

    console.log('image')
    this.hasLoad=true;
  }

}
