# Hello.

Welcome to Git!


---

# What is Git?

>> notes

Before we get started, lets talk a bit about what git is, and how it differes from some other forms of source control. I'll be comparing it a little bit to subversion, but similar comparsions can be applied to other source control systems also.

---

## Snapshots…everything

#### Subversion

Information is a set of files + **deltas** of changes over time.

#### Git

Information is a set of **snapshots**. For every committed change, Git takes another snapshot.

>> notes

In a system like Subversion - changes are tracked as a series of changes over time. When change is commited - it is the delta that the SVN will keep track of.

(make use of?) - http://git-scm.com/book/en/v2/book/01-introduction/images/deltas.png

With git - your changes are snapshots of whats happened. It is a full version of the file that changed - not just the changes to it. Git sort of acts like a filesystem with some tools on top.

By keeping snapshots of changes over time, this allows git to do most things locally.
---

## Local operations

#### Subversion

You can make local edits but you need **network access** to commit your changes to your database.

#### Git

The entire project history is on your **local disk**. You can do almost anything offline, including committing.

>>> Notes

With a CVS system, the general workflow is needing to connect to a server, pull down changes, commit changes - requiring a network connection. If you are trying to be a good developer - you might get latest again to ensure things still work before committing.

The difference with git - when you commit with a CVS system, you also need a network connection - and tends to promote 'larger and fewer' commits, because once the commit is done - it's on the server and another developer will pull it down, even if it's not ready.

With git, most operations are done locally.  This allows you to create branches, change branches, commit changes, revert changes without needing a network connection.

This also allows you to make smaller and more frequent commits - such as trying out new ideas, and easily being able to revert them, commiting work in progress to jump over to another branch for a hotfix.

"But, I don't want to see 1000 commits in my history" -- we will cover how to resolve this later on today when talking about merging and rebasing.

---

## Distributed

#### Subversion

**Centralized**. One repo and lots of clients.

#### Git

**Distributed**. One repo with lots of client repos, each with a user.

>>> notes
:TODO

---

## Lightweight branches

#### Subversion

Slow(er), network dependant, long urls, manual merges. To be used with care (especially pre-1.5).

#### Git

Fast(er), network independent, often automatic merges. To be used early and often.

>>> notes

At my previous company, we used TFS - and the general motto was 'less branches, less often - and if you need a branch, there best be a very, very good reason for it - and approved by someone else'.

With git, we are able to create branches locally, switch between them, commit changes all without needing a network connection. This also makes it really easy to do smaller branches that are more focused.

---

## Easily curated commits

#### Subversion

Diff to temporary files + reverting and partially applying those temporary files again.

#### Git

First-class and dedicated staging area + patch staging (which can be interactive).

>>> notes
TODO

---

## And so much more.

---

# The three states

---

## The .git directory (History)

Where the metadata and object database of the project is stored.

It's what's copied when you clone a repository.

---

## The working directory

A version of the project that is checked out and placed on disk.

Its files are pulled out of the compressed database in the .git directory.

---

## The staging area (Index)

A file, in the .git directory, that stores information about what will go into your next commit.

---

## All git commands operate over these three states.

---

# Basic commands

---
## Getting started, and making changes
---
## `git init`

Start tracking a project in Git.

This command creates the .git directory.

>>> notes: move this to above add / commit / etc

- if you are using git locally only
- if it's not on a remote (yet)
- simplest way is typically creating a repo on git, bitbucket, etc and then cloning


---
## `git status`

Show the status of modified files in the working directory.

These can be _untracked_, _unstaged_ or _staged_ for commit.

>>> notes
* go into new folder
* do git init
* do git status
* no files
* touch readme.md
* git status - see untracked files

---

## `git add <files>`

Copy snapshots of modified files to the staging area.

This command tracks new files

>>> notes

Git add will adds a change in the working directory, to the staging area. It lets git know that the next time a commit happens, that this file should be included.

Adding a file does not affect the repository in a major way, and the change is not recorded until we do a git commit which we will cover next.


---

## `git commit`

Save a snapshot of the staging area to the history as a commit.

>>>

Git commit is what will push changes from the staging area, to the history. The workflow for git is

