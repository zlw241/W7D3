

json.array! @parties do |party|
  json.extract! party, :name, :location

  json.guests party.guests do |guest|
    next if guest.age < 40 || guest.age > 50
    json.name guest.name
    json.age guest.age
  end

end
