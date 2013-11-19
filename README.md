# generator-scalatra
[![Build Status](https://secure.travis-ci.org/peter-vilja/generator-scalatra.png?branch=master)](https://travis-ci.org/peter-vilja/generator-scalatra)

**Generates a basic structure for Scalatra REST Application.**

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
        |   |   |   ├── example
        |   |   |       ├── app
        |   |   |           ├── controllers
        |   |   |               ├── MessageController.scala
        |   |   └── ScalatraBootstrap.scala
        |   └── webapp
        |       ├── WEB-INF
        |           ├── web.xml
        └── test
            ├── scala
                ├── com
                    ├── example
                        ├── app
                            ├── controllers
                                ├── MessageControllerSpec.scala


*A generator for [Yeoman](http://yeoman.io).*

## Getting Started

### What is [Yeoman](http://yeoman.io)?

```
$ npm install -g yo
```

### Usage

To install generator-scalatra from npm, run:

```
$ npm install -g generator-scalatra
```

Or search generator-scalatra under yeoman.

Make a new directory and ```cd``` into it:

```
mkdir new-project && cd $_
```

Finally, initiate the generator:

```
$ yo scalatra
```

#### Start and scan for changes:

```sh
$ ./sbt
> ~;container:start; container:reload /
```

Check it out at **http://localhost:8080/messages**

#### Run tests

```
$ ./sbt
> test
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
