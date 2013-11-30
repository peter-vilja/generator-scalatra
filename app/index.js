'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var ScalatraGenerator = module.exports = function ScalatraGenerator() {
  yeoman.generators.Base.apply(this, arguments);
};

util.inherits(ScalatraGenerator, yeoman.generators.Base);

ScalatraGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'projectName',
    message: 'What do you want to call your project?',
    default: path.basename(process.cwd())
  }, {
    name: 'organization',
    message: 'Organization name?',
    default: 'com.example'
  }];

  this.prompt(prompts, function (props) {
    this.projectName = props.projectName;
    this.organization = props.organization;

    var promptRest = [{
      name: 'package',
      message: props.organization + '.[Package name]?',
      default: 'app'
    }, {
      name: 'servletName',
      message: 'Servlet name?',
      default: 'MessageController'
    }, {
      name: 'mongo',
      message: 'Add Casbah for MongoDB?',
      type: 'confirm'
    }];

    this.prompt(promptRest, function (properties) {
      this.package = props.organization + '.' + checkPackage(properties.package);
      this.servletName = properties.servletName;
      this.mongo = properties.mongo;
      cb();
    }.bind(this));

    function checkPackage(pkg) {
      return pkg.substring(0, props.organization.length) === props.organization ?
        pkg.slice(props.organization.length + 1) : pkg;
    }

  }.bind(this));
};

ScalatraGenerator.prototype.app = function app() {

  function makePath(path) {
    return path.replace(/\./g, '/');
  }

  this.mkdir('src/main/resources');
  this.mkdir('src/main/scala/' + makePath(this.package));
  this.mkdir('src/main/webapp/WEB-INF');
  this.mkdir('src/test/scala/' + makePath(this.package));
  this.mkdir('project');

  this.template('_build.scala', 'project/build.scala');
  this.copy('build.properties', 'project/build.properties');
  this.copy('plugins.sbt', 'project/plugins.sbt');
  this.copy('sbt', 'sbt');
  this.copy('README.md', 'README.md');
  this.template('_ScalatraBootstrap.scala', 'src/main/scala/ScalatraBootstrap.scala');
  this.template('_ScalatraServlet.scala', 'src/main/scala/' + makePath(this.package) + '/controllers/' + this.servletName + '.scala');
  if (this.mongo) {
    this.template('_MessageRepository.scala', 'src/main/scala/' + makePath(this.package) + '/repositories/MessageRepository.scala');
  }
  this.template('_ScalatraServletSpec.scala', 'src/test/scala/' + makePath(this.package) + '/controllers/' + this.servletName + 'Spec.scala');
  this.copy('web.xml', 'src/main/webapp/WEB-INF/web.xml');
};

