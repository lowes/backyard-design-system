module.exports = {
    method: "GET",
    path: "/{path*}",
    handler: {
        directory: {
            path: '.',
            listing: false,
            redirectToSlash: false,
            index: true
        }
    }
}
