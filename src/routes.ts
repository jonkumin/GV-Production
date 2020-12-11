import { Router } from '@xdn/core/router';
import { CACHE_ASSETS } from './cache';
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler';
import routesToCache from './routesToCache';
import routesToNotCache from './routesToNotCache';

const isRouteForbiddenToCache = (route: string): boolean => {
	return routesToNotCache
		.filter(routeToNotCache => routeToNotCache.includes(route))
		.length > 0;
}
const routesToCacheFiltered = routesToCache.filter(route => !isRouteForbiddenToCache(route));

const router = new Router();
// Rewrite apex to www
router.match({ headers: { host: /^(?!www\.).*$/ } }, ({ redirect }) => {
	redirect('https://www.giantvapes.com${url}')
})

// xdn files
router.match('/service-worker.js', ({ serveStatic, cache }) => {
	cache(CACHE_ASSETS)
	serveStatic('dist/service-worker.js')
});
router.match('/main.js', ({ serveStatic, cache }) => {
	cache(CACHE_ASSETS)
	serveStatic('dist/browser.js')
});

// cached routes
router.get('/', shoppingFlowRouteHandler);
routesToCacheFiltered.forEach(route => {
	router.get(route, shoppingFlowRouteHandler);
})

// fallback: perfect proxy
router.fallback(({ proxy }) => {
	proxy('origin');
});

export default router;
