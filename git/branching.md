# Git Branching

Branching allows you to work on new features or fixes without affecting the main branch. Once the work is complete, the branch can be merged back into the main branch.

---

# git branch

## Purpose

Displays all local branches in the repository. It also highlights the branch you are currently working on.

## Syntax

```bash
git branch
```

## Example

```bash
git branch
```

**Output**

```text
* main
  feature-login
  bugfix/navbar
```

## When to use

- To check which branches exist.
- To identify the current branch.
- Before switching to another branch.

---

# git switch

## Purpose

Switches from the current branch to an existing branch.

## Syntax

```bash
git switch <branch-name>
```

## Example

```bash
git switch main
```

or

```bash
git switch feature-login
```

## When to use

- When you want to continue working on another branch.
- Before merging changes.

---

# git switch -c

## Purpose

Creates a new branch and immediately switches to it.

## Syntax

```bash
git switch -c <branch-name>
```

## Example

```bash
git switch -c feature-login
```

## When to use

- When starting a new feature.
- When fixing a bug.
- When experimenting without affecting the main branch.

---

# git merge

## Purpose

Combines the changes from one branch into the current branch.

## Syntax

```bash
git merge <branch-name>
```

## Example

Suppose you're currently on the `main` branch.

```bash
git switch main
git merge feature-login
```

## When to use

- After completing work on a feature branch.
- To bring completed work into the main branch.

---

# git branch -d

## Purpose

Deletes a local branch that is no longer needed.

## Syntax

```bash
git branch -d <branch-name>
```

## Example

```bash
git branch -d feature-login
```

## When to use

- After the branch has been successfully merged.
- To keep the repository clean and organized.

> **Note:** Git will prevent deletion if the branch contains unmerged changes. Use `git branch -D <branch-name>` only if you are certain you want to force delete it.

---

# Typical Branching Workflow

```bash
# Check current branch
git branch

# Create and switch to a new branch
git switch -c feature-login

# Make your changes

# Stage changes
git add .

# Commit changes
git commit -m "feat: add login page"

# Switch back to main
git switch main

# Merge the feature branch
git merge feature-login

# Delete the feature branch
git branch -d feature-login
```

## Best Practices

- Create a new branch for every feature or bug fix.
- Use meaningful branch names such as:
  - `feature/login-page`
  - `feature/dashboard`
  - `bugfix/navbar`
  - `docs/update-readme`
- Merge only after testing your changes.
- Delete feature branches after they have been merged.