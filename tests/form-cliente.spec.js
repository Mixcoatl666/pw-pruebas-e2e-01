import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:9000/#/clientes')
})

test.describe('Formulario de clientes', () => {
  test('Abre el formulario y crea un cliente', async ({ page }) => {
    await expect(page.locator('.q-table')).toBeVisible()

    await page.getByRole('button', { name: 'Nuevo cliente' }).click()

    const clienteNombre = 'Prueba Cliente ' + Date.now()
    
    await page.getByLabel('Nombre').fill(clienteNombre)
    await page.getByLabel('Edad').fill('50')
    await page.getByLabel('Teléfono').fill('3216549870')

    const respuestaCrear = page.waitForResponse(
    (respuesta) =>
        respuesta.url().includes('/api/clientes') &&
        respuesta.request().method() === 'POST',
    )

    await page.getByRole('button', { name: 'Guardar' }).click()

    const respuesta = await respuestaCrear
    expect(respuesta.ok()).toBeTruthy()

    await expect(page.getByText('Cliente creado.')).toBeVisible()
    await expect(page.locator('tbody')).toBeVisible()
    await expect(page.locator('tbody').getByText(clienteNombre, { exact: true })).toBeVisible()
  })
})
