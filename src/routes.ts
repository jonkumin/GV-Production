const ONE_HOUR = (60 * 60);
const ONE_DAY = 60 * 60 * 24;
import { Router, CustomCacheKey } from '@xdn/core/router';
import { CACHE_SERVICE_WORKER } from './cache';
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler';

export default new Router()
  .match('/service-worker.js', ({ serveStatic, cache }) => {
    cache(CACHE_SERVICE_WORKER)
    serveStatic('dist/service-worker.js')
  })

		.get('/cart.php', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
	.match('/customer', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
	.match('/wishlist:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/giants-club:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/brands/:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
	.match('/customer:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/sitemap.xml', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/sitemap.xml:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/robots.txt', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/robots.txt:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
	.match('/customer-support:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
		.match('/account.php', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
		.match('/account.php:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
		.match('/order.html', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
		.match('/order.html:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
	.match('/age-verification', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
	.match('/age-verification:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/manual-verification', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/manage/:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/admin', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/admin/:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/oauth2', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/subscribe', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/subscribe:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/brands:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/oauth2/:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/login-as-customer', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/login-as-customer:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
	})
	proxy('origin')
})
.match('/manual-verification:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/order-verification', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/order-verification:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/vendors', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/vendors:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/contact-us', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
.match('/contact-us:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})

		.match('/finishorder.php', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
		.match('/finishorder.php:splat*', ({ proxy, cache }) => {
	cache({
		edge:false,
	})
	proxy('origin')
})
    .get('/api/storefront/:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
		})
	proxy('origin')
})
.get('/login.php', ({ proxy, cache }) => {
	cache({
		edge: false,
		})
	proxy('origin')
})
.match('/login.php:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
		})
	proxy('origin')
})

.get('/checkout.php', ({ proxy, cache }) => {
	cache({
		edge: false,
		})
	proxy('origin')
})
.match('/checkout.php:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
		})
	proxy('origin')
})
.match('/verification-in-progress', ({ proxy, cache }) => {
	cache({
		edge: false,
		})
	proxy('origin')
})
.match('/verification-in-progress:splat*', ({ proxy, cache }) => {
	cache({
		edge: false,
		})
	proxy('origin')
})

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
  