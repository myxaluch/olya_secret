require 'sinatra'
require 'sinatra/formkeeper'
require 'pony'
if settings.development?
  require 'dotenv'
end

Dotenv.load
Pony.options= {
  :from => ENV['SENDGRID_FROM'],
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
  }

get '/' do
  erb :index
end

post '/' do
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    Pony.mail({
      :to => ENV['SENDGRID_TO'],
      :subject => "New question from #{@name}, #{@email}",
      :body => "#{@message}"
    })
    redirect to('/')
end
