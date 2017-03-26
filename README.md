# Projeto TCC do Curso de Automação Industrial

[![licence mit](https://img.shields.io/badge/licence-MIT-blue.svg)](https://github.com/tccautomacao/14916/blob/master/LICENSE.md)

> :books: :pencil: :bulb:.


## Stack

- Task Runner: [Gulp](http://gulpjs.com/)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)

## Run the project locally

**1 -** Prepare the environment:

```sh
$ npm install -g gulp-cli
```

**2 -** Clone the project and install the dependencies:

```sh
$ git clone https://github.com/tccautomacao/14916.git
$ cd 14916
$ npm install
```
**3 -** Run static server and livereload:

```sh
$ gulp server
```

## Folders Structure

	.
	├── README.md
	├── LICENSE.md
	├── CONTRIBUTING.md
	├── out/
	├── src/
	|   ├── assets/
	|   |   ├── img/
	|   |   ├── scripts/
	|   |   |   └── script.js
	|   |   └── styles/
	|   |       └── style.styl
	|   ├── partials/
	|   |   ├── footer.pug
	|   |   └── header.pug
	|   ├── layouts/
	|   |   └── default.pug
	|   └── index.pug
	├── gulpfile.js
	├── package.json
	├── .editorconfig
	└── .gitignore

## Automatic Tasks

- `$ gulp build`: Compile, concat and minify all files.
- `$ gulp server`: Watch the files to build and start a static server.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [roadmap](https://github.com/tccautomacao/14916/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/tccautomacao/14916/blob/master/CONTRIBUTING.md).

## History
See [Releases](https://github.com/tccautomacao/14916/releases) for detailed changelog.

## License
[MIT License](https://github.com/tccautomacao/14916/blob/master/LICENSE.md)
