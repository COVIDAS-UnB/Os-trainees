require 'test_helper'

class NotifcationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @notifcation = notifcations(:one)
  end

  test "should get index" do
    get notifcations_url, as: :json
    assert_response :success
  end

  test "should create notifcation" do
    assert_difference('Notifcation.count') do
      post notifcations_url, params: { notifcation: { notification_type: @notifcation.notification_type } }, as: :json
    end

    assert_response 201
  end

  test "should show notifcation" do
    get notifcation_url(@notifcation), as: :json
    assert_response :success
  end

  test "should update notifcation" do
    patch notifcation_url(@notifcation), params: { notifcation: { notification_type: @notifcation.notification_type } }, as: :json
    assert_response 200
  end

  test "should destroy notifcation" do
    assert_difference('Notifcation.count', -1) do
      delete notifcation_url(@notifcation), as: :json
    end

    assert_response 204
  end
end
