# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_29_154256) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "checkins", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.bigint "point_id", null: false
    t.float "hour"
    t.date "date_created"
    t.index ["point_id"], name: "index_checkins_on_point_id"
    t.index ["user_id"], name: "index_checkins_on_user_id"
  end

  create_table "healths", force: :cascade do |t|
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "notifcations", force: :cascade do |t|
    t.string "notification_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "show"
  end

  create_table "notifications_users", id: false, force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "notification_id", null: false
  end

  create_table "points", force: :cascade do |t|
    t.string "initials"
    t.string "name"
    t.string "address"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
    t.string "registration"
    t.string "program"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "health_id", null: false
    t.index ["health_id"], name: "index_users_on_health_id"
  end

  add_foreign_key "checkins", "points"
  add_foreign_key "checkins", "users"
  add_foreign_key "users", "healths"
end
