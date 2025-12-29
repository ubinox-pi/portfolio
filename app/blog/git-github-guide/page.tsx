"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Copy, Check, GitBranch, GitCommit, GitMerge, GitPullRequest, Terminal, FolderTree, Users, Zap, Shield, AlertTriangle, Rocket } from "lucide-react";
import { useState } from "react";

// Git orange and GitHub dark theme
const gitColor = "#F05032";
const githubColor = "#181717";

interface CodeBlockProps {
    code: string;
    language?: string;
    title?: string;
}

function CodeBlock({ code, language = "bash", title }: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-3 md:my-4">
            {title && (
                <div className="bg-zinc-800 text-gray-400 text-xs px-3 md:px-4 py-2 rounded-t-lg border-b border-zinc-700 font-mono truncate">
                    {title}
                </div>
            )}
            <div className="absolute top-2 right-2 z-10">
                <button
                    onClick={copyToClipboard}
                    className="p-1.5 md:p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                    title="Copy code"
                >
                    {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-gray-400" />}
                </button>
            </div>
            <pre className={`bg-[#1e1e1e] ${title ? 'rounded-b-lg' : 'rounded-lg'} p-3 md:p-4 overflow-x-auto border border-zinc-700`}>
                <code className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre-wrap break-words md:whitespace-pre md:break-normal">{code}</code>
            </pre>
        </div>
    );
}

interface CommandCardProps {
    title: string;
    command: string;
    description: string;
    color?: string;
}

function CommandCard({ title, command, description, color = gitColor }: CommandCardProps) {
    return (
        <div className="bg-zinc-900/50 border rounded-lg p-3 md:p-4 hover:border-opacity-50 transition-colors" style={{ borderColor: `${color}30` }}>
            <h4 className="font-semibold mb-2 text-sm md:text-base" style={{ color }}>{title}</h4>
            <CodeBlock code={command} />
            <p className="text-gray-400 text-xs md:text-sm">{description}</p>
        </div>
    );
}

// JSON-LD Structured Data
function BlogJsonLd() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "Git & GitHub Mastery: Complete Developer Guide",
        "description": "Master Git and GitHub with 100+ commands, branching strategies, merge vs rebase, pull requests, and team collaboration workflows.",
        "image": "https://ramjeeprasad.online/java.png",
        "author": {
            "@type": "Person",
            "name": "Ramjee Prasad",
            "url": "https://ramjeeprasad.online"
        },
        "publisher": {
            "@type": "Person",
            "name": "Ramjee Prasad"
        },
        "datePublished": "2025-12-15",
        "dateModified": "2025-12-15",
        "mainEntityOfPage": "https://ramjeeprasad.online/blog/git-github-guide",
        "keywords": "Git, GitHub, version control, branching, merge, rebase, pull request"
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ramjeeprasad.online" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://ramjeeprasad.online/blog" },
            { "@type": "ListItem", "position": 3, "name": "Git & GitHub Guide", "item": "https://ramjeeprasad.online/blog/git-github-guide" }
        ]
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        </>
    );
}

