import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:9000/#/')
})

test.describe('Funcionamiento básico', () => {
  test('Probar funcionamiento básico', async ({ page }) => {
        await page.getByRole('button', { name: 'Menu' }).click();
        await page.getByRole('button', { name: 'Menu' }).click();
        await page.getByRole('link', { name: 'Documentación Quasar Framework' }).click();
        await page.getByRole('link', { name: 'CRUD CRUD Clientes' }).click();
        await page.getByRole('link', { name: 'Documentación Quasar Framework' }).click();
        await page.getByRole('link', { name: 'Inicio Bienvenido' }).click();
        await page.getByRole('button', { name: 'Menu' }).click();
        await page.getByRole('button', { name: 'Menu' }).click();
        await page.getByRole('button', { name: 'Menu' }).click();
        await page.getByRole('button', { name: 'Menu' }).click();
        await page.getByRole('link', { name: 'Documentación Quasar Framework' }).click();
        await page.getByRole('link', { name: 'CRUD CRUD Clientes' }).click();
        await page.getByRole('link', { name: 'Inicio Bienvenido' }).click();
        await page.getByRole('link', { name: 'Documentación Quasar Framework' }).click();
  })
})
