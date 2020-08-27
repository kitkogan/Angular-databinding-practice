import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngONChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnINit called!');
    console.log('Text Content' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngdocheck called');
  }

  ngAfterContentInit() {
    console.log('ng aftercontent called');
  }

  ngAfterContentChecked() {
    console.log('after content checked called');
  }

  ngAfterViewInit() {
    console.log('ng after view init checked called');
    console.log('Text Content' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ng afterviewchecked called');
  }

  ngOnDestroy() {
    console.log('ngondestroy called');
  }
}
