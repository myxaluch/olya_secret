require 'sinatra'
require 'sinatra/form_helpers'
require 'pony'
require 'dotenv'

Dotenv.load
Pony.options= {
  :from => ENV['SENDGRID_FROM'],
  :via => :smtp,
  :via_options => {
    :address => 'smtp.sendgrid.net',
    :port => '587',
    :domain => ' heroku.com',
    :user_name => ENV['SENDGRID_USERNAME'],
    :password => ENV['SENDGRID_PASSWORD'],
    :authentication => :plain,
    :enable_starttls_auto => true
    }
  }

get '/' do
  erb :form, :layout => :index
end

post '/' do
    @name = params[:form][:name]
    @email = params[:form][:email]
    @message = params[:form][:message]
    Pony.mail({
    :to => ENV['SENDGRID_TO'],
    :subject => "New question from #{@name}, #{@email}",
    :body => "#{@message}"
    })
  #end
end
