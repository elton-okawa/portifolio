export function styleOrEmpty(
  styles: Record<string, string>,
  baseName: string,
  value?: string | number
) {
  return value ? styles[`${baseName}-${value}`] : '';
}
