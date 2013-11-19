/*global describe, beforeEach, before, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;
var chai = require('chai');
var should = chai.should();
var expect = chai.expect;


describe('scalatra generator', function () {
  before(createGenerator);

  function createGenerator(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('scalatra:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  }

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'sbt',
      'project/plugins.sbt',
      'project/build.properties',
      'project/build.scala',
      'src/main/scala/ScalatraBootstrap.scala',
      'src/main/scala/com/peter/app/controllers/MessageServlet.scala',
      'src/main/webapp/WEB-INF/web.xml'
    ];

    helpers.mockPrompt(this.app, {
      'projectName': 'scalatra-app',
      'organization': 'com.peter',
      'package': 'app',
      'servletName': 'MessageServlet'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });

  it('writes correct values', function (done) {
    var build = this.app.readFileAsString('project/build.scala');
    build.should.be.a('string');
    expect(build).to.contain('val Organization = "com.peter"');
    expect(build).to.contain('val Name = "scalatra-app"');

    var bootstrap = this.app.readFileAsString('src/main/scala/ScalatraBootstrap.scala');
    bootstrap.should.be.a('string');
    expect(bootstrap).to.contain('context.mount(new MessageServlet, "/")');
    expect(bootstrap).to.contain('import com.peter.app._');

    testFilesUnderPackageStructure(this.app);
    
    done();
  });

  function testFilesUnderPackageStructure(app) {
    var servlet = app.readFileAsString('src/main/scala/com/peter/app/controllers/MessageServlet.scala');
    servlet.should.be.a('string');
    expect(servlet).to.contain('package com.peter.app');
    expect(servlet).to.contain('class MessageServlet');

    var spec = app.readFileAsString('src/test/scala/com/peter/app/controllers/MessageServletSpec.scala');
    spec.should.be.a('string');
    expect(spec).to.contain('package com.peter.app');
    expect(spec).to.contain('class MessageServletSpec');
    expect(spec).to.contain('addServlet(classOf[MessageServlet], "/*")')
  }

  before(createGenerator);

  it("creates correct package structure even when instructions are misundrestood", function (done) {
    var expected = [
      // add files you expect to exist here.
      'sbt',
      'project/plugins.sbt',
      'project/build.properties',
      'project/build.scala',
      'src/main/scala/ScalatraBootstrap.scala',
      'src/main/scala/com/peter/app/controllers/MessageServlet.scala',
      'src/main/webapp/WEB-INF/web.xml'
    ];

    helpers.mockPrompt(this.app, {
      'projectName': 'scalatra-app',
      'organization': 'com.peter',
      'package': 'com.peter.app',
      'servletName': 'MessageServlet'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
    });
    
    testFilesUnderPackageStructure(this.app);
    done();
  });  
});
