import { test, expect } from '@playwright/test';
import users from '../users.json' assert { type: 'json' };
import 'dotenv/config';

// Validación de la variable de entorno PASSWORD
const password = process.env.PASSWORD;
if (!password) {
  throw new Error('La variable de entorno PASSWORD no está definida');
}

test.describe('Login y Logout SauceDemo', () => {
  // Antes de cada test, navega a la página base (baseURL configurado en playwright.config.ts)
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  // Ejecuta el test para cada usuario definido en users.json
  users.forEach((username) => {
    test(`Login y Logout con usuario: ${username}`, async ({ page }) => {
      //Ingreso el usuario y la contraseña, y luego hago click en el boton de login
      await page.locator('[data-test="username"]').fill(username);
      await page.locator('[data-test="password"]').fill(password);
      await page.locator('[data-test="login-button"]').click();

      if (username === 'locked_out_user') {
        // Verifica que se muestre el mensaje de error para usuario bloqueado
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      } else {
        // Verifica login exitoso
        await expect(page).toHaveURL('/inventory.html');
        await expect(page.locator('[data-test="title"]')).toHaveText('Products');
        await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();

        if (username === 'performance_glitch_user') {
          // Medición del tiempo de logout para performance_glitch_user
          const start = Date.now();
          await page.getByRole('button', { name: 'Open Menu' }).click();
          await page.locator('[data-test="logout-sidebar-link"]').click();
          // Espera a que el contenedor de login sea visible para asegurar que terminó el logout
          await expect(page.locator('#login_button_container')).toBeVisible();
          const duration = Date.now() - start;
          console.log(`Tiempo de logout para performance_glitch_user: ${duration} ms`);
          expect(duration).toBeLessThan(4000); // Assertion de performance
        } else {
          // Logout para otros usuarios
          await page.getByRole('button', { name: 'Open Menu' }).click();
          await page.locator('[data-test="logout-sidebar-link"]').click();
        }

        // Validaciones post-logout
        await expect(page).toHaveURL('/');
        await expect(page.locator('#login_button_container')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
      }
    });
  });
});