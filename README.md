# 🧱 Angular + Nx Micro Frontends Starter

Este repositorio contiene una configuración base para trabajar con **Micro Frontends en Angular** usando **Nx**. Incluye:

- ✅ Nx Monorepo
- ✅ 1 Shell (host)
- ✅ 2 Micro Frontends (apps)
- ✅ Configuración con `Module Federation`

---

## 🧰 Tecnologías

- [Angular](https://angular.io/)
- [Nx](https://nx.dev/)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Cómo iniciar este repositorio desde cero

Sigue estos pasos si quieres crear este setup desde cero:

### 1. Crear el Workspace con Nx y Angular

```bash
npx create-nx-workspace@latest mfe-workspace --preset=angular
```

### 2. Instalar soporte para Angular y MFE

```bash
npm install --save-dev @nx/angular
npm install
```

### 3. Crear la app Shell

```bash
npx nx generate @nx/angular:host shell --remotes=app1,app2 --routing --style=scss
```

### 4. Levanta todo el entorno

```bash
npx nx run-many --target=serve-mfe --projects=shell,app1,app2 --parallel
```

## Otros Scripts

```bash
# Levantar el shell + remotes
npm run dev

# Ver todas las apps
npx nx graph

# Ver el preview de producción
nx build shell
```

