import {Action, Selector, State} from '@ngxs/store';

interface SelectStateModel {
  id: number;
}

export class SetSelected {
  static readonly type = '[Select] Set Selected';
  constructor(public payload: number) {}
}

@State<SelectStateModel>({
  name: 'selected',
  defaults: {
    id: null
  }
})
export class SelectState {

  @Action(SetSelected)
  setSelected({patchState}, {payload}: SetSelected) {
    patchState({
      id: payload
    });
  }

  @Selector()
  static getSelectedId(state: SelectStateModel) {
    return state.id;
  }
}
