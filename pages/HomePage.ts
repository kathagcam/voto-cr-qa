import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  // Private locators to enforce encapsulation
  private readonly searchInput = this.page.getByLabel('Tu pregunta:');  

  async askQuestion(text: string) {
    const input = this.page.locator('#text_input_1');
    await input.waitFor({ state: 'visible', timeout: 10000 });
    await input.fill(text);
    await this.page.keyboard.press('Enter');
  }

}