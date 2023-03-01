class Book < ApplicationRecord
  belongs_to:user
  has_one_attached:image
  has_one_attached:profile_image

 
end
