class Book < ApplicationRecord
  belongs_to:user
  has_one_attached:image
  
  
  def get_image
    
  end

 
end
