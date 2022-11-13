import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input() cantidad!: number;
  @Input() max!: number;

  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
  }
  
  restarCantidad(): void{
    if(this.cantidad > 0){
        this.cantidad--;
        this.cantidadChange.emit(this.cantidad);
    }
  }

  sumarCantidad(): void{
    if(this.max > 0 && this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

}

