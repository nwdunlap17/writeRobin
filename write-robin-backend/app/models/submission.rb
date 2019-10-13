class Submission < ApplicationRecord
    belongs_to :user
    belongs_to :story
    has_many :votes

    def tally_votes
        running_total = 0
        self.votes.each do |vote|
            if vote.positive
                running_total += 1
            else
                running_total -= 1
            end
        end
        return running_total
    end

    def receive_vote
        if (self.tally_votes >= 3)
                # byebug
            story = Story.find(self.story_id)
            return story.check_for_promotion()
        end
        return nil
    end
end
