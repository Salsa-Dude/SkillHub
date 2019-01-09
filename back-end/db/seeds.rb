# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

User.destroy_all
Course.destroy_all
CourseSession.destroy_all
Review.destroy_all
Message.destroy_all

@Joseph = User.create!(first_name: "Joseph", last_name: "Arias", email: "arias.joseph.a@gmail.com", password: '123', bio: "I like playing soccer, salsa dancing and playing my conga drums")

@Liz = User.create!(first_name: "Liz", last_name: "Orellana", email: "liz@gmail.com", password: '123', bio: "I love to travel and explore new hobbies")

@Course1 = Course.create!(name: "Salsa Dancing", description: "Salsa dancing is always excellent entertainment. It also helps in building a lot of energy and hence is a good way to start your day. You may learn salsa dancing in the privacy of your house or in a studio, with or without a partner and it is also a fitness program that can readily be integrated into your social life.", image: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/12909588_10209534333383299_2886464381534572286_o.jpg?_nc_cat=110&_nc_ht=scontent-iad3-1.xx&oh=88e6caeb92e82d0ee8eb0995ea54098b&oe=5C8CDDCF", bio: "I've been salsa dancing for 4 years and I know how to dance salsa on1 and on2 and casino.", instructor_id: @Joseph.id, city: "Manassas", state: "Virginia", address: "123 linton hall")

@CourseSession1 = CourseSession.create!(checkin: DateTime.new(2018, 6, 22), checkout: DateTime.new(2018, 9, 10), student_id: @Liz.id, course_id: @Course1.id)

@Review1 = Review.create!(description: "Joseph was a great instructor! I had a great time", rating: 5, student_id: @Liz.id, course_session_id: @CourseSession1.id)

@Message1 = Message.create!(content: "Do you teach bachata too?", sender_id: @Liz.id, recipient_id: @Joseph.id )

