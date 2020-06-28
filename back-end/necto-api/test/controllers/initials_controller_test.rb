require 'test_helper'

class InitialsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @initial = initials(:one)
  end

  test "should get index" do
    get initials_url, as: :json
    assert_response :success
  end

  test "should create initial" do
    assert_difference('Initial.count') do
      post initials_url, params: { initial: { address: @initial.address, latitude: @initial.latitude, longitude: @initial.longitude, name: @initial.name } }, as: :json
    end

    assert_response 201
  end

  test "should show initial" do
    get initial_url(@initial), as: :json
    assert_response :success
  end

  test "should update initial" do
    patch initial_url(@initial), params: { initial: { address: @initial.address, latitude: @initial.latitude, longitude: @initial.longitude, name: @initial.name } }, as: :json
    assert_response 200
  end

  test "should destroy initial" do
    assert_difference('Initial.count', -1) do
      delete initial_url(@initial), as: :json
    end

    assert_response 204
  end
end
