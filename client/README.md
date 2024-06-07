# IIIT Una Official Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Scripts](#scripts)
- [License](#license)
- [Author](#author)

## About

Indian Institute of Information Technology Una (IIIT, Una) is one of the Indian Institutes of Information Technology located at Vill. Saloh, Teh. Haroli, Distt. Una Himachal Pradesh

This is the official website of IIIT Una. It is built using [MERN].

## Usage

1.  Clone the repository.

```sh
git clone
```

2.  Install dependencies.

```sh
npm i
```

Windows users, please use `bash` or `git bash` to run the above command.

3.  Start development server.

```sh
npm run dev
```

**Note:** Make sure you are working on your own checked-out branch and not on the `master` branch.

## Git Guidlines

The project is configured with the following Git Hooks.

### Pre-commit

1. Runs `prettier` on the staged files.
   - All the files are formatted using `prettier`.
2. Runs `eslint` on the staged files.
   - All the files are linted using `eslint`.
   - All the errors and warnings are listed.
   - The commit is aborted if there are any errors.
3. Runs `commitlint` on the commit message.
   - The commit message is validated using `commitlint`.
   - The commit is aborted if the commit message does not follow the [commit format](./commitlint.config.js).

#### Format for commit messages

```sh
<type>: <subject>
```

The `<type>` must be one of the following:

- `feat`: A new feature.
- `fix`: A bug fix.
- `docs`: Documentation only changes.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation.

The `<subject>` must use [imperative, present tense](https://chris.beams.io/posts/git-commit/#imperative).

#### Examples

```sh
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|      Do not capitalize letters and do not add dot at the end.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

```sh
refactor: remove hat wobble
```

```sh
fix: prevent wobble when eating
```

```sh
docs: correct spelling of CHANGELOG
```

```sh
feat(lang): add polish language
```

## Scripts

```sh
# Run the app in the development mode.
npm run dev

# Builds the app for production to the build folder.
npm run build

```

## License

[MIT](LICENSE)

## Author

[IIIT Una](https://iiitu.ac.in)
