/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = 'Git is a version control system that lets you manage and keep track of your source code history.'
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = 'GitHub is a cloud-based hosting service that lets you manage Git repositories. It lets you and others work together on projects from anywhere.' 



//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties. .  The 'code' property should be a 
    string of the actual command (what you type into your terminal). The 'description' property 
    will be a string with a description of what that git command does
*/

//////////////////PROBLEM 3////////////////////

/*

    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

const init = {
    description: ' This command is used to start a new repository.',
    code: 'git init [repository name]',
    
  }
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

const clone = {
    description: 'Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits.',
    code: 'git clone ssh://john@example.com/path/to/my-project.git 
    cd my-project 
    # Start working on the project',
    
  }

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

const status = {
    description: 'Git status shows the current state of your Git working directory and staging area.',
    code: 'git status',
    
  }

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

const add = {
    description: 'git-add - Add file contents to the index',
    code: 'git add',
    
  }
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
const commit = {

    description: 'git-commit - Record changes to the repository.',
    code: 'git commit',

    
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

const push = {

    description: 'Uploads all local branch commits to the remote.',
    code: 'git push',
}