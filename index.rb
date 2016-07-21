require 'sinatra'
require 'pony'

get '/' do
  erb :index
end

post '/' do
  Pony.mail({
  :to => 'amikotov@gmail.com',
  :via => :smtp,
  :via_options => {
    :address        => ENV['MAILGUN_SMTP_PORT'],
    :port           => ENV['MAILGUN_SMTP_SERVER'],
    :user_name      => ENV['MAILGUN_SMTP_LOGIN'],
    :password       => ENV['MAILGUN_SMTP_PASSWORD'],,
    :authentication => :plain, # :plain, :login, :cram_md5, no auth by default
    :domain         => 'arcane-plateau-47565.heroku.com' # the HELO domain provided by the client to the server
  }
})
redirect to('/')
end


get '/hello' do
  'Hello, world'
end
