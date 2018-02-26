class Api::V1::LocationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Location.all

  end

  def show
    location = Location.find(params[:id])
    render json: location

  end

  def create
    input = JSON.parse(request.body.read)

    loca = Location.find_by(zipcode: input["zipOne"])
    locb = Location.find_by(zipcode: input["zipTwo"])
    distance = Location.distanceCalc(loca.lat.to_f, loca.long.to_f, locb.lat.to_f, locb.long.to_f)

    render :json => {"distance" => distance, "loca" => loca, "locb" => locb}

  end


end
