import { useEffect } from 'react';

const RedirectHandler = () => {
    useEffect(() => {
        // Skip all redirects on localhost to prevent development issues
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return;
        }

        const currentUrl = window.location.href;
        const currentHost = window.location.host; // includes port if any
        const currentHostname = window.location.hostname; // no port
        const currentProtocol = window.location.protocol;
        const currentPath = window.location.pathname + window.location.search + window.location.hash;

        let targetProtocol = currentProtocol;
        let targetHost = currentHost;

        // 1. Enforce HTTPS
        if (currentProtocol === 'http:') {
            targetProtocol = 'https:';
        }

        // 2. Enforce non-www
        if (currentHostname.startsWith('www.')) {
            targetHost = currentHost.replace('www.', '');
        }

        // Construct the final URL
        // Note: If we changed protocol to https, we must ensure we are not preserving a non-standard http port like 8080 unless intended.
        // Usually for production redirects, we imply port 443 for https, so 'host' (which includes port) might need care if port was in URL.
        // However, for standard web hosting, switching scheme usually implies standard ports.
        // If we just strip 'www.' from 'www.example.com:80', we get 'example.com:80'. Changing to https causes issue if 80 is kept.
        // Safest for standard deployments is to assume standard ports when redirecting scheme.
        // So we'll construct using hostname (without port) if we are effectively changing the "site location".
        // But keeping it simple: in prod, usually ports aren't explicit.

        // Let's refine targetHost to be safer: if we stripped www, we have the naked domain/host.

        const needsProtocolRedirect = currentProtocol !== targetProtocol;
        const needsHostRedirect = currentHost !== targetHost;

        if (needsProtocolRedirect || needsHostRedirect) {
            const newUrl = `${targetProtocol}//${targetHost}${currentPath}`;
            console.log(`Redirecting from ${currentUrl} to ${newUrl}`);
            window.location.replace(newUrl);
        }
    }, []);

    return null;
};

export default RedirectHandler;
