import { ButtonBase } from './ButtonBase';
import { Container } from './Container';

export function componentsOverrides() {
  return Object.assign(ButtonBase(), Container());
}
