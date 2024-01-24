const pckgData = require('./package.json')
const { spawnSync } = require('child_process')


const NPMInstallRes = spawnSync('npm', ['i', `${pckgData.name}@${pckgData.version.split('.')[0]}`, '--save-dev'], { stdio: 'inherit' })
if(NPMInstallRes.signal) {
    process.exit(1)
}

const tsCheckResult = spawnSync('npx', ['tsc', '-p', './tsconfig-version.json'], { stdio: 'inherit' })
if(tsCheckResult.signal) {
    process.exit(1)
}

if(tsCheckResult.status ===2) {
    spawnSync('npm', ['version', 'major', '--no-git-tag-version'], { stdio: 'inherit' })

} else {
    spawnSync('npm', ['version', 'minor', '--no-git-tag-version'], { stdio: 'inherit' })
}

process.exit(2)


