export function mergeClassNames(...classNames: string[]): string {
  return classNames.filter((name) => !!name).join(' ');
}
