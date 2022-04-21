/**
 * @jest-environment node
 */
import { join } from 'path'
import { readFile, writeFile, exists } from 'fs-extra'
import { assignWith, reduce } from 'lodash'
import chalk from 'chalk'
import getSizeSnapshot from '../scripts/sizeSnapshot/get'

// 100 bytes difference
const SIZE_DELTA_LIMIT = 100

describe('Backyard React', () => {
    test('Size Snapshot', async () => {
        try {
            let sizes

            const snapshotPath = join(__dirname, '..', 'sizes.json')

            const oldSizes = await exists(snapshotPath) ? JSON.parse(await readFile(snapshotPath)) : {}

            const newSizes = await getSizeSnapshot()

            if (Object.keys(oldSizes).length > 0) {
                // Reduce sizes that are not in newSizes
                sizes = reduce(oldSizes, (sizes, size, key) => {
                    if (newSizes[key]) {
                        return {
                            ...sizes,
                            [key]: size
                        }
                    } else {
                        return sizes
                    }
                }, {})
            } else {
                // There was no old size
                sizes = newSizes
            }

            // Top level merge with existing sizes if the change is large enough
            assignWith(sizes, newSizes, (oldSize, newSize, key) => {
                if (!oldSize || Math.abs(newSize.gzip - oldSize.gzip) >= SIZE_DELTA_LIMIT) {
                    return newSize
                } else {
                    return oldSize
                }
            })

            // Updating snapshots
            if (process.env.SNAPSHOT_UPDATE || process.argv.includes('-u')) {
                const orderedSizes = {}

                Object.keys(sizes).sort().forEach((key) => {
                    orderedSizes[key] = sizes[key]
                })

                await writeFile(snapshotPath, JSON.stringify(orderedSizes, null, 2))

                expect(JSON.parse(await readFile(snapshotPath))).toEqual(orderedSizes)

                console.info(chalk.blue('Size Snapshot Updated'))
            } else {
                // Expect size snapshot to not have changed more than limit
                expect(sizes).toEqual(oldSizes)
            }

            return true
        } catch (err) {
            throw err
        }
    })
})
