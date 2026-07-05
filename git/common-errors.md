# Common Git Errors

This document contains common Git errors that I may encounter and their solutions.

---

# Error: failed to push some refs

## Cause

The remote repository contains commits that are not present in your local repository.

## Error Message

```text
error: failed to push some refs to '<repository-url>'
```

## Solution

Pull the latest changes and then push again.

```bash
git pull origin main
git push origin main
```

---

# Error: remote origin already exists

## Cause

A remote named `origin` has already been added.

## Error Message

```text
error: remote origin already exists.
```

## Solution

Check existing remotes.

```bash
git remote -v
```

Remove the existing remote.

```bash
git remote remove origin
```

Add the correct remote.

```bash
git remote add origin <repository-url>
```

---

# Error: Merge Conflict

## Cause

The same lines of code were modified in different branches.

## Error Message

```text
CONFLICT (content): Merge conflict in <file-name>
```

## Solution

1. Open the conflicted file.
2. Resolve the conflict manually.
3. Save the file.
4. Stage the file.

```bash
git add .
```

5. Commit the merge.

```bash
git commit -m "Resolve merge conflict"
```

---

# Error: Detached HEAD

## Cause

You checked out a commit instead of a branch.

## Error Message

```text
You are in 'detached HEAD' state.
```

## Solution

Switch back to a branch.

```bash
git switch main
```

Or create a new branch to keep your changes.

```bash
git switch -c new-branch
```

---

# Error: Nothing to Commit

## Cause

No changes have been made or all changes have already been committed.

## Error Message

```text
nothing to commit, working tree clean
```

## Solution

Check the repository status.

```bash
git status
```

If you expected changes, verify that the files were saved before committing.

---

# Error: Untracked Files

## Cause

Git has detected new files that are not being tracked.

## Error Message

```text
Untracked files:
```

## Solution

Stage the files.

```bash
git add .
```

or

```bash
git add <file-name>
```

---

# Error: Changes Not Staged for Commit

## Cause

Files have been modified but have not been staged.

## Error Message

```text
Changes not staged for commit:
```

## Solution

Stage the modified files.

```bash
git add .
```

Then commit them.

```bash
git commit -m "Your commit message"
```

---

# Error: Branch Already Exists

## Cause

Trying to create a branch with a name that already exists.

## Error Message

```text
fatal: A branch named '<branch-name>' already exists.
```

## Solution

Switch to the existing branch.

```bash
git switch <branch-name>
```

Or choose a different branch name.

---

# Error: Repository Not Found

## Cause

The repository URL is incorrect or you do not have access.

## Error Message

```text
remote: Repository not found.
fatal: repository '<repository-url>' not found
```

## Solution

- Verify the repository URL.
- Check that you have permission to access the repository.
- Confirm that you are signed in to the correct GitHub account.

Check the configured remote.

```bash
git remote -v
```

---

# Useful Troubleshooting Commands

## Check repository status

```bash
git status
```

---

## View configured remotes

```bash
git remote -v
```

---

## View commit history

```bash
git log --oneline
```

---

## Check current branch

```bash
git branch
```

---

## Check Git configuration

```bash
git config --list
```