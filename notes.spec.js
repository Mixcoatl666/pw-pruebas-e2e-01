import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:9000/#/')
})

test.describe('Test Form', () => {
    test('Devolviendo mensajes', async ({ page }) => { 
        await page
            .getByPlaceholder('Comienza a escribir o ten una nueva idea...')
            .fill('Este es un test para crear notas');
        
        // TODO: Queda pendiente como funciona para rellenar botones
        // await page.getByRole('button', { name: /submit/i }).click();
    })
})
