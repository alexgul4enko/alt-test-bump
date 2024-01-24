const pckgData = require('./package.json')
const { spawnSync } = require('child_process')
const fs = require('fs')

const NPMInstallRes = spawnSync('npm', ['i', `${pckgData.name}@${pckgData.version.split('.')[0]}`, '--save-dev'], { stdio: 'inherit' })
if(NPMInstallRes.signal) {
    process.exit(1)
}


spawnSync('npx', ['tsc'], { stdio: 'inherit' })

const tsCheckResult = spawnSync('npx', ['tsc', '-p', './tsconfig-version.json'], { stdio: 'inherit' })
if(tsCheckResult.signal) {
    process.exit(1)
}

if(tsCheckResult.status ===2) {
    console.log('major')
    // spawnSync('npm', ['version', 'major', '--no-git-tag-version'], { stdio: 'inherit' })

} else {
    if(fs.readFileSync('./dist/index.d.ts', "utf8") === fs.readFileSync('./node_modules/alt-test-bump/dist/index.d.ts', "utf8")){
        console.log('patch')
    } else {
        console.log('minor')
    }
    // spawnSync('npm', ['version', 'minor', '--no-git-tag-version'], { stdio: 'inherit' })
}

process.exit(2)


