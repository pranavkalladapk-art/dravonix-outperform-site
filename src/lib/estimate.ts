export function formatEstimateRange(min: number, max: number): string {
  return `${min.toLocaleString()} – ${max.toLocaleString()}`;
}
