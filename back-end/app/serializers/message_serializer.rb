class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :status, :sender_id, :recipient_id, :modified_at
  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"
end
