const { Octokit } = require("octokit");
const simpleGit = require("simple-git");
const git = simpleGit.default();

const octokit = new Octokit({ auth: `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` });

async function commit(msg){

    try{
        await git.commit(msg);
        console.log('Commited successfully');
    }
    catch(err){
        console.error(err);
    }

}

commit('Commit file is added');

