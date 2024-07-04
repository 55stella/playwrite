import { Page, expect } from "@playwright/test";
import pageBase from "./PageBase.page";

export class ProductPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  selectAllItemsSortItemsByNameAsc = async () => {
    await pageBase.selectOption(this.page, ".product_sort_container", "az");
  };

  addAllItemsNameDesc = async () => {
    await pageBase.selectOption(this.page, ".product_sort_container", "za");
  };

  extractTextFromWebElements = async () => {
    const itemElements = await this.page.$$(".inventory_item_name");
    const itemNames: string[] = [];
    for (const item of itemElements) {
      const name = await item.innerText();
      itemNames.push(name);
    }
    return itemNames;
  };
}
