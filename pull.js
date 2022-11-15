const git = require("simple-git");

// results in 'git pull origin master --no-rebase'

async function addFile(fileName){
    try{
        console.log('Inside the try');
        const fileAdded = await  git().add(fileName);
        console.log('The file is Added to the list successfully');
    }
    catch (error) {
        console.log('Inside catch');
        const fileAdded = await simpleGit.add(fileName);
        console.log('adding files failed');
    }
};

display = addFile('addFolder');
