# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

john = User.create(
  id: SecureRandom.uuid,
  email: "john.doe@example.com",
)

jane = User.create(
  id: SecureRandom.uuid,
  email: "jane.doe@example.com",
)

Request.create(
  id: SecureRandom.uuid,
  description: "Babysitter",
  details: "Cult book by Ray Bradbury",
  user_id: john.id,
)
Request.create(
  id: SecureRandom.uuid,
  description: "Halloween",
  user_id: john.id,
)
Request.create(
  id: SecureRandom.uuid,
  description: "Doom",
  details: "A group of Marines is sent to the red planet via an ancient " \
               "Martian portal called the Ark to deal with an outbreak of a mutagenic virus",
  user_id: jane.id,
)
Request.create(
  id: SecureRandom.uuid,
  description: "Mars Attacks!",
  details: "Earth is invaded by Martians with unbeatable weapons and a cruel sense of humor",
  user_id: jane.id,
)
