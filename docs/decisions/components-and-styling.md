## Problem

Frequently I need to customize the component and I don't have a good way to do it which basically ends up creating a `div` wrapper:

```tsx
<div className="wrapper">
  /* adds margin top */
  <Container>...</Container>
</div>
```

One solution that I used with `Typography` was an approach like `utility css`, basically a string props that adds a new class name to the component:
I didn't like too much it because for every option I need to map to className, it doesn't seem good

```tsx
<Typography align='center'> /* adds a CSS class with align-text: center */
```

## Alternatives

### 1. Wrapper component that applies it as container

```tsx
function WrapperComponent({ className, children }) {
  return <div className={className}>{children}</div>;
}
```

- As long as the component uses the wrapper, the feature will be there
- Every component would need an extra `div` wrapping them

### 2. Every component receives a `className` parameter and use them

```tsx
interface BaseProps {
  className: string,
}

function Button({ className }) {
  return <button className={<other classNames> + className}>Button</button>
}
```

- No extra div
- Logic would need to be repeated

### Conclusion

Alternative 2. was implemented in order to avoid `div` to simply add style
