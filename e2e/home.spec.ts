import { test, expect } from '../fixtures/baseTest';


test.describe('AI-Powered Electoral Analysis', () => {

  test('should accept a custom user question', async ({ homePage }) => {
    await homePage.navigateTo('/');
    
    const query = '¿Qué proponen sobre pensiones?';
    await homePage.askQuestion(query);
    
    // Ensure the input box contains exactly what we typed
    await expect(homePage.page.getByLabel('Tu pregunta:')).toHaveValue(query);
    await expect(homePage.page.getByText('Análisis de la IA:')).toBeVisible();
  });
});