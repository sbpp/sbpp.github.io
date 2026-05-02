# SourceBans++ Website [![Build and Deploy](https://github.com/sbpp/sbpp.github.io/actions/workflows/deploy.yml/badge.svg?branch=src)](https://github.com/sbpp/sbpp.github.io/actions/workflows/deploy.yml)

### Adding Articles

- Fork this repository
- From Hugo CLI, generate appropriate kind of article using the archetypes provided, to the corresponding folder
- Fill in the front matter and content
- Submit pull request

### Contribute to Translation

- Fork this repository
- Translate the files in `content/` by making another copy of the article and appending to the extension
  - Ex: `content/docs/updating.md` -> `content/docs/updating.fr.md`
  - You may also explicitly set `translationKey` in front matter within the article for good measures
- Create a new block within `config.toml` adding the language translations for the global variables
- Submit pull request

##### For more information, view [Hugo's Documentation](https://gohugo.io/documentation/)
