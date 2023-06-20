import { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';

export function Provider(props: { children: ReactNode }) {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
}
