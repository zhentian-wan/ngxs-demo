import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {AddAnimal, RemoveAnimal} from './animals.action';
import {ZooService} from './zoo.service';
import {SelectState} from './select.state';
import {withLatestFrom, map} from 'rxjs/operators';
import {tap} from 'rxjs/internal/operators';

export interface ZooStateModel {
  animals: string[];
  loading: boolean;
}


@State<ZooStateModel>({
  name: 'zoo',
  defaults: {
    animals: [],
    loading: false
  }
})
export class ZooState {

  constructor(private zooService: ZooService, private store: Store) {
  }


  @Selector()
  static getAllAnimals(state: ZooStateModel) {
    return state.animals;
  }

  @Selector()
  static isLoading(state: ZooStateModel) {
    return state.loading;
  }

  @Action(AddAnimal)
  addAnimal({getState, setState, patchState, dispatch}: StateContext<ZooStateModel>, {payload}: AddAnimal) {
    const currentId$ = this.store.select(SelectState.getSelectedId);

    currentId$
      .pipe(
        tap((id) => {
          console.log('id', id);
          const state = getState();
          setState({
            animals: [...state.animals, payload],
            loading: true
          });
          this.zooService.addAnimal(payload)
            .then(() => {
              patchState({
                loading: false
              });
            })
            .catch((res) => {
              const newState = getState();
              setState({
                animals: newState.animals.filter(name => name !== payload),
                loading: false
              });
            });
        })
      ).subscribe();


  }


  @Action(RemoveAnimal)
  removeAnimal({getState, setState}, {payload}: RemoveAnimal) {
    const state = getState();
    setState({
      animals: state.animals.filter(name => name !== payload)
    });
  }
}
