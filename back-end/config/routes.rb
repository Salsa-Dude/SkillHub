Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do 
      resources :users
      resources :courses
      resources :course_sessions
      resources :messages
      resources :reviews
      post '/login', to: 'auth#create'
      get '/home', to: 'users#home'
    end
  end
end
