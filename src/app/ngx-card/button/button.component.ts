import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input()
  type:string='default'
  @Input()name:string='Default'

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(event:any){
    console.log({event})
    alert(event.name)
  }

}
