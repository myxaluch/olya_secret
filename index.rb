require 'sinatra'

get '/' do
  erb  :index
end

post '/' do
  redirect to('/hello')
end


get '/hello' do
  'Hello, world'
end
