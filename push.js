const { Octokit } = require("octokit");
const simpleGit = require("simple-git");
const git = simpleGit.default();

const octokit = new Octokit({ auth: `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` });

async function push(){

try{
    await git.push('origin', 'testBranch');
}
catch (error) {
    console.error(error);
}

}

