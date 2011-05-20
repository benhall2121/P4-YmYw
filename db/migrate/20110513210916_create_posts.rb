class CreatePosts < ActiveRecord::Migration
  def self.up
    create_table :posts do |t|
      t.string :title
      t.datetime :start_date
      t.datetime :end_date
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :posts
  end
end