- working directory
- staging
- comiting to history.

An important thing to note - is that every time a file changes, if you want to include that change with the next commit - you need to tell git to re-add it, as it is adding a snapshot of the file at the time the command is run.

-- edit file
-- git add
-- edit file again
-- need to add it again

You can avoid needing to always re-add a file by using git commit -a to automatically add files that are tracked.

** example with commit -a with tracked/untracked files?
---

## Undoing ....

* git revert
* git reset
* git checkout

>> notes:

Not every commit is perfect, and sometimes we make mistakes - either commited a change to soon, added something in error - and being able to restore to previous versions is imporant.

Git provides a few ways to work with your history - reset, revert and checkout.

---

## 'git revert <commit>'

>> notes:

Git revert is considered one of the safer ways of to undo a changes, as it does not rewrite the history of your project. Git will try to figure out how to undo a change, and create a new commit for that change.

---
## `git reset -- <files>`

Copy files from the latest commit to staging area.

Effectively undoes `git add <files>` by replacing files in the staging area by those last committed.

Omit `<files>` to unstage everything.

>> notes:

While git revert does not move the project back to a previous state, git reset does. Git revert also allows you to revert changes at any point in history, where git reset can only work backwards from the current commit.

Git reset can be considered a 'dangerous' command also, as it is possible to lose work as you are unable to recover your original work.

---

## `git checkout -- <files>`

Copy files from the staging area to the working directory.

Omit `<files>` to throw away all local changes.

---

## Basic commands visualized

