class WelcomeController < ApplicationController
  layout nil

  def index
  end

  def show
    @angular_app = params[:id]
    render :action => :index
  end

  def angular_app
    @angular_app || "app"
  end
  helper_method :angular_app
end
