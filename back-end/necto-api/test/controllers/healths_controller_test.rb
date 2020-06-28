require 'test_helper'

class HealthsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @health = healths(:one)
  end

  test "should get index" do
    get healths_url, as: :json
    assert_response :success
  end

  test "should create health" do
    assert_difference('Health.count') do
      post healths_url, params: { health: { status: @health.status } }, as: :json
    end

    assert_response 201
  end

  test "should show health" do
    get health_url(@health), as: :json
    assert_response :success
  end

  test "should update health" do
    patch health_url(@health), params: { health: { status: @health.status } }, as: :json
    assert_response 200
  end

  test "should destroy health" do
    assert_difference('Health.count', -1) do
      delete health_url(@health), as: :json
    end

    assert_response 204
  end
end
