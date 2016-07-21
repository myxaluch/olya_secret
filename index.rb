require 'sinatra'
require 'pony'

get '/' do
  erb :index
end

post '/' do
  Pony.mail({
  :to => 'amikotov@gmail.com',
  :header => 'Test',
  :body => 'Test',
  :via => :smtp,
  :via_options => {
    :address => 'smtp.sendgrid.net',
    :port => '587',
    :domain => 'heroku.com',
    :user_name => ENV['SENDGRID_USERNAME'],
    :password => ENV['SENDGRID_PASSWORD'],
    :authentication => :plain,
    :enable_starttls_auto => true
  }
})
end
