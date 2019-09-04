Rails.application.routes.draw do
 
  namespace :api do
    namespace :v1 do 
      resources :users
      resources :courses
      resources :course_sessions
      resources :messages
      resources :reviews
      resources :categories
      post '/login', to: 'auth#create'
      get '/home', to: 'users#home'
      get '/dance', to: 'categories#danceCategory'
      get '/languages', to: 'categories#languageCategory'     
    end
  end
end
