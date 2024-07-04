import { chromium, expect, Page, test } from "@playwright/test";
import { ProductPage } from "../page/ProductPage.page";
import { LoginPage } from "../page/login.page";

test.describe("Products Sorting Test", () => {
  let page: Page;
  let productPage: ProductPage;
  let loginPage: LoginPage;
  const USERNAME = "standard_user";
  const PASSWORD = "secret_sauce";

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    productPage = new ProductPage(page);
    loginPage = new LoginPage(page);
  });
  test.beforeEach(async () => {
    await loginPage.launchURL();
    await loginPage.loginUser(USERNAME, PASSWORD);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test("Verify that the user can login into the application", async () => {
    await expect(await loginPage.page).toHaveTitle("Swag Labs");
  });
  test("Sort Displayed products  by name in Ascending Order", async () => {
    await productPage.selectAllItemsSortItemsByNameAsc();
    const allNames = await productPage.extractTextFromWebElements();
    const sortedNames = [...allNames].sort();
    expect(allNames).toEqual(sortedNames);
  });

  test("Sort Displayed products  by name in Descending Order", async () => {
    await productPage.addAllItemsNameDesc();
    const allNames = await productPage.extractTextFromWebElements();
    const sortedNames = [...allNames].sort().reverse();
    expect(allNames).toEqual(sortedNames);
  });
});
