import { WindowLocation } from '@reach/router';

export function matchesRoute(location: WindowLocation, path: string): boolean {
  if (!location) return false;
  const currentPath = location.pathname;
  if (!currentPath || !path) return false;
  if (currentPath === path) return true;

  const currentPathWithoutTrailingSlash = currentPath.replace(/\/$/, '');
  const pathWithoutTrailingSlash = path.replace(/\/$/, '');

  if (currentPathWithoutTrailingSlash === pathWithoutTrailingSlash) return true;

  return false;
}
