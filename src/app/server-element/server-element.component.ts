import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,OnChanges,AfterViewInit,AfterContentInit,AfterContentChecked{
  
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading',{static:true}) header: ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;
  constructor(){
    console.log('Constructor called')
  }
  ngAfterContentInit(): void {
    console.log('Content of para after content init '+this.paragraph.nativeElement.textContent)
  }
  ngAfterContentChecked(): void {
    console.log('Content of para after content checked'+this.paragraph.nativeElement.textContent)
  }
  ngAfterViewInit(): void {
    console.log('Text Content '+this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('On Changes called')
    console.log(changes)

  }

  ngOnInit(): void {
    console.log('On init called')
    console.log('Text Content '+this.header.nativeElement.textContent);
    console.log('Content of para '+this.paragraph.nativeElement.textContent)
    //throw new Error('Method not implemented.');
  }


  

}
