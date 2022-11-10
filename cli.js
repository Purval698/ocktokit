
// const { Octokit, App } = require("octokit");
// const octokit = new Octokit({ auth: `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` });

// // Compare: https://docs.github.com/en/rest/reference/users#get-the-authenticated-user



// async function myfunction() {
//     const {
//         data: { login },
//       } = await octokit.rest.users.getAuthenticated();
//       console.log("Hello, %s", login);
// }

// myfunction();


const simpleGit = require("simple-git");
const git = simpleGit.default();

async function changeBranch(){
    await git.checkout("testBranch");
};

changeBranch();

async function newFunc(){
    const branch = await git.branch();
    console.log(branch.current)
};

newFunc();
