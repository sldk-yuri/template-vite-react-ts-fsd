import { ReactNode } from 'react';
import { ThemeProvider } from './withTheme';

type ProviderProps = {
  children: ReactNode;
};

export function Provider(props: ProviderProps) {
  const { children } = props;
  return <ThemeProvider>{children}</ThemeProvider>;
}
