# Development processes

## Create/change component in storybook
1. Create/change component in storybook

2. Add component to storybook (create appropriate file *.stories.tsx)

3. Add unit tests to component (think about weak spots)

4. Check component in storybook view

5. All tests should be successful

6. Notify all developers who use library


## Implement feature
1. Create branch which contains issue number and short description. Example
```GF-7/uml-models`````

2. Implement feature in appropriate branch

3. Create commit which name contains issue type, issue number with "#" symbol and short issue description. Example
```feat: #7 Create UML diagram with models for room```
```feat: #7 Create UML diagram with models for customer```

3. Merge (or pull --rebase) changes from main and resolve conflicts

4. All tests should be successful

5. All modules could be build

6. Push branch to remote repo

7. Create PR to main. PR name should contains issue number with "#" symbol and full issue name. Example
```feat: #7 Create UML diagram with models for project in draw.io"```

8. Wait for at least one approve from anyone

9. Resolve all conversations in PR (maybe additional changes required)

10. Squosh to main
