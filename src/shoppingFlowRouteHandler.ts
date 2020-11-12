import { CACHE_PAGES } from './cache'
import { RouteHandler } from '@xdn/core/router/Router'

const handler: RouteHandler = async ({
  cache,
  removeResponseHeader,
  removeUpstreamResponseHeader,
  updateResponseHeader,
  proxy,
}) => {
  cache(CACHE_PAGES)
  removeResponseHeader('set-cookie')
  removeUpstreamResponseHeader('set-cookie')
  proxy('origin')
  updateResponseHeader('location', /https:\/\/www.giantvapes.com/, '/') 
					   // convert absolute redirects to origin to relative so that the user isn't transferred to the origin.
}

export default handler