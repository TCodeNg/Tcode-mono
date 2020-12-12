import { Injectable } from '@angular/core';
import { DataAction, StateRepository } from "@ngxs-labs/data/decorators";
import { NgxsDataRepository } from '@ngxs-labs/data/repositories';
import { NgxsOnInit, Selector, State } from '@ngxs/store';
import { AppStateModel } from './app.state.model';


@StateRepository()
@Injectable()
@State<AppStateModel>({
  name: 'app'
})
export class AppState extends NgxsDataRepository<AppStateModel> implements NgxsOnInit {

  @Selector()
  static getSidenavState(state: AppStateModel): boolean {
    return state.showSidenav;
  }

  ngxsOnInit() {}

  @DataAction() toggleSidenav(state) {
    const { patchState } = this.ctx;
    patchState({
      showSidenav: state
    })
  }
}