export default function GitGitHubGuidePage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] py-16 px-4 md:px-8">
            <BlogJsonLd />
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent mb-8 transition-colors">
                    <ArrowLeft size={18} />
                    Back to Portfolio
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-12"
                >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                        <div className="flex gap-2">
                            <div className="p-2 md:p-3 rounded-xl bg-[#F05032]/20 border border-[#F05032]/30">
                                <GitBranch size={24} className="text-[#F05032] md:w-7 md:h-7" />
                            </div>
                            <div className="p-2 md:p-3 rounded-xl bg-zinc-800 border border-zinc-600">
                                <GitPullRequest size={24} className="text-white md:w-7 md:h-7" />
                            </div>
                        </div>
                        <div>
                            <span className="text-accent text-xs md:text-sm font-mono">DevOps / Version Control</span>
                            <h1 className="text-2xl md:text-4xl font-bold text-white">
                                Git & GitHub Mastery
                            </h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-base md:text-lg">
                        The complete guide to version control. Master Git commands, branching strategies, collaboration workflows, and GitHub features.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-4 text-xs md:text-sm text-gray-500">
                        <span>By Ramjee Prasad</span>
                        <span>•</span>
                        <span>December 15, 2025</span>
                        <span>•</span>
                        <span>20 min read</span>
                    </div>
                </motion.div>

                {/* Table of Contents */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-zinc-900/50 border border-white/10 rounded-xl p-4 md:p-6 mb-8 md:mb-12"
                >
                    <h2 className="text-lg md:text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <FolderTree size={18} className="text-accent" />
                        Table of Contents
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="#git-basics" className="hover:text-[#F05032] transition-colors">1. Git Fundamentals</a></li>
                            <li><a href="#git-config" className="hover:text-[#F05032] transition-colors">2. Git Configuration</a></li>
                            <li><a href="#basic-commands" className="hover:text-[#F05032] transition-colors">3. Essential Commands</a></li>
                            <li><a href="#branching" className="hover:text-[#F05032] transition-colors">4. Branching & Merging</a></li>
                            <li><a href="#merge-vs-rebase" className="hover:text-[#F05032] transition-colors">5. Merge vs Rebase</a></li>
                        </ul>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#remote" className="hover:text-[#F05032] transition-colors">6. Remote Repositories</a></li>
                            <li><a href="#github" className="hover:text-[#F05032] transition-colors">7. GitHub Essentials</a></li>
                            <li><a href="#undo" className="hover:text-[#F05032] transition-colors">8. Undoing Changes</a></li>
                            <li><a href="#workflows" className="hover:text-[#F05032] transition-colors">9. Git Workflows</a></li>
                            <li><a href="#best-practices" className="hover:text-accent transition-colors">10. Best Practices</a></li>
                        </ul>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="space-y-16">
                    {/* Git Basics */}
                    <section id="git-basics">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <GitBranch size={24} className="text-[#F05032]" />
                            1. Git Fundamentals
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Git is a <strong className="text-white">distributed version control system</strong> that tracks changes in your code.
                            Unlike centralized systems, every developer has a full copy of the repository.
                        </p>

                        <div className="bg-zinc-900/50 border border-[#F05032]/20 rounded-lg p-6 mb-6">
                            <h3 className="text-[#F05032] font-bold mb-4">Key Concepts</h3>
                            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
                                <div><strong className="text-white">Repository:</strong> Project folder tracked by Git</div>
                                <div><strong className="text-white">Commit:</strong> Snapshot of your changes</div>
                                <div><strong className="text-white">Branch:</strong> Parallel version of your code</div>
                                <div><strong className="text-white">Remote:</strong> Server-hosted repository (GitHub)</div>
                                <div><strong className="text-white">Clone:</strong> Copy of a remote repository</div>
                                <div><strong className="text-white">Pull/Push:</strong> Sync with remote</div>
                            </div>
                        </div>

                        <CodeBlock
                            title="Initialize a New Repository"
                            code={`# Create new repository
git init

# Or clone existing repository
git clone https://github.com/username/repo.git

# Clone with specific branch
git clone -b develop https://github.com/username/repo.git`}
                        />
                    </section>

                    {/* Git Config */}
                    <section id="git-config">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Terminal size={24} className="text-[#F05032]" />
                            2. Git Configuration
                        </h2>
                        <div className="grid gap-4">
                            <CommandCard
                                title="Set User Identity"
                                command={`# Set your name (required for commits)
git config --global user.name "Ramjee Prasad"

# Set your email
git config --global user.email "ashish23481@gmail.com"

# View all config
git config --list`}
                                description="Configure your identity for all repositories on this machine."
                            />
                            <CommandCard
                                title="SSH Key Setup"
                                command={`# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Start SSH agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key to clipboard (add to GitHub)
cat ~/.ssh/id_ed25519.pub`}
                                description="Set up SSH for secure authentication with GitHub."
                            />
                            <CommandCard
                                title="Useful Aliases"
                                command={`# Create shortcuts for common commands
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all"`}
                                description="Save time with custom command shortcuts."
                            />
                        </div>
                    </section>

                    {/* Basic Commands */}
                    <section id="basic-commands">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <GitCommit size={24} className="text-[#F05032]" />
                            3. Essential Commands
                        </h2>
                        <div className="grid gap-4">
                            <CommandCard
                                title="Check Status"
                                command={`git status

# Short format
git status -s`}
                                description="View the state of your working directory and staging area."
                            />
                            <CommandCard
                                title="Stage Changes"
                                command={`# Stage specific file
git add filename.txt

# Stage all changes
git add .

# Stage all changes including deletions
git add -A

# Interactive staging
git add -p`}
                                description="Add changes to the staging area before committing."
                            />
                            <CommandCard
                                title="Commit Changes"
                                command={`# Commit with message
git commit -m "Add user authentication feature"

# Commit all tracked changes
git commit -am "Quick fix for login bug"

# Amend last commit
git commit --amend -m "Updated commit message"

# Empty commit (useful for triggering CI)
git commit --allow-empty -m "Trigger build"`}
                                description="Save your staged changes with a descriptive message."
                            />
                            <CommandCard
                                title="View History"
                                command={`# View commit log
git log

# One line per commit
git log --oneline

# Graph view with branches
git log --oneline --graph --all

# Show last 5 commits
git log -5

# Show commits by author
git log --author="Ramjee"`}
                                description="Browse the commit history of your repository."
                            />
                            <CommandCard
                                title="View Differences"
                                command={`# Unstaged changes
git diff

# Staged changes
git diff --staged

# Between branches
git diff main..feature-branch

# Specific file
git diff filename.txt`}
                                description="Compare changes between commits, branches, or files."
                            />
                            <CommandCard
                                title="Stash Changes"
                                command={`# Save work in progress
git stash

# With description
git stash push -m "WIP: new feature"

# List stashes
git stash list

# Apply latest stash
git stash pop

# Apply specific stash
git stash apply stash@{2}

# Drop stash
git stash drop stash@{0}`}
                                description="Temporarily save uncommitted changes."
                            />
                        </div>
                    </section>

                    {/* Branching */}
                    <section id="branching">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <GitBranch size={24} className="text-[#F05032]" />
                            4. Branching & Merging
                        </h2>
                        <div className="grid gap-4">
                            <CommandCard
                                title="Branch Operations"
                                command={`# List branches
git branch

# List all (including remote)
git branch -a

# Create new branch
git branch feature-login

# Switch to branch
git checkout feature-login

# Create and switch (shortcut)
git checkout -b feature-login

# Modern way (Git 2.23+)
git switch -c feature-login

# Delete branch
git branch -d feature-login

# Force delete
git branch -D feature-login`}
                                description="Create, list, switch, and delete branches."
                            />
                            <CommandCard
                                title="Merge Branches"
                                command={`# Switch to target branch
git checkout main

# Merge feature branch
git merge feature-login

# Merge with commit message
git merge feature-login -m "Merge feature-login into main"

# Merge without fast-forward
git merge --no-ff feature-login

# Abort merge
git merge --abort`}
                                description="Combine changes from different branches."
                            />
                        </div>
                    </section>

                    {/* Merge vs Rebase */}
                    <section id="merge-vs-rebase">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <GitMerge size={24} className="text-[#F05032]" />
                            5. Merge vs Rebase
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-zinc-900/50 border border-blue-500/30 rounded-lg p-6">
                                <h3 className="text-blue-400 font-bold mb-3">Git Merge</h3>
                                <p className="text-gray-400 text-sm mb-4">Creates a merge commit, preserves history exactly as it happened.</p>
                                <CodeBlock code={`git checkout main
git merge feature`} />
                                <p className="text-gray-500 text-xs">✓ Safe, non-destructive<br />✓ Shows complete history</p>
                            </div>
                            <div className="bg-zinc-900/50 border border-purple-500/30 rounded-lg p-6">
                                <h3 className="text-purple-400 font-bold mb-3">Git Rebase</h3>
                                <p className="text-gray-400 text-sm mb-4">Re-applies commits on top of another branch, creates linear history.</p>
                                <CodeBlock code={`git checkout feature
git rebase main`} />
                                <p className="text-gray-500 text-xs">✓ Clean, linear history<br />⚠ Don't rebase public branches</p>
                            </div>
                        </div>

                        <CommandCard
                            title="Interactive Rebase"
                            command={`# Rebase last 3 commits
git rebase -i HEAD~3

# Commands in interactive mode:
# pick   = use commit
# reword = use commit, edit message
# squash = meld into previous commit
# drop   = remove commit`}
                            description="Modify, combine, or remove commits in your history."
                        />
                    </section>

                    {/* Remote */}
                    <section id="remote">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Zap size={24} className="text-[#F05032]" />
                            6. Remote Repositories
                        </h2>
                        <div className="grid gap-4">
                            <CommandCard
                                title="Remote Management"
                                command={`# View remotes
git remote -v

# Add remote
git remote add origin https://github.com/user/repo.git

# Change remote URL
git remote set-url origin git@github.com:user/repo.git

# Remove remote
git remote remove origin`}
                                description="Manage connections to remote repositories."
                            />
                            <CommandCard
                                title="Push & Pull"
                                command={`# Push to remote
git push origin main

# Push and set upstream
git push -u origin main

# Force push (use carefully!)
git push --force-with-lease

# Pull changes
git pull origin main

# Pull with rebase
git pull --rebase origin main`}
                                description="Sync your local repository with the remote."
                            />
                            <CommandCard
                                title="Fetch & Prune"
                                command={`# Fetch all branches
git fetch origin

# Fetch and prune deleted branches
git fetch --prune

# Delete local branches that are gone on remote
git branch -vv | grep ': gone]' | awk '{print $1}' | xargs git branch -d`}
                                description="Download remote changes without merging."
                            />
                        </div>
                    </section>

                    {/* GitHub */}
                    <section id="github">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <GitPullRequest size={24} className="text-white" />
                            7. GitHub Essentials
                        </h2>
                        <div className="grid gap-4">
                            <CommandCard
                                title="Fork & Clone Workflow"
                                command={`# 1. Fork repo on GitHub (web)

# 2. Clone your fork
git clone git@github.com:YOUR_USER/repo.git

# 3. Add upstream remote
git remote add upstream https://github.com/ORIGINAL_OWNER/repo.git

# 4. Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main`}
                                description="Contribute to open source projects."
                                color="#181717"
                            />
                            <CommandCard
                                title="Pull Request Workflow"
                                command={`# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "Add new feature"

# 3. Push to your fork
git push origin feature/new-feature

# 4. Create PR on GitHub (web)

# 5. After PR merge, cleanup
git checkout main
git pull origin main
git branch -d feature/new-feature`}
                                description="Standard workflow for contributing via pull requests."
                                color="#181717"
                            />
                            <div className="bg-zinc-900/50 border border-zinc-700 rounded-lg p-6">
                                <h4 className="text-white font-semibold mb-3">GitHub CLI (gh)</h4>
                                <CodeBlock code={`# Install: https://cli.github.com

# Login
gh auth login

# Create PR from terminal
gh pr create --title "Add feature" --body "Description"

# List PRs
gh pr list

# Checkout PR locally
gh pr checkout 123

# Merge PR
gh pr merge 123`} />
                            </div>
                        </div>
                    </section>

                    {/* Undoing Changes */}
                    <section id="undo">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <AlertTriangle size={24} className="text-amber-500" />
                            8. Undoing Changes
                        </h2>
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6">
                            <p className="text-amber-400 text-sm">
                                ⚠️ <strong>Warning:</strong> Some of these commands rewrite history. Never rewrite history on shared/public branches!
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <CommandCard
                                title="Discard Local Changes"
                                command={`# Discard changes in working directory
git checkout -- filename.txt

# Discard all changes
git checkout -- .

# Modern way
git restore filename.txt`}
                                description="Discard uncommitted changes to files."
                                color="#EAB308"
                            />
                            <CommandCard
                                title="Unstage Files"
                                command={`# Unstage file
git reset HEAD filename.txt

# Modern way
git restore --staged filename.txt

# Unstage all
git reset HEAD`}
                                description="Remove files from staging area without losing changes."
                                color="#EAB308"
                            />
                            <CommandCard
                                title="Reset Commits"
                                command={`# Soft reset (keep changes staged)
git reset --soft HEAD~1

# Mixed reset (keep changes unstaged)
git reset HEAD~1

# Hard reset (discard everything!)
git reset --hard HEAD~1

# Reset to specific commit
git reset --hard abc1234`}
                                description="Move HEAD to a different commit. Be careful with --hard!"
                                color="#EAB308"
                            />
                            <CommandCard
                                title="Revert Commits"
                                command={`# Create new commit that undoes changes
git revert HEAD

# Revert specific commit
git revert abc1234

# Revert multiple commits
git revert HEAD~3..HEAD`}
                                description="Safely undo commits by creating a new commit (safe for shared branches)."
                                color="#EAB308"
                            />
                        </div>
                    </section>

                    {/* Workflows */}
                    <section id="workflows">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Users size={24} className="text-[#F05032]" />
                            9. Git Workflows
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-zinc-900/50 border border-green-500/30 rounded-lg p-6">
                                <h3 className="text-green-400 font-bold mb-3">GitHub Flow (Simple)</h3>
                                <p className="text-gray-400 text-sm mb-4">Best for continuous deployment. Simple and effective.</p>
                                <CodeBlock code={`main ──────●──────●──────●──────●──────
             \\            /
feature       ●────●────●`} />
                                <ol className="text-gray-400 text-sm mt-4 space-y-1 list-decimal list-inside">
                                    <li>Create branch from main</li>
                                    <li>Make commits</li>
                                    <li>Open Pull Request</li>
                                    <li>Review & Merge</li>
                                    <li>Delete branch</li>
                                </ol>
                            </div>

                            <div className="bg-zinc-900/50 border border-blue-500/30 rounded-lg p-6">
                                <h3 className="text-blue-400 font-bold mb-3">Git Flow (Release-based)</h3>
                                <p className="text-gray-400 text-sm mb-4">Best for scheduled releases with multiple environments.</p>
                                <CodeBlock code={`main    ─────●─────────────────●─────
              \\               /
release        ●─────●───────●
                \\     \\     /
develop  ●──●───●──●───●───●───●──
          \\    /  \\       /
feature    ●──●    ●─────●`} />
                                <div className="text-gray-400 text-sm mt-4">
                                    <strong>Branches:</strong> main, develop, feature/*, release/*, hotfix/*
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section id="best-practices">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <Rocket size={24} className="text-accent" />
                            10. Best Practices
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-zinc-900/50 border border-[#F05032]/20 rounded-lg p-6">
                                <h3 className="text-[#F05032] font-bold mb-4 flex items-center gap-2">
                                    <GitCommit size={20} />
                                    Commit Messages
                                </h3>
                                <CodeBlock code={`# Good commit message format
<type>(<scope>): <subject>

<body>

<footer>

# Examples:
feat(auth): add JWT authentication
fix(api): resolve null pointer in user service
docs(readme): update installation steps
refactor(core): simplify database queries`} />
                            </div>
                            <div className="bg-zinc-900/50 border border-green-500/20 rounded-lg p-6">
                                <h3 className="text-green-400 font-bold mb-4 flex items-center gap-2">
                                    <Shield size={20} />
                                    General Tips
                                </h3>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>✓ Commit early, commit often</li>
                                    <li>✓ Write meaningful commit messages</li>
                                    <li>✓ Use feature branches</li>
                                    <li>✓ Pull before you push</li>
                                    <li>✓ Never commit secrets/passwords</li>
                                    <li>✓ Use .gitignore for build files</li>
                                    <li>✓ Review code before merging</li>
                                    <li>✓ Keep commits atomic (one thing per commit)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-6 bg-zinc-900/50 border border-white/10 rounded-lg p-6">
                            <h4 className="text-white font-semibold mb-4">.gitignore Template</h4>
                            <CodeBlock
                                title=".gitignore"
                                code={`# IDE
.idea/
.vscode/
*.iml

# Build
target/
build/
dist/
node_modules/

# Environment
.env
.env.local
*.log

# OS files
.DS_Store
Thumbs.db

# Compiled
*.class
*.jar
*.war`}
                            />
                        </div>
                    </section>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-white/10"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            Written by <span className="text-accent">Ramjee Prasad</span> • Backend Developer
                        </p>
                        <Link href="/" className="text-accent hover:underline text-sm">
                            ← Back to Portfolio
                        </Link>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
