class StorySerializer < ActiveModel::Serializer
  attributes :id, :submissions, :title
end

class GroupStorySerializer < ActiveModel::Serializer
  attributes :id, :title
end
