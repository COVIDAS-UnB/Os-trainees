Rails.application.routes.draw do
  resources :points
  resources :initials
  resources :notifcations
  resources :checkins
  resources :users
  resources :healths
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
