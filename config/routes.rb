Rails.application.routes.draw do
  
  namespace :api do
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/orderbyname", to: "hikes#order_by_name"
  
    resources :hikes, only: [:index, :show] do
      resources :reviews, shallow: true
      # shallow: true prevents deep nesting, so you are only provided
      # create and index nested, non-nested are show/destroy/update
    end
  end
  # all other routes will be load our React application
  # this route definition matches:
  # - *path: all paths not matched by one of the routes defined above
  # - constraints:
  #   - !req.xhr?: it's not a XHR (fetch) request
  #   - req.format.html?: it's a request for a HTML document
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
