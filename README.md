# SourceBans++ Docs (deploy shell)

This repository is the GitHub Pages deploy target for the SourceBans++ documentation site at <https://sbpp.github.io/>.

**Source lives in [`sbpp/sourcebans-pp` under `docs/`](https://github.com/sbpp/sourcebans-pp/tree/main/docs).** Open PRs there.

Pages is configured to build from GitHub Actions (Settings → Pages → Source: GitHub Actions). The workflow in `.github/workflows/deploy.yml` checks out `sourcebans-pp@main`, builds `docs/`, and deploys via `actions/deploy-pages`. It runs on `repository_dispatch` from `sourcebans-pp` (event type `docs-changed`), on `workflow_dispatch`, and on a weekly schedule as a safety net.

## Local preview

To preview the docs locally, clone `sourcebans-pp` and run the Starlight dev server:

```sh
git clone https://github.com/sbpp/sourcebans-pp.git
cd sourcebans-pp/docs
npm install
npm run dev
```
