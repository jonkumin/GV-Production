import { CACHE_PAGES } from './cache'
import { RouteHandler } from '@xdn/core/router/Router'

const handler: RouteHandler = async ({
  cache,
  removeResponseHeader,
  removeUpstreamResponseHeader,
  proxy,
}) => {
  cache(CACHE_PAGES)
  removeResponseHeader('set-cookie')
  removeUpstreamResponseHeader('set-cookie')
  proxy('origin')
}

export default handler