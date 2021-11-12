Rails.application.routes.draw do
  namespace :api do
    resources :orders, only: [:index, :show, :create]
    resources :users, only: [:index, :show, :create]
    resources :products, only: [:index, :show, :create]

    get '/user', to: 'users#show'
    post '/signup', to: 'users#create'
    post '/login', to: 'session#create'
    delete '/logout', to: 'session#destroy'

  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
