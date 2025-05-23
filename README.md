# 🧪 Prueba Técnica - Saucedemo UI Testing con Playwright

Este repositorio contiene una prueba técnica de automatización de UI utilizando [Playwright](https://playwright.dev/) sobre el sitio [Saucedemo](https://www.saucedemo.com/).

---

## 📋 Objetivo de la prueba

Automatizar el siguiente flujo de usuario:

1. Iniciar sesión en el sitio usando credenciales válidas.
2. Verificar que el login fue exitoso (por ejemplo, asegurándose de que aparece la página de productos).
3. Cerrar sesión desde el menú.
4. Verificar que fue redirigido nuevamente al formulario de login.

---

## 🛠️ Tecnologías utilizadas

- [Playwright](https://playwright.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv) para manejo de variables de entorno

---

## ⚙️ Configuración del proyecto

### 1. IDE que se recomienda utilizar es:
[Visual Studio Code](https://code.visualstudio.com/)

### 2. Instalar Node.js:
[Node.js](https://nodejs.org/)

### 3. Para una mejor integración se recomienda en Visual Studio Code se recomienda instalar las siguientes extensiones:
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Playwright Test Snippets](https://marketplace.visualstudio.com/items?itemName=mskelton.playwright-test-snippets)

### 4. Clonar el repositorio

```bash
git clone https://github.com/juedsay/prueba-saucedemo.git
cd prueba-saucedemo
```

### 5. Instalar Dependencias
```bash
npm install
```
## Configuración del Entorno:
### 1. Archivos Requeridos:
En la raíz del proyecto se deberán crear los siguientes archivos:
- `.env`
```bash
PASSWORD=secret_sauce
```
- `users.json`
```bash
[
  "standard_user",
  "locked_out_user",
  "problem_user",
  "performance_glitch_user",
  "error_user",
  "visual_user"
]
```

## 🚀 Como ejecutar los tests:
* Ejecutar en modo headless (Configuración por defecto de Playwright)
```bash
npx playwright test
```
* Ejecutar en modo headed (Navegador visible)
```bash
npx playwright test --headed
```
* Ejecutar test incorporando [Trace Viewer](https://playwright.dev/docs/trace-viewer) para el reporte
```bash
npx playwright test --trace on
```
* Visualizar el reporte HTML
```bash
npx playwright show-report
```
###🔧 Configuración de Playwright
El archivo playwright.config.ts incluye las siguientes configuraciones:
* baseURL: configurado como https://www.saucedemo.com/
* trace: 'on-first-retry' – Captura trazas solo si el test falla al primer intento
* video: 'retain-on-failure' – Graba video únicamente en caso de fallos
* screenshot: 'only-on-failure' – Toma capturas de pantalla solo si falla un test

### 🌐 Navegadores Configurados
Actualmente las pruebas están habilitadas solo para Chromium (Chrome)
Si desea habilitar otros navegadores como `firefox` o `webkit`, simplemente se tiene que descomentar las secciones correspondientes en el archivo `playwright.config.ts`:
```ts
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  // {
  //   name: 'firefox',
  //   use: { ...devices['Desktop Firefox'] },
  // },
  // {
  //   name: 'webkit',
  //   use: { ...devices['Desktop Safari'] },
  // },
]
```
### 🔐 Manejo de datos sensibles
* La contraseña de login se gestiona con variables de entorno mediante la librería `dotenv`
* Los nombres de usuarios están almacenados en un archivo externo `users.json` para facilitar su reutilización y mantener el código limpio.
* Ambos archivos (`.env` y `users.json`) están ignorados en `.gitignore`, pero se incluyen versiones de ejemplo (`.env.example`, `users.example.json`) para facilitar la configuración local.

### 👤 Autor

**Julian Simon**

* Website: ...
* Twitter: [@juedsaytv](https://x.com/juedsaytv)
* Github: [@juedsay](https://github.com/juedsay)
* LinkedIn: [@juedsay](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/juedsay\/)

## 🤝 Contribuciones
Las contribuciones, reportes de errores y solicitudes de nuevas funcionalidades son bienvenidas. 
No dudes en revisar la [página de issues](https://github.com/juedsay/prueba-saucedemo/issues). También puedes echarle un vistazo a la [guía de contribución](https://github.com/juedsay/prueba-saucedemo).

## Muestra tu apoyo
Dale una ⭐️ si este proyecto te fue útil!

## 📝 Licencia
Copyright © 2025 [Julian Simon](https://github.com/juedsay).
Este proyecto está licenciado bajo la licencia [MIT](https://github.com/juedsay/prueba-saucedemo/blob/main/LICENSE.md).

---
# `English Version`:

# 🧪 Technical Test - Saucedemo UI Testing with Playwright

This repository contains a UI automation technical test using [Playwright](https://playwright.dev/) on the [Saucedemo](https://www.saucedemo.com/) site.

---

## 📋 Test Objective

Automate the following user flow:

1. Log in to the site using valid credentials.
2. Verify that the login was successful (e.g., by checking that the products page appears).
3. Log out from the menu.
4. Verify that the user is redirected back to the login form.

---

## 🛠️ Technologies Used

- [Playwright](https://playwright.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv) for environment variable management

---

## ⚙️ Project Setup

### 1. Recommended IDE:
[Visual Studio Code](https://code.visualstudio.com/)

### 2. Install Node.js:
[Node.js](https://nodejs.org/)

### 3. For better integration in Visual Studio Code, it is recommended to install the following extensions:
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Playwright Test Snippets](https://marketplace.visualstudio.com/items?itemName=mskelton.playwright-test-snippets)

### 4. Clone the repository

```bash
git clone https://github.com/juedsay/prueba-saucedemo.git
cd prueba-saucedemo
```

### 5. Install dependencies
```bash
npm install
```
## 💻Environment Configuration:
### 1. Required Files:
The following files must be created in the root of the project:
- `.env`
```bash
PASSWORD=secret_sauce
```
- `users.json`
```bash
[
  "standard_user",
  "locked_out_user",
  "problem_user",
  "performance_glitch_user",
  "error_user",
  "visual_user"
]
```

## 🚀 How to run the tests:
* Run in headless mode (default Playwright configuration)
```bash
npx playwright test
```
* Run in headed mode (visible browser)
```bash
npx playwright test --headed
```
* Run test incorporating [Trace Viewer](https://playwright.dev/docs/trace-viewer) for reporting
```bash
npx playwright test --trace on
```
* View the HTML report
```bash
npx playwright show-report
```
###🔧 Playwright Configuration
The `playwright.config.ts` file includes the following settings:
* `baseURL`: set to https://www.saucedemo.com/
* `trace: 'on-first-retry'` – Captures trace only if the test fails on the first attempt
* `video: 'retain-on-failure'` – Records video only in case of test failures
* `screenshot: 'only-on-failure'` – Takes screenshots only when a test fails

### 🌐 Configured Browsers
Currently, tests are enabled only for Chromium (Chrome).
If you want to enable other browsers such as `firefox` or `webkit`, simply uncomment the corresponding sections in the `playwright.config.ts` file:
```ts
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  // {
  //   name: 'firefox',
  //   use: { ...devices['Desktop Firefox'] },
  // },
  // {
  //   name: 'webkit',
  //   use: { ...devices['Desktop Safari'] },
  // },
]
```
### 🔐 Handling Sensitive Data
* The login password is managed using environment variables through the `dotenv` library.
* Usernames are stored in an external file (`users.json`) to make reuse easier and keep the code clean.
* Both files (`.env` and `users.json`) are ignored by `.gitignore`, but example versions (`.env.example`, `users.example.json`) are included to make local setup easier.

### 👤 Author

**Julian Simon**

* Website: ...
* Twitter: [@juedsaytv](https://x.com/juedsaytv)
* Github: [@juedsay](https://github.com/juedsay)
* LinkedIn: [@juedsay](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/juedsay\/)

## 🤝 Contributing
Contributions, issues and feature requests are welcome.
Feel free to check [issues page](https://github.com/juedsay/prueba-saucedemo/issues). You can also take a look at the [contributing guide](https://github.com/juedsay/prueba-saucedemo).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2025 [Julian Simon](https://github.com/juedsay).<br />
This project is [MIT](https://github.com/juedsay/prueba-saucedemo/blob/main/LICENSE.md) licensed.
