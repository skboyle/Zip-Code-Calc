class Location < ApplicationRecord


  RAD_PER_DEG = Math::PI / 180
  RM = 3956  # Earth radius in miles

  def self.distanceCalc(lat1, lon1, lat2, lon2)
    lat1_rad, lat2_rad = lat1 * RAD_PER_DEG, lat2 * RAD_PER_DEG
    lon1_rad, lon2_rad = lon1 * RAD_PER_DEG, lon2 * RAD_PER_DEG

    a = Math.sin((lat2_rad - lat1_rad) / 2) ** 2 + Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin((lon2_rad - lon1_rad) / 2) ** 2
    c = 2 * Math::atan2(Math::sqrt(a), Math::sqrt(1 - a))

    RM * c # Delta in miles
  end


end
