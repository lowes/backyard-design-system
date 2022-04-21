module.exports = {
    method: "GET",
    path: "/api/v1/mock",
    handler: (request, h) => h.response({ text: 'Loaded!' }).code(200)
}
