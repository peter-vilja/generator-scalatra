package <%= package %>

import org.scalatra.test.specs2._

class <%= servletName %>Spec extends MutableScalatraSpec {
  addServlet(classOf[<%= servletName %>], "/*")

  "GET / on <%= servletName %>" should {
    "return status 200" in {
      get("/") {
        status must_== 200
      }
      get("/messages") {
      	status must_== 200
      }
    }
  }
}