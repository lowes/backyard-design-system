/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable func-names */
/* eslint-disable no-var */
/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
const { get, slice, orderBy, filter, some, every, keys, values, entries, includes, reduce, toLower } = require('lodash')

const random = mulberry32(12345)

const pure_dataset = require('./dataset.json')

const dataset = Array(99990).fill(null).map((data, index) => ({
    id: index + 1,
    title: pure_dataset[rand(0, 4999)].title,
    genre: pure_dataset[rand(0, 4999)].genre,
    producer: pure_dataset[rand(0, 4999)].producer,
    studio: pure_dataset[rand(0, 4999)].studio,
    revenue: pure_dataset[rand(0, 4999)].revenue,
    release: pure_dataset[rand(0, 4999)].release,
    synopsis: pure_dataset[rand(0, 4999)].synopsis
}))

function rand(min, max) {
    return Math.floor(random() * (max - min + 1) + min)
}

function mulberry32(a) {
    return function () {
        var t = a += 0x6D2B79F5
        t = Math.imul(t ^ t >>> 15, t | 1)
        t ^= t + Math.imul(t ^ t >>> 7, t | 61)
        return ((t ^ t >>> 14) >>> 0) / 4294967296
    }
}

module.exports = {
    method: "GET",
    path: (
        // If we are on GCP (in Docker container),
        process.env.NODE_ENV === 'production'
            // Use docker container listener path
            ? "/bds/documentation/api/components/datatable/example"
            // Else, use localhost listener path
            : "/api/components/datatable/example"
    ),
    handler: (request, h) => {

        const { query } = request

        const params = {
            page: Number(get(query, 'page', '1')),
            items: Number(get(query, 'items', '10')),
            globalFilter: get(query, 'globalFilter', null),
            filters: reduce(
                query,
                (filters, value, key) => {
                    const k = key.match(/^filters\[([a-zA-Z0-9]+)\]$/)

                    if (Array.isArray(k) && k[1]) {
                        filters[k[1]] = value
                    }

                    return filters
                },
                {}
            ),
            sorts: reduce(
                query,
                (filters, value, key) => {
                    const k = key.match(/^sorts\[([a-zA-Z0-9]+)\]$/)

                    if (Array.isArray(k) && k[1]) {
                        filters[k[1]] = value
                    }

                    return filters
                },
                {}
            ),
        }

        const mods = {
            start: (params.page - 1) * params.items,
            end: (params.page - 1) * params.items + params.items,
        }

        const applyGlobalFilter = (data, globalFilter) => globalFilter
            ? filter(
                data,
                (row) => some(
                    values(row),
                    (cell) => includes(
                        toLower(cell),
                        toLower(globalFilter)
                    )
                )
            )
            : data

        const applyFilters = (data, filters) => keys(filters).length > 0
            ? filter(
                data,
                (row) => every(
                    entries(filters),
                    ([key, value]) => includes(
                        toLower(row[key]),
                        toLower(value)
                    )
                )
            )
            : data

        const applySorts = (data, sorts) => keys(sorts).length > 0
            ? orderBy(
                data,
                ...reduce(
                    entries(sorts),
                    (sorts, [key, value]) => {
                        sorts[0].push(key)
                        sorts[1].push(value)

                        return sorts
                    },
                    [[], []]
                )
            )
            : data

        const rows = applySorts(
            applyFilters(
                applyGlobalFilter(
                    dataset,
                    params.globalFilter
                ),
                params.filters
            ),
            params.sorts
        )

        const table = slice(
            rows,
            mods.start,
            mods.end
        )

        const info = {
            count: rows.length,
            pages: Math.ceil(rows.length / params.items),
        }

        return h.response({
            params,
            info,
            table,
        }).code(200)
    }
}
