class NotifcationsController < ApplicationController
  before_action :set_notifcation, only: [:show, :update, :destroy]

  # GET /notifcations
  def index
    @notifcations = Notifcation.all

    render json: @notifcations
  end

  # GET /notifcations/1
  def show
    render json: @notifcation
  end

  # POST /notifcations
  def create
    @notifcation = Notifcation.new(notifcation_params)

    if @notifcation.save
      render json: @notifcation, status: :created, location: @notifcation
    else
      render json: @notifcation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notifcations/1
  def update
    if @notifcation.update(notifcation_params)
      render json: @notifcation
    else
      render json: @notifcation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notifcations/1
  def destroy
    @notifcation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_notifcation
      @notifcation = Notifcation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def notifcation_params
      params.require(:notifcation).permit(:notification_type, :show)
    end
end
