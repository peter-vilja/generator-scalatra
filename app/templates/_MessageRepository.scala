package <%= package %>.repositories

import org.joda.time.DateTime
import com.mongodb.casbah.Imports._
import com.mongodb.util.JSON

object MessageRepository {

  val mongoClient = MongoClient()
  val messages = mongoClient("<%= projectName %>")("messages")

  def fetch = messages.find().toList
}
