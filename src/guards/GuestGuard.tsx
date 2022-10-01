import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

import useAuth from 'src/hooks/useAuth';
import { PATH_DASHBOARD } from 'src/routes/paths';

type Props = {
  children: ReactNode;
};

export default function GuestGuard({ children }: Props) {

  const { push } = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      push(PATH_DASHBOARD.root);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ isAuthenticated ]);

  return <>{children}</>;
}
