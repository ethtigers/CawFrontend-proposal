
export { default as NavSectionVertical } from './vertical';

export function isExternalLink(path: string) {
  return path?.includes('http');
}

export function getActive(path: string, pathname: string, asPath: string) {
  return pathname.includes(path) || asPath.includes(path);
}
