const simpleGit = require("simple-git");
// const simpleGitPromise = require('simple-git/promise')();
// const status = await git.status();
// console.log(status);
// Add all files for commit

   async function addFile(fileName){
    try{
        const fileAdded = await simpleGit.add(fileName);
        console.log(fileAdded);
    }
    catch (error) {
        const fileAdded = await simpleGit.add(fileName);
        console.log('adding files failed');
    }
};

addFile('simple');
