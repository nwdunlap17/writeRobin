class Story < ApplicationRecord
    belongs_to :user
    has_many :submissions

    def testBroadcast
        StoryChannel.broadcast_to(self, {story: self, message: 'hey there!'})
    end
end
