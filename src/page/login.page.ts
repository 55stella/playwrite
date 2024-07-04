import { Page, expect } from "@playwright/test";
import pageActions from "./PageBase.page";

export class LoginPage {
  public page: Page;
  private loginBtn: string;
  private username: string;
  private password: string;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = 'input[id="login-button"]';
    this.username = 'input[id="user-name"]';
    this.password = 'input[id="password"]';
  }

  async launchURL() {
    await pageActions.navigator(this.page, "https://www.saucedemo.com/");
  }

  async sendUsername(username: string) {
    await pageActions.fill(this.page, this.username, username);
  }
  async sendPassword(password: string) {
    await pageActions.fill(this.page, this.password, password);
  }
  async clickLoginBtn() {
    await pageActions.click(this.page, this.loginBtn);
  }

  async loginUser(username: string, password: string) {
    await this.sendUsername(username);
    await this.sendPassword(password);
    await this.clickLoginBtn();
  }
}
