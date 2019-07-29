import { action, observable, reaction } from "mobx";

export class CommonStore {
  @observable public appLoaded: boolean = false;

  @observable public token: string = window.localStorage.getItem("token") || "";

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItem("token", token);
        }
      }
    );
  }

  @action public setToken(token: string) {
    this.token = token;
  }
  @action public setAppLoaded() {
    this.appLoaded = true;
  }
}

export default new CommonStore();
