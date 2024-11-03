
## How to run

First, generate `happy-css-modules-3.1.1.tgz`:

```bash
git clone git@github.com:mizdra/happy-css-modules.git
cd happy-css-modules
gh pr checkout 270
npm i
npm -w happy-css-modules run build
npm -w happy-css-modules pack
```

Then, run the following commands:

```bash
git clone git@github.com:mizdra/hcm-output-folder-test.git
cd hcm-output-folder-test
npm i
npm run gen
npm run lint
```
