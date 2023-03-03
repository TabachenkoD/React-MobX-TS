import { makeObservable, observable, action, computed } from "mobx";
import axios from "axios";
import { IRootStore } from "./RootStore";

export interface IUserDetail {
  id: number;
  email: string;
}

export interface IUserData {
  email: string;
  username: string;
  password: string;
}

export interface IUserName {
  firstname: string;
  lastname: string;
}

export class LoginStore {
  loginToken: string = "";
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      loginToken: observable,
      fetchUserToken: action,
      getUserToken: computed,
    });
    this.rootStore = rootStore;
  }

  logout() {
    this.loginToken = "";
    /* this.userDetails = null; */
  }

  async fetchUserToken(userName: string, password: string) {
    const data = {
      username: userName,
      password: password,
    };

    const response = await axios.post(
      "https://fakestoreapi.com/auth/login",
      data
    );
    this.loginToken = response.data.token;
  }

  get getUserToken() {
    console.log(this.loginToken)
    return this.loginToken;
  }
}
