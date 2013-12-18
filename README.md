# generator-scalatra
[![Build Status](https://secure.travis-ci.org/peter-vilja/generator-scalatra.png?branch=master)](https://travis-ci.org/peter-vilja/generator-scalatra)
[![NPM version](https://badge.fury.io/js/generator-scalatra.png)](http://badge.fury.io/js/generator-scalatra)

**Generates a basic structure for Scalatra REST Application and includes Casbah for MongoDB if you wish.**

An example structure of generated project.

    .
    ├── project
    │   ├── build.properties
    │   └── build.scala
    |   └── plugins.sbt
    ├── README.md
    ├── sbt
    ├── src
        ├── main
        |   ├── resources
        |   └── scala
        |   |   ├── com
        |   |   |   └── example
        |   |   |       └── app
        |   |   |           └── controllers
        |   |   |               └── MessageController.scala
        |   |   └── ScalatraBootstrap.scala
        |   └── webapp
        |       └── WEB-INF
        |           └── web.xml
        └── test
            └── scala
                └── com
                    └── example
                        └── app
                            └── controllers
                                └── MessageControllerSpec.scala


*A generator for [Yeoman](http://yeoman.io).*

## Getting Started

### What is [Yeoman](http://yeoman.io)?

```sh
$ npm install -g yo
```

### Usage

To install generator-scalatra from npm, run:

```sh
$ npm install -g generator-scalatra
```

Or search generator-scalatra under yeoman.

Make a new directory and ```cd``` into it:

```sh
mkdir new-project && cd $_
```

Finally, initiate the generator:

```sh
$ yo scalatra
```

#### If you selected MongoDB you need to have MongoDB running, if not you can skip this

```sh
$ mongod
```
**Create db, collection and insert new message (Optional).**

Application will use project name to create db, if the db doesn´t already exist.

```sh
$ mongo
> use <project name>
> db.createCollection('messages')
> db.messages.insert({body: 'Hello Mongo World!'})
```

#### Start and scan for changes:

```sh
$ ./sbt
> ~;container:start; container:reload /
```

Check it out at **http://localhost:8080/messages**

#### Run tests

```sh
$ ./sbt
> test
```

## Changelog

This Changelog follows Semantic Versioning http://semver.org

* **0.4.0**
      * Included option for Casbah and MongoDB
      * Minor fixes to files´ package paths
* **0.3.2**
      * Fixed documentation
* **0.3.1**
      * Minor refactoring
* **0.3.0**
      * Add a 'controllers' folder
      * Renamed default servlet name
      * Improved documentation

## License

[MIT](http://en.wikipedia.org/wiki/MIT_License) @ Peter Vilja
