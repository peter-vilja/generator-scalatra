import sbt._
import Keys._
import org.scalatra.sbt._
import org.scalatra.sbt.PluginKeys._

object MyAppBuild extends Build {
  val Organization = "<%= organization %>"
  val Name = "<%= projectName %>"
  val Version = "0.1.0-SNAPSHOT"
  val ScalaVersion = "2.10.3"
  val ScalatraVersion = "2.2.2"

  lazy val project = Project (
    "<%= projectName %>",
    file("."),
    settings = Defaults.defaultSettings ++ com.earldouglas.xsbtwebplugin.WebPlugin.webSettings ++ Seq(
      organization := Organization,
      name := Name,
      version := Version,
      scalaVersion := ScalaVersion,
      resolvers += Classpaths.typesafeReleases,
      libraryDependencies ++= Seq(
        "org.scalatra" %% "scalatra" % ScalatraVersion,
        "org.scalatra" %% "scalatra-json" % ScalatraVersion,
        "org.scalatra" %% "scalatra-specs2" % ScalatraVersion % "test",
        "org.json4s" %% "json4s-jackson" % "3.1.0",
        "ch.qos.logback" % "logback-classic" % "1.0.6" % "runtime",<% if (mongo) { %>
        "org.mongodb" %% "casbah" % "2.6.2",<% } %>
        "org.eclipse.jetty" % "jetty-webapp" % "8.1.8.v20121106" % "container",
        "org.eclipse.jetty.orbit" % "javax.servlet" % "3.0.0.v201112011016" % "container;provided;test" artifacts (Artifact("javax.servlet", "jar", "jar"))
      )
    )
  )
}
