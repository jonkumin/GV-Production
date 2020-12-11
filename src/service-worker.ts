import { skipWaiting, clientsClaim } from 'workbox-core';
import { Prefetcher, prefetch } from '@xdn/prefetch/sw';
import DeepFetchPlugin, { DeepFetchCallbackParam } from '@xdn/prefetch/sw/DeepFetchPlugin';

skipWaiting();
clientsClaim();

function deepFetchPDPImages({ $el/* , el, $ */ }: DeepFetchCallbackParam) {
  const urlTemplate = $el.attr('srcset');
  if (urlTemplate) {
    const url = urlTemplate.replace('80w', '960w');
    prefetch(url, 'image', { cors: false });
  }
}

function deepFetchPLPImages({ $el/* , el, $ */ }: DeepFetchCallbackParam) {
  const urlTemplate = $el.attr('srcset');
  if (urlTemplate) {
    const url = urlTemplate.replace('80w', '640w');
    prefetch(url, 'image', { cors: false });
  }
}

new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      {
        selector: '.productView-images img.productView-image--default',
        maxMatches: 1,
        attribute: 'srcset',
        as: 'image',
        callback: deepFetchPDPImages,
      },
      {
        selector: '.product img.card-image',
        maxMatches: 2,
        attribute: 'srcset',
        as: 'image',
        callback: deepFetchPLPImages,
      },
    ]),
  ],
})
  .route()
  .cache(/^https?:\/\/cdn\d+\.bigcommerce\.com\/.*/);
