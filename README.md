# generator-scalatra

A generator for [Yeoman](http://yeoman.io).


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

Start and scan for changes:

```sh
$ ./sbt
> ~;container:start; container:reload /
```

Check it out at http://localhost:8080/messages

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
