import { writeJSON } from 'fs-extra'
import { join } from 'path'

import get from './get'

const { packages } = require('../../../../workspace.base')

const workspaceRoot = packages['bds-react']
const snapshotDestPath = join(workspaceRoot, 'sizes.json')

async function run() {
    const bundleSizes = await get()

    await writeJSON(snapshotDestPath, bundleSizes, { spaces: 2 })
}

run().catch((err) => {
    console.error(err)
    process.exit(1)
})
