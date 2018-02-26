class Locations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :zipcode
      t.string :city
      t.string :state
      t.string :lat
      t.string :long
    end
  end
end
