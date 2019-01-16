# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

User.destroy_all
Course.destroy_all
CourseSession.destroy_all
Review.destroy_all
Message.destroy_all

@Joseph = User.create!(first_name: "Joseph", last_name: "Arias", email: "arias.joseph.a@gmail.com", password: '123', bio: "Salsa and bachata dancer and instructor")
@Liz = User.create!(first_name: "Liz", last_name: "Orellana", email: "liz@gmail.com", password: '123', bio: "I love to travel and explore new hobbies")
@Anna = User.create!(first_name: "Anna", last_name: "Conaway", email: "anna@gmail.com", password: '123', bio: "Fluent in French and in my spare time I like to explore the different flavors in wine")
@Mike = User.create!(first_name: "Mike", last_name: "Kim", email: "mike@gmail.com", password: '123', bio: "Former collegiate athlete and active professional lacrosse player")
@Ana = User.create!(first_name: "Ana", last_name: "Harris", email: "ana@gmail.com", password: '123', bio: "Dancer, Traveler and language lover")
@Lane = User.create!(first_name: "Lane", last_name: "Miller", email: "lane@gmail.com", password: '123', bio: "Former gold metal champion in Super Mario")
@Hillary = User.create!(first_name: 'Hillary', last_name: "Scofield", email: "hillary@gmail.com", password: "123", bio: "Developer by day and comedian by night")
@Beth = User.create!(first_name: "Beth", last_name: "Wilson", email: "beth@gmail.com", password: "123", bio: "Musician, Teacher and latin music lover")
@Marissa = User.create!(first_name: "Marissa", last_name: "McHugh", email: "marissa@gmail.com", password: "123", bio: "Food lover, traveler and marathon runner")
@Jennifer = User.create!(first_name: "Jennifer", last_name: "Ingram", email: "jennifer@gmail.com", password: "123", bio: "Traver and Artist specializing in live drawing")


@Course1 = Course.create!(name: "Salsa Dancing", description: "Salsa dancing is always excellent entertainment. It also helps in building a lot of energy and hence is a good way to start your day. You may learn salsa dancing in the privacy of your house or in a studio, with or without a partner and it is also a fitness program that can readily be integrated into your social life.", image: "https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/12909588_10209534333383299_2886464381534572286_o.jpg?_nc_cat=110&_nc_ht=scontent-iad3-1.xx&oh=88e6caeb92e82d0ee8eb0995ea54098b&oe=5C8CDDCF", bio: "I've been salsa dancing for 4 years and I know how to dance salsa on1 and on2 and casino.", instructor_id: @Joseph.id, city: "DC", address: "801 9th St NW suite a, Washington, DC 20001")

@Course2 = Course.create!(name: "Wine Tasting", description: "I will provide essential education on wine. I will help train your sense of smell, taste and touch and then apply that training through a tasting evaluation. This combination of sensual training and theoretical knowledge will set a foundation for life-long learning about wine.", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80", bio: "6 years of experience in the wine industry includes retail ownership, as well as retaurant and wholesale management", instructor_id: @Anna.id, city: "DC", address: "777 6th St NW, Washington, DC 20001")

@Course3 = Course.create!(name: "Lacrosse Training", description: "Spent the last five years, including the past two seasons as a midfielder for the DC blueSkins lacrosse team. Specialties: transistion, shooting, passing, protecting, speed, endurance", image: "https://laxallstars.com/wp-content/uploads/2016/06/LAS_TRILOGY-SPRING-TRAINING-3-760x507.jpg", bio: "Former collegiate athlete and active professional lacrosse player and coach", instructor_id: @Mike.id, city: "DC", address: "1509 16th Street, NW, Washington, DC 20036")

@Course4 = Course.create!(name: "Ballroom dancing", description: "On your own or with a partner or friend, whether you’re a beginner or a seasoned professional, whether you want to meet new friends while learning basic skills or train for competition, I can help develop your ballroom dancing by a customized lesson plan. Each lesson will be tailored to your needs, interests and desires. With a focus on technique, rhythm, and partnering skills, I will give you the confidence to dance well in any social setting.", image: "https://static1.squarespace.com/static/51437aa1e4b04eaef3678abd/t/55bafb8ae4b08c22e013f05d/1438317450619/teaching_duet1.jpg?format=1500w", bio: "I will personalize each dance lesson based on your individual needs, desires, and goals, adjusting our teaching style to your ability, personality, and expectations. This ensures the most thorough and rapid learning process, all while keeping it fun, easy, and comfortable.", instructor_id: @Ana.id, city: "DC", address: "5207 Wisconsin Ave, Washington, DC 20015")

@Course5 = Course.create!(name: "Pro Gaming Training", description: "My method of teaching is relaxed friendly and go with the flow. Despite this, I will spend every moment teaching you something to help improve. But most importantly my goal in teaching is to teach you not just a specific skill for a specific game, but skills for multiple games. So you can pick up any game and have a solid base. Lessons usually consist of live game analysis, replay analysis, or jumping into custom games with your coach so they can give you tips, tricks, and strategies to help you win more!", image: "https://cdn.dotablast.com/wp-content/uploads/2015/06/evil-geniuses-esl-one.jpg", bio: "Former gold metal champion in Super Mario", instructor_id: @Lane.id, city: "DC", address: "645 Pennsylvania Ave SE, Washington, DC 20003")

@Course6 = Course.create!(name: "Stand Up Comedy", description: "Stand-up comedy is a fantastic art form and once you start digging, you realize the possibilities are endless. In the words of my comedy mentor, “The beauty of stand-up is that all you need is a light, a chair, and a microphone so you can take it with you wherever you go.", image: "https://images.unsplash.com/photo-1468390090990-afe21a9448f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1335&q=80", bio: "Originally from New Zealand, I'm an actor, comedian and acting coach.", instructor_id: @Hillary.id, city: "DC", address: "1140 Connecticut Ave NW, Washington, DC 20036")













@CourseSession1 = CourseSession.create!(checkin: DateTime.new(2018, 6, 22), checkout: DateTime.new(2018, 9, 10), student_id: @Liz.id, course_id: @Course1.id)

@Review1 = Review.create!(description: "Joseph was a great instructor! I had a great time", rating: 5, student_id: @Liz.id, course_session_id: @CourseSession1.id)

@Message1 = Message.create!(content: "Do you teach bachata too?", sender_id: @Liz.id, recipient_id: @Joseph.id )

