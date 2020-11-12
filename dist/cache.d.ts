/**
 * The default cache setting for pages in the shopping flow
 */
export declare const CACHE_PAGES: {
    edge: {
        maxAgeSeconds: number;
        staleWhileRevalidateSeconds: number;
    };
    browser: {
        maxAgeSeconds: number;
        serviceWorkerSeconds: number;
    };
};
/**
 * The default cache setting for static assets like JS, CSS, and images.
 */
export declare const CACHE_ASSETS: {
    edge: {
        maxAgeSeconds: number;
    };
    browser: {
        maxAgeSeconds: number;
        serviceWorkerSeconds: number;
    };
};
/**
 * The cache setting for the service worker.
 */
export declare const CACHE_SERVICE_WORKER: {
    edge: {
        maxAgeSeconds: number;
    };
    browser: {
        maxAgeSeconds: number;
    };
};
/**
 *The "cache" setting for non-cached pages.
 */
