import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
// Delete() {
// throw new Error('Method not implemented.');
// }

  @Input() item: string | undefined
  
  //@input() - decorator , used to hold data from the parent(dashboard)
  // item will sent to parent (property binding [item]="acno") -dashboard html 
  @Output() OnCancel = new EventEmitter(); //user defined event
  @Output() onDelete = new EventEmitter(); //user defined event

  constructor() { }

  ngOnInit(): void {
  }
  Cancel(){
    this.OnCancel.emit();
  }
  delete() {
    this.onDelete.emit(this.item); // for delete the acno 
  }
}
