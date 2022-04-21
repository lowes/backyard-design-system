/* eslint-disable consistent-return */
require('make-promises-safe')

const Server = require('./server')

const start = async (port, host) => {
    let server

    try {
        server = await Server.initialize(port, host)

        await server.start()

        console.log('Server running at: ', server.info.uri) // eslint-disable-line no-console

        return server
    } catch (err) {
        console.log('Server failed to start...', err) // eslint-disable-line no-console

        /* istanbul ignore if */
        if (require.main === module) {
            process.exit(1)
        } else {
            return err
        }
    }
}

/* istanbul ignore if */
if (require.main === module) {
    start()
} else {
    module.exports = {
        start
    }
}
