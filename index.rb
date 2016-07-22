require 'sinatra'
require 'pony'


Pony.options= {
  :from => 'from-you@portfolio.com',
  :via => :smtp,
  :via_options => {
    :address => 'smtp.sendgrid.net',
    :port => '587',
    :domain => ' heroku.com',
    :user_name => ENV['SENDGRID_USERNAME'],
    :password => ENV['SENDGRID_PASSWORD'],,
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
  :to => 'oliktva@gmail.com',
  :subject => "New question from #{@name}, #{@email}",
  :body => "#{@message}"
})
redirect to('/')
end
