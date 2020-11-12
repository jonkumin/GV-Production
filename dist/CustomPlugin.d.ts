import { WorkboxPlugin, CachedResponseWillBeUsedCallbackParam, FetchDidSucceedCallbackParam, RequestWillFetchCallbackParam, CacheKeyWillBeUsedCallbackParam } from 'workbox-core/types';
export default class CustomPlugin implements WorkboxPlugin {
    cachedResponseWillBeUsed({ request, cachedResponse, }: CachedResponseWillBeUsedCallbackParam): Promise<Response | undefined>;
    fetchDidSucceed({ request, response }: FetchDidSucceedCallbackParam): Promise<Response>;
    cacheKeyWillBeUsed({ request, mode }: CacheKeyWillBeUsedCallbackParam): Promise<Request>;
    /**
     * Indicates to the XDN that the request came from the service worker - this allows
     * us to deliver jsonp requests from the cache.
     */
    requestWillFetch({ request }: RequestWillFetchCallbackParam): Promise<Request>;
}
