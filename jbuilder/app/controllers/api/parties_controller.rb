class Api::PartiesController < ApplicationController
  def index
    # debugger
    @parties = Party.includes(:guests).all


    render :index
  end

  def show
    @party = Party.includes(guests: [:gifts]).find(params[:id])
    render :show
  end
end
