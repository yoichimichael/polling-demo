# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

comments = [{ content: "Like staring into the face of God", name: "Mark Hamill" }, { content: "And they said painting was dead", name: "George Castanza" }, { content: "This is why I wake up in the morning", name: "Pharrel Williams"}]

comments.each{|comment| Comment.create(content: comment[:content], name: comment[:name])}