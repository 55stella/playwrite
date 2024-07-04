import { Page } from "@playwright/test";

export default class PageBase {
  static async navigator(page: Page, url: string){
    try {
      await page.goto(url, { waitUntil: "commit" });
      await page.waitForLoadState("domcontentloaded");
    } catch (error) {
      console.error(`Error navigating to the URL: ${url}`, error);
    }
  }

  static async click(page: Page, locator: string){
    try {
      await page.click(locator);
    } catch (error) {
      console.error(
        `There is an error click on the element with this selector: ${locator}`,
        error
      );
    }
  }

  static async fill(page: Page, locator: string, text: string){
    try {
      await page.fill(locator, text);
    } catch (error) {
      console.error(
        `There is an error filling this element with this selector: ${locator}`,
        error
      );
    }
  }

  static async selectOption(
    page: Page,
    locator: string,
    textToSelect: string
  ) {
    try {
      await page.selectOption(locator, textToSelect);
    } catch (error) {
      console.error(`There is an error selecting an element with the value, ${textToSelect}`, error);
    }
  }

  
}
