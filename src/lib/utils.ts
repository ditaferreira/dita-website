/**
 * Get the correct image path with basePath prefix
 * @param path - The image path (e.g., '/image.jpg')
 * @returns The full path with basePath if configured
 */
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}