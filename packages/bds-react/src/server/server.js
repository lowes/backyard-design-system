const Glue = require('@hapi/glue')

const Routes = require('./routes')
const Internals = require('./internals')

module.exports = {
    initialize: async (port, host) => {
        const internals = Internals.initialize(port, host)

        const server = await Glue.compose(internals.manifest)

        server.route(Routes)

        return server
    }
}
