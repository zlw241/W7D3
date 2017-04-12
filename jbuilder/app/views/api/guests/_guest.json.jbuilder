#
# json.extract! guest, :name, :age, :favorite_color
#
# json.age
#   if guest.age < 40 || guest.age > 50
#     json.null!
#   else
#     json.name guest.name
#     json.age guest.age
#     json.favorite_color guest.favorite_color
#   end

if guest.age > 40 && guest.age < 50
  json.name guest.name
  json.age guest.age
  json.favorite_color guest.favorite_color
end
