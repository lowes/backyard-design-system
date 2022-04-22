import * as fs from 'fs'

import * as workspaces from '../workspace.base'

const getAllDeps = (pkg) => pkg ? ({
    ...pkg.devDependencies,
    ...pkg.dependencies
}) : {}

const packages = {
    root: getAllDeps(require(`${workspaces.root}/package.json`)),
    ...(Object.entries(workspaces.packages).reduce((pkgs, [workspace, path]) => {
        try {
            fs.statSync(`${path}/package.json`).isFile()
        } catch {
            return pkgs
        }

        pkgs[workspace] = getAllDeps(require(`${path}/package.json`))

        return pkgs
    }, {}))
}

const dependencies = {
    ...packages,
    all: Object.values(packages)
        .reverse()
        .reduce<Record<string, string>>((deps, pkg: Record<string, string>) => {
            Object.entries(pkg).forEach(([name, version]) => {
                if (version.match(/^[0-9\^~]/)) {
                    deps[name] = version
                }
            })

            return deps
        }, {})
}

fs.writeFileSync(
    `${workspaces.root}/dependencies.json`,
    JSON.stringify(dependencies, null, 2)
)
