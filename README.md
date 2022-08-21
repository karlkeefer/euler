# Euler

Each problem can be worked on in a separate sub-directory. Make a pull request if you have a new solution or improvements to an existing solution.

## Example git usage
Below is a rough outline of a typical workflow for creating a new branch and pushing code back to github.

```bash
# pull down any changes from github
git pull

# make sure you're on the master branch before creating a new branch, otherwise you'll branch from the wrong code
git checkout master

# make a new branch, ideally indicating what you're working on, in this fictional example it's problem 23
git checkout -b problem-23

# write some code

# add any new files in the current directory (that's what the dot means) to git
git add .

# commit your changes
git commit -a -m "factorization logic for problem 23"

# push your branch to github, setting github as the "upstream" with -u flag
git push -u origin problem-23

# optionally create a pull request at this point so that you can share your changeset with others

# write some more code based on feedback
git commit -a -m "more code for problem 23"

# push those changes to your PR (no need to add -u flag since the upstream is already set)
git push
```
