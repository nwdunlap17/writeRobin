class StorySerializer < ActiveModel::Serializer
  attributes :id, :submissions, :title

  def submissions
      subs = object.submissions
      #byebug
      subs = subs.map do |sub|
        
        hash = sub.attributes
        hash[:author] = sub.user.username


        hash
      end

      return subs
  end
end

class GroupStorySerializer < ActiveModel::Serializer
  attributes :id, :title
end
