Rails.application.routes.draw do
  resources :comments

  get '/comments', to: 'comments#index'
  post '/comments', to: 'comments#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
