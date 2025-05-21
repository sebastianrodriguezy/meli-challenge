# 🚀 Checkout Review Step – MELI Challenge (POC)

Este proyecto es una prueba de concepto (POC) para un nuevo paso en el flujo de checkout, donde el usuario revisa y confirma su información antes de completar la compra.

Pequeña demo:

[![Ver demo]](https://www.loom.com/share/b1d12e2305464ce0aea07e378861f2de?sid=abbe1819-24c0-446d-b180-82a43203aaf0)

## 🧩 Objetivo

Evitar errores de datos en el proceso de compra permitiendo al usuario validar sus datos personales antes de la confirmación final.

## ⚙️ Tecnologías utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- [Zod](https://zod.dev/) – Validaciones en tiempo real
- Vite – Bundler rápido
- Zustand / Context API (opcional para estado global)

---

## 📦 Instalación

1. Cloná el repositorio o descomprimí el ZIP.
2. Instalá las dependencias:

```bash
npm install
```

3. Iniciá el servidor de desarrollo:

```bash
npm run dev
```

---

## 🏗️ Propuesta de arquitectura (resumen)

### 1. Arquitectura general

- **React + TypeScript** como stack principal.
- Componentes principales:
  - `ReviewStepPage`: página principal del paso.
  - `UserFieldsForm`: formulario con campos precargados.
  - `CaptchaWrapper`: verificación captcha simulada.
- Navegación con **React Router**.
- Validaciones con **Zod**.

### 2. Carga inicial y performance

- Simulación de carga de datos desde `meli-users`.
- Lazy load del captcha.
- Uso de `useMemo` / `useCallback` cuando aplique.

### 3. UX / UI

- Formulario precargado y editable.
- Validación en tiempo real sin bloqueo.
- Diseño responsive.
- Feedback visual en errores o cargas.

### 4. Internacionalización (i18n)

- Soporte por dominio:
  - `.com.br` → pt-BR
  - `.com.ar` → es-AR
- Usar `i18next` con namespaces (no implementado en POC).

### 5. No-JavaScript support (teórico)

- Posible fallback render desde Express con HTML puro.
- Uso de `<noscript>` para advertencia.

### 6. Redirección y token

- Redirección con `navigate()` usando `referrer` y `token` desde URL.
- Token simulado, validación esperada en backend.

### 7. Consideraciones finales

- Tests sugeridos: Jest + React Testing Library.
- Linting: ESLint + Prettier.
- Integración clara con `meli-users` y `meli-countries`.

---

## ✨ Vista rápida

- Página de revisión: `/`
- Paso siguiente simulado: `/next-step?referrer=/previous-step&token=abc123`

---

## 📁 Estructura del proyecto

```
src/
  components/
    ReviewStepPage.tsx
    UserInfoForm.tsx
    CaptchaWrapper.tsx
    SimulateNextStep.tsx
  data/
    user.ts
  hooks/
    useQueryParams.ts
  types/
    user.ts
  utils/
    validations.ts
  App.tsx
  main.tsx
  styles.css
```

---

## 📌 Nota

Este proyecto es una POC enfocada en arquitectura, rendimiento y experiencia de usuario. Algunas funcionalidades (como i18n o integración real con APIs) están esbozadas pero no implementadas completamente.

---
