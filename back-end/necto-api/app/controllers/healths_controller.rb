class HealthsController < ApplicationController
  before_action :set_health, only: [:show, :update, :destroy]

  # GET /healths
  def index
    @healths = Health.all

    render json: @healths
  end

  # GET /healths/1
  def show
    render json: @health
  end

  # POST /healths
  def create
    @health = Health.new(health_params)

    if @health.save
      render json: @health, status: :created, location: @health
    else
      render json: @health.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /healths/1
  def update
    if @health.update(health_params)
      render json: @health
    else
      render json: @health.errors, status: :unprocessable_entity
    end
  end

  # DELETE /healths/1
  def destroy
    @health.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_health
      @health = Health.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def health_params
      params.require(:health).permit(:status)
    end
end
