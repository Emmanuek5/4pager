#!/usr/bin/env node

const {execSync} = require("child_process")

const runCommand = command =>{
    try {
        execSync(`${command}` , {stdio: 'inherit'})

    } catch (e) {
        console.log(`Failed To Execute ${command}`,e)
        return false
    }
      return true
}
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Emmanuek5/4pager ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`

console.log(`Cloning the repository with the name ${repoName}`)

const checkedOut = runCommand(gitCheckoutCommand) //

if (!checkedOut) {

    process.exit(-1)

    
}

console.log(`Installing dependencies for ${repoName}`)

const installDeps = runCommand(installDepsCommand)


if (!installDeps) {

    process.exit(-1)
    
}

console.log("Congratulations! You Are Ready Follow The Following commands to start")

console.log(`cd ${repoName} && npm run devstart`)


