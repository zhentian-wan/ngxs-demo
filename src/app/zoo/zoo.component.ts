import {Component, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {AddAnimal, RemoveAnimal} from './animals.action';
import {ZooState} from './animals.state';
import {SetSelected} from './select.state';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {

  @ViewChild('name') name;

  @Select(ZooState.getAllAnimals) animals$: Observable<any>;
  @Select(ZooState.isLoading) loading$: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  addAnimal(name: string) {

    this.store.dispatch(
      new AddAnimal(name)
    ).subscribe(() => {
      this.name.nativeElement.value = '';
    });
  }

  removeAnimal(name: string) {
    this.store.dispatch(
      new RemoveAnimal(name)
    ).subscribe(() => {
      console.log('Removed!');
    });
  }

  selectId(number: number) {
    this.store.dispatch(
      new SetSelected(number)
    ).subscribe(() => {
      console.log('set selected', number);
    });
  }

}
