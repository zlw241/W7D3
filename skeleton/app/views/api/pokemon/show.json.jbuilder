# json.extract! @pokemon, :id, :name, :attack, :defense, asset_path(pokemon.image_url)

json.id @pokemon.id
json.name @pokemon.name
json.attack @pokemon.attack
json.defense @pokemon.defense
json.image_url asset_path(@pokemon.image_url)
json.moves @pokemon.moves
json.poke_type @pokemon.poke_type
json.items @pokemon.items do |item|
  json.extract! item, :id, :pokemon_id, :name, :price, :happiness
  json.image_url asset_path(item.image_url)
end
