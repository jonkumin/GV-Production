import { Router } from '@xdn/core/router';
import { CACHE_SERVICE_WORKER } from './cache';
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler';

export default new Router()
  .match('/service-worker.js', ({ serveStatic, cache }) => {
    cache(CACHE_SERVICE_WORKER)
    serveStatic('dist/service-worker.js')
	})
	// uncached routes
	.get('/cart.php', ({ proxy }) => {
		proxy('origin')
	})
	.match('/customer', ({ proxy }) => {
		proxy('origin')
	})
	.match('/wishlist:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/giants-club:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/brands/:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/customer:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/sitemap.xml', ({ proxy }) => {
		proxy('origin')
	})
	.match('/sitemap.xml:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/robots.txt', ({ proxy }) => {
		proxy('origin')
	})
	.match('/robots.txt:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/customer-support:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/account.php', ({ proxy }) => {
		proxy('origin')
	})
	.match('/account.php:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/order.html', ({ proxy }) => {
		proxy('origin')
	})
	.match('/order.html:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/age-verification', ({ proxy }) => {
		proxy('origin')
	})
	.match('/age-verification:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/manual-verification', ({ proxy }) => {
		proxy('origin')
	})
	.match('/manage/:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/admin', ({ proxy }) => {
		proxy('origin')
	})
	.match('/admin/:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/oauth2', ({ proxy }) => {
		proxy('origin')
	})
	.match('/subscribe', ({ proxy }) => {
		proxy('origin')
	})
	.match('/subscribe:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/brands:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/oauth2/:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/login-as-customer', ({ proxy }) => {
		proxy('origin')
	})
	.match('/login-as-customer:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/manual-verification:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/order-verification', ({ proxy }) => {
		proxy('origin')
	})
	.match('/order-verification:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/vendors', ({ proxy }) => {
		proxy('origin')
	})
	.match('/vendors:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/contact-us', ({ proxy }) => {
		proxy('origin')
	})
	.match('/contact-us:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/finishorder.php', ({ proxy }) => {
		proxy('origin')
	})
	.match('/finishorder.php:splat*', ({ proxy }) => {
		proxy('origin')
	})
  .get('/api/storefront/:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.get('/login.php', ({ proxy }) => {
		proxy('origin')
	})
	.match('/login.php:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.get('/checkout.php', ({ proxy }) => {
		proxy('origin')
	})
	.match('/checkout.php:splat*', ({ proxy }) => {
		proxy('origin')
	})
	.match('/verification-in-progress', ({ proxy }) => {
		proxy('origin')
	})
	.match('/verification-in-progress:splat*', ({ proxy }) => {
		proxy('origin')
	})
	// cached files/pages
	.match('/main.js', ({ serveStatic, cache }) => {
    cache({
      browser: {
        maxAgeSeconds: 0,
      },
      edge: {
        maxAgeSeconds: 60 * 60 * 365,
      },
    })
    serveStatic('dist/browser.js')
  })
	.match('/', shoppingFlowRouteHandler)
	.match('cdn11.bigcommerce.com/:splat*', shoppingFlowRouteHandler)
	.match('/:splat*', shoppingFlowRouteHandler)
  