![inline](http://marklodato.github.io/visual-git-guide/basic-usage.svg.png)

---

# Basic commands redux

---

## Interactive

Interactively select hunks a particular files to operate on.

`git add -p`
`git commit -p`
`git reset -p`
`git checkout -p`

>>>

The interactive/patch commands have quite a bit of power and flexability, but going over how to use the patch mode is outside the scope of todays session.

---

## Shortcuts

`git commit (file | -a)`
Add all tracked and changed files' contents to the staging area and then creates a commit.

`git`
Copy files from the latest commit into both the staging area and the working directory.

---

## Shortcuts visualized

![inline](http://marklodato.github.io/visual-git-guide/basic-usage-2.svg.png)

---

# More commands

---




## `git clone <url>`

Get a copy of an existing Git repository.

This command copies the .git directory of a remote Git repository to your local disk and checks out a working copy of the latest version of the default branch.

---

## `git diff`

See the exact lines added and removed in the working directory.

`--cached | --staged`: Compare your staged changes to those of your last commit.

---

## `git rm`

Remove files from the working directory and the staging area.

`--cached`: Remove files from the staging area only and keep them in the working directory.

---

## `git mv`

Track the movement (renaming) of files.

It essentially moves the file on the filesystem, `git rm`s and then `git add`s the moved file.

---

## `git log`

Browse and inspect the evolution of the project.

---

# Crafting commits

---

![original](http://imgs.xkcd.com/comics/git_commit.png)

---

## Do's

- keep commit changes as small as possible
- describe what was changed and why
- limit first line to 50 characters
- insert a blank line after first line
- wrap subsequent lines at 72 characters

---

## Don't

- mix whitespace with functional code changes
- mix unrelated functional code changes
- send large feature in a single commit

---

## Model Git commit message

```
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, preceded by a
  single space, with blank lines in between, but conventions vary here

- Use a hanging indent
```

---

## `git commit --amend`

Add any staged changes to the last commit and ammend the commit message (optional).

Useful for when you commit early and forget to add some files or when you make a mistake in the commit message.

---

## `git stash`

Save the uncommitted changes in the working directory and the staging area and go back to a clean working directory.


>>> notes:

* show git stash
* git stash ls
* git stash apply vs git stash pop --- apply applies it, pop applies it and removes it from the stack


---

# Remote branches

---

## `git remote`

List all remotes.

---

## `git remote add <shortname> <url>`

Add a remote git repository and reference it with a shortname.

---

## `git fetch <shortname>`

Get all the data from the remote repository unto your local disk.

---

## `git branch --set-upstream-to=<shortname>/<remote branch name> <local branch name>`

Set a local branch to track a remote branch.

---

## `git push <shortname> <branch>`

Push changes in your branch to its corresponding tracking branch on the remote repository.

*TIP: Use the `-u` flag when creating new local branches to automatically set their remote tracking branches.*

---

# Git configuration

---

## `git config --global user`

`.name <name>`: Setup your name.
`.email <email>`: Setup your email.

Set the name and email that will be attached to your commits.

---

## `git config --global alias`

Set short forms for frequently used commands.

Examples:

```
git config --global alias.st status
git config --global alias.ci commit
git config --global alias.br branch
git config --global alias.co checkout
git config --global alias.df diff
git config --global alias.lg 'log -p'
```

---

### Configurations can also be put in the ~/.gitconfig file

---

## `.gitignore`

A list of files in the project to ignore.

---

# Workflows

---

# Github Work Flow
![inline](http://lucamezzalira.files.wordpress.com/2014/03/screen-shot-2014-03-08-at-23-07-361.png?w=650&h=230)

A continuous deployment environment where everything in the `master` branch is deployable.

---

## Branching off

`git branch <name of branch> && git checkout <name of branch>`

`git checkout -b <name of branch>`

Create a new branch off of `master`, commit to that branch locally and push to the server frequently.

---

## Rebasing

`git rebase <name of branch to rebase off>`

As you work and even as you finish, integrate your changes with `master` regularly.

---

## Rebasing (continued)

Rebasing changes the base of your branch to the last commit found on another branch, `master` in this case, and replays your changes on top. In essence, the history is rewritten to make it appear that your work was always done after the latest master.

---

## Before a rebase

![inline](http://git-scm.com/figures/18333fig0327-tn.png)

---

## After a rebase

![inline](http://git-scm.com/figures/18333fig0328-tn.png)

---

## Squashing your commits

`git rebase -i <name of branch to rebase off>`

Pick the first commit on your feature branch and squash all subsequent ones on top of it.

This process combines them all into one commit.

---

## Pull requests

When a branch is ready to be merged, a pull request is made to start the review process.

---

## Review and discuss

Collaborators and stakeholders can review the commit together and any correction is made to the branch and pushed to update the pull request.

---

## Merging

`git merge --no-ff <name of branch to merge>`

Once the changes have passed the review process, they are merged to the `master` branch.

---

## Merging (continued)

### Before

      A---B---C topic
     /
    D---E---F---G master
### After

      A---B---C topic
     /         \
    D---E---F---G---H master

---

## Resolving merge conflicts

```
this presentation is

<<<<<<< HEAD
good
=======
great
>>>>>>> feature-improve-presentation
```

---

## Merge tools

`git mergetool`

Typically used after `git merge`, this command runs several built in tools to help resolve merge conflicts.

---

## Available tools for windows

- Araxis Merge
- Beyond Compare
- ExamDiff
- WinMerge (free)
- KDiff3 (free)

---

## Cherry Pick

`git cherry-pick <sha-1>`

Copy a commit from one branch and apply it to another.

---

# Git hooks

---

## What are Git hooks?

Built-in scripts Git executes before or after commits, pushes, and receives. These vary widely in functionality.

---

## How they work

Each Git repository comes with a `.git/hooks` folder where scripts for each hook that can be bound to.

To install a script, place any executable in the `.git/hooks` folder and name it according to the hook you mean to bind to.

---

## Client-side hooks

---

### `pre-commit`

Runs first, before the commit message prompt and allows you to inspect the snapshot that's about to be inspected.

Great for running tests, linting code and removing whitespaces.

---

### `prepare-commit-msg`

Runs before the commit message editor is launched but after the default message is created.

Great for editing the default message and templating.

---

### `commit-msg`

Runs after the commit message is saved.

Great for validating commit messages.

---

### `post-commit`

Runs after the entire commit is completed.

Great for notifications.

---

### `pre-rebase `

Runs before you rebase anything.

---

### `post-checkout`

Runs after a successful `git checkout`.

Great for setting up working environment, especially when large (untracked) binaries are involved.

---

### `post-merge`

Runs after a successful `git merge`.

---

## Server-side hooks

---

### `pre-receive`

Runs when handling a push from a client. Only

---

### `post-receive`

Runs after a push from a client is fully processed.

Great for notifying users and other systems such as the CI and IM applications.

---

### `update`

Very similar to the pre-receive hook but may run multiple times, depending on the amount of branches being pushed.

The `pre-receive` hook only runs once, no matter how many branches are pushed.

---

# Github Webhooks

---

## What is a Webhook?

Technical: An user defined HTTP callback that is triggered by a certain event that occurs at the source site.

Simple: A web service endpoint that listens to requests from a source and/or sends requests to a target.

Each hook can be configured to a specific service and any number of events.

---

## Setting up a Webhook

1. Go to the **Settings** page of your repository.
2. Click on **Webhooks & services**.
3. Click on **Add webhook**.

---

## Payload URL

This is the server endpoint that will handle the Webhook.

---

## Available events

commit\_comment | create | delete | deployment\_status | deployment | fork | gollum | issue\_comment | issues | member | page\_build | public | pull\_request\_review\_comment | pull\_request | push | release | status | team\_add watch

---

## Wildcard events

`*`

You'll receive every event.

---

## Payload

The POST request body, usually contains a JSON document.

Each event type has its own unique payload object.

---

## Sample Payload

```
POST /payload HTTP/1.1

Host: localhost:4567
X-Github-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958
User-Agent: GitHub Hookshot 044aadd
Content-Type: application/json
Content-Length: 6615
X-Github-Event: issue
```
```javascript
{
  "action": "opened",
  "issue": {
    "url": "https://api.github.com/repos/octocat/Hello-World/issues/1347",
    "number": 1347,
    ...
  },
  "repository" : {
    "id": 1296269,
    "full_name": "octocat/Hello-World",
    "owner": {
      "login": "octocat",
      "id": 1,
      ...
    },
    ...
  },
  "sender": {
    "login": "octocat",
    "id": 1,
    ...
  }
}
```

---

# One-button deployments

---

## Disclaimer

^ This is not prescriptive. YMMV.

---

## Stack

- Rundeck
- Github
- Jenkins
- New Relic
- Logstash & Kibana
- Slack

---

## Rundeck

Allows you to turn operations procedures into self-service jobs and safely give others control and visibility over the infrastructure.

---

![fit](http://rundeck.org/images/Rundeck-EditJob.png)

---

![fit](http://rundeck.org/images/Rundeck-JobExecution.png)

---

## Jenkins

A continuous integration server that allow you to run your test suite automatically everytime changes are commit and/or merged.

---

![fit](http://blog.octo.com/wp-content/uploads/2012/08/screenshot-dashboard-jenkins1.png)

---

![fit](https://s3.amazonaws.com/uploads.hipchat.com/68570/490459/eLKcPVAfVZesfcf/jenkins.png)

---

![fit](https://s3.amazonaws.com/uploads.hipchat.com/68570/490459/wtZQUHUhxIeVUSL/jenkinslog.png)

---

## Deployment overview

```
+---------+             +--------+            +-----------+        +-------------+
| Rundeck |             | GitHub |            |  Jenkins  |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

---

## New Relic

A real-time performance management and monitoring platform.

---

![fit](http://c179631.r31.cf0.rackcdn.com/newrelic_snapshot.jpg)

---

![fit](http://newrelic.com/assets/pages/application_monitoring/screens/screen_deployment-0cd60d04ed34f1c1063096efa945664e.jpg)

---

## Logstash

A tool for managing events and logs built on top of elasticsearch.

---

### Kibana

Visualization platform for elasticsearch.

---

![fit](http://www.elasticsearch.org/content/uploads/2014/03/Screen-Shot-2014-02-25-at-4.42.52-PM.png)

---

## Slack

Group communication tool with support for internal/private chat and instant messaging.

Integrates well with other tools in the stack.

---

![fit](https://s3.amazonaws.com/uploads.hipchat.com/68570/490459/PBVlrIpOsPmTrLK/slack.png)

---

# Thank you!

---

# References

[Pro Git](http://git-scm.com/book/en)
[A Visual Git Reference](http://marklodato.github.io/visual-git-guide/index-en.html)
[Git Hooks](http://githooks.com/)
[Git Gui](http://git-scm.com/docs/git-gui)
