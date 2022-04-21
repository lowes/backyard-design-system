const HapiInert = require('@hapi/inert')
const { createManifest } = require('@lowes/hapi-manifest')
const { join } = require("path")

const root = join(__dirname, "..", "..")

module.exports = {
    initialize: (port, host) => ({
        manifest: createManifest({
            server: {
                host: [host, process.env.NODE_HOST, "0.0.0.0"].find(v => v),
                port: [port, process.env.NODE_PORT, 8081].find(v => v),
                routes: {
                    cors: {
                        origin: ['*'],
                    },
                    files: {
                        relativeTo: join(root, "client")
                    }
                }
            },
            register: {
                plugins: [HapiInert]
            }
        }),
        defaults: {
            env: {}
        }
    })
}
