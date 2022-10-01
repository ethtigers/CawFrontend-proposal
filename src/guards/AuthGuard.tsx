import { useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

import LoadingScreen from 'src/components/LoadingScreen';
import useAuth from 'src/hooks/useAuth';
import Login from 'src/pages/auth/login';


type Props = {
    children: ReactNode;
};

export default function AuthGuard({ children }: Props) {

    const { isAuthenticated, isInitialized } = useAuth();
    const { pathname, push } = useRouter();
    const [ requestedLocation, setRequestedLocation ] = useState<string | null>(null);

    useEffect(() => {
        if (requestedLocation && pathname !== requestedLocation) {
            setRequestedLocation(null);
            push(requestedLocation);
        }
    }, [ pathname, push, requestedLocation ]);

    if (!isInitialized)
        return <LoadingScreen />;


    if (!isAuthenticated) {


        if (pathname !== requestedLocation)
            setRequestedLocation(pathname);

        return <Login />;
    }

    return <>{children}</>;
}
