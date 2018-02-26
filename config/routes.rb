Rails.application.routes.draw do
  get 'home/index'
  get 'home/timestamp'

  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :locations, only: [:index, :show, :create]
    end
  end


end
