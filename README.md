# Portifolio

Ideas:

- ✨ Showcase some code
- 🧪 Experiment different strategies

## Quick Start

Install dependencies:

```
pnpm install
```

Run `storybook` to view components:

```
pnpm storybook
```

Run `nextjs` to view pages:

```
pnpm dev
```

## Problems to solve

### Components library and styling

Frequently I need to customize the component and I don't have a good way to do it which basically ends up creating a `div` wrapper:

```jsx
<div className="wrapper">
  {" "}
  /* adds margin top */
  <Container>...</Container>
</div>
```

One solution that I used with `Typography` was an approach like `utility css`, basically a string props that adds a new class name to the component:
I didn't like too much it because for every option I need to map to className, it doesn't seem good

```jsx
<Typography align='center'> /* adds a CSS class with align-text: center */
```
