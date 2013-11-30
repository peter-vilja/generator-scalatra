package <%= package %>.controllers

import org.scalatra.test.specs2._

class <%= servletName %>Spec extends MutableScalatraSpec {
  addServlet(classOf[<%= servletName %>], "/*")

  "GET / on <%= servletName %>" should {
    "return status 200" in {
      get("/") {
        status must_== 200
      }
    }
  }
  "GET /messages on <%= servletName %>" should {
  	"return status 200" in {
  	  get("/messages") {
      	status must_== 200
      }
  	}
  }
}