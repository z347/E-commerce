## Nx - documentations

- [next plugin](https://nx.dev/latest/react/guides/nextjs)
- [nest plugin](https://nx.dev/latest/angular/nest/overview)

---

<br>

## **Create the new workspace**

<br>

1. create new application

```bash
npx create-nx-workspace@latest <workspace name>
```

2. install nx cli global

```bash
npm i -g nx
```

3. check what we has

```bash
nx r client:serve
```

<br>

## **Add new application to the workspace**

<br>

1. install nest

```bash
npm i @nrwl/nest -D
```

2. add nest to the workspace

```bash
nx g @nrwl/nest:app api
```

<br>

## **USE - NX CLI**

<br>

1. run one app

```bash
LOGIC:      nx r <project name>:serve   ||    nx serve <project name>

EXAMPLE:    nx r client:serve           ||    nx serve client
```

2. prettier

```bash
nx format

nx format:check
```
