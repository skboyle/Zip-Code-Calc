# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'

require 'csv'

csv_text = File.read(Rails.root.join('db', 'zipcodes.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  l = Location.new
  l.zipcode = row['Zipcode']
  l.city = row['City']
  l.state = row['State']
  l.lat = row['Lat']
  l.long = row['Long']

  l.save
end

puts "There are now #{Location.count} rows in the transactions table"
