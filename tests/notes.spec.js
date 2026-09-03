import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:9000/#/')
})

test.describe('Test para notas', () => {
    test('Devolviendo mensajes', async ({ page }) => { 
        const nota = 'Nota de prueba 002.\nHola, somos amigos nuevamente.'

        await page.goto('http://localhost:9000/#/');
        await page.getByRole('textbox').click();
        await page.getByRole('textbox').fill(nota);
        await page.getByRole('button', { name: 'Save' }).click();

        const tarjeta = page.locator('.note-card').last();
        await expect(tarjeta).toBeVisible();
        await expect(tarjeta).toContainText('Nota de prueba 002.');
        await expect(tarjeta).toContainText('Hola, somos amigos nuevamente.');
    })
})
