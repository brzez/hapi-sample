// @flow

export default async function (server) {
  server.route({
    method: 'get',
    path: '/',
    handler: (request, h) => 'hello world'
  })
}
