import { CustomCacheKey } from '@xdn/core/router'

const ONE_HOUR = 60 * 60
const ONE_DAY = 24 * ONE_HOUR

const queryParametersToExclude = [
  'utm_medium',
  'utm_campaign',
  'utm_source',
  'utm_content',
  'cjevent',
  '_hsenc',
  '_hsmi',
  'hsCtaTracking',
  'fbclid',
  'ref',
  'token',
  'afsrc',
  'sid',
  'rewardsmgr',
  'sref_id',
  '334',
  '_escaped_fragment_',
  'yoReviewsPage',
];

/**
 * The default cache setting for pages in the shopping flow
 */
export const CACHE_PAGES = {
  edge: {
    maxAgeSeconds: ONE_DAY,
	  staleWhileRevalidateSeconds: ONE_HOUR,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: ONE_DAY,
  },
  key: new CustomCacheKey().excludeQueryParameters(...queryParametersToExclude),
}

/**
 * The default cache setting for static assets like JS, CSS, and images.
 */
export const CACHE_ASSETS = {
  edge: {
    maxAgeSeconds: ONE_DAY,
  },
  browser: {
    maxAgeSeconds: 0,
    serviceWorkerSeconds: ONE_DAY,
  },
}
