class StorySerializer < ActiveModel::Serializer
  attributes :id, :submissions, :title
end
