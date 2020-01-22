class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.string :nationality
      t.integer :appearance
      t.integer :assist
      t.integer :rebound
      t.integer :points
      t.string :salary
      t.string :image_url
      t.string :youtube_url
      t.integer :likes

      t.timestamps
    end
  end
end
