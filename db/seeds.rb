puts '🔥 🌱 '
User.destroy_all
Hike.destroy_all
Review.destroy_all
User.reset_pk_sequence
Hike.reset_pk_sequence
Review.reset_pk_sequence

5.times do
    user = Faker::Internet.user('username', 'password')
    User.create!(user)

    name = Faker::Mountain.name
    location = Faker::Mountain.range
    minutes_to_complete = Faker::Number.within(range: 30..4600)
    Hike.create!(name: name, location: location, minutes_to_complete: minutes_to_complete)

    title = Faker::Lorem.sentence(word_count: 3)
    rating = Faker::Number.within(range: 1..5)
    body = Faker::Lorem.paragraph_by_chars(number: 250)
    user_id = Faker::Number.within(range: 1..5)
    hike_id = Faker::Number.within(range: 1..5)
    Review.create!(title: title, rating: rating, body: body, user_id: user_id, hike_id: hike_id)
end

puts '🪴🪴🪴'