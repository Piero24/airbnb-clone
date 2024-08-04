// Implemented to fix the Bug that appear when you refresh the page click during the loanding phase on the
// page. Explaned here: https://www.youtube.com/watch?v=c_-b_isI4vg&t=170s at minute 34:33
// not sure if it's depends from the version of the next.js or the developer's code
'use client';

import { useEffect, useState } from 'react';

interface ClientOnlyProps {
    children: React.ReactNode
}

 const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
 }) => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <>
            {children}
        </>
    );
 }

 export default ClientOnly;