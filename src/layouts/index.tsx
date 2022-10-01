import { ReactNode } from 'react';

import AuthGuard from 'src/guards/AuthGuard';
import MainLayout from './main';
import DashboardLayout from './dashboard';
import LogoOnlyLayout from './logo-only';

type Props = {
  children: ReactNode;
  variant?: 'main' | 'dashboard' | 'logoOnly';
};

export default function Layout({ variant = 'dashboard', children }: Props) {

  if (variant === 'logoOnly') {
    return (
      <LogoOnlyLayout>
        {children}
      </LogoOnlyLayout>);
  }

  if (variant === 'main') {
    return (
      <MainLayout>
        {children}
      </MainLayout>);
  }

  return (
    <AuthGuard>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AuthGuard>
  );
}
