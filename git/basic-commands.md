# Git Basic Commands

## git init

### Purpose
Initialize a new Git repository in the current directory.

### Syntax

```bash
git init
```

### When to use
When starting a new project that isn't under Git version control.

---

## git status

### Purpose
Check the current status of the repository.

Shows:
- Modified files
- Staged files
- Untracked files
- Current branch

### Syntax

```bash
git status
```

### When to use
Before adding files, before committing, or whenever you're unsure about the repository's state.

---

## git add

### Purpose
Stage changes for the next commit.

### Syntax

```bash
git add .
```

or

```bash
git add filename
```

### When to use
After making changes and before committing.

---

## git commit

### Purpose
Save a snapshot of staged changes.

### Syntax

```bash
git commit -m "message"
```

### Example

```bash
git commit -m "docs: update arrays notes"
```

### When to use
After completing a logical unit of work.

---

## git log

### Purpose
View commit history.

### Syntax

```bash
git log --oneline
```

### When to use
To review previous commits or find a commit hash.