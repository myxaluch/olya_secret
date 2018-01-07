require 'sinatra'
require 'pony'

if settings.development?
  require 'pry'
  require 'dotenv'
  Dotenv.load
end
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
  request.url
end

post '/' do
  if request.referrer == ENV['REQUEST_URL']
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    Pony.mail({
      :to => ENV['SENDGRID_TO'],
      :subject => "New question from #{@name}, #{@email}",
      :body => "#{@message}"
    })
    Pony.mail({
      :from => ENV['NO_REPLY_FROM'],
      :to => "#{@email}",
      :subject => "Спасибо за Ваше сообщение!",
      :body => "Я обязательно отвечу Вам как можно быстрее. С уважением, Лытова Елена Геннадьевна"
    })
    redirect to(request.referrer.to_s)
  else
    status 404
  end
end
