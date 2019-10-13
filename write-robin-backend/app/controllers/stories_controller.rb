class StoriesController < ApplicationController

    skip_before_action :authorized, only: [:view, :public_index]
    
    def index
        @stories = Story.all
        render json: @stories
    end

    def public_index
        @stories = Story.where('PUBLIC = true')
        render json: @stories#, each_serializer: GroupStorySerializer
    end


    def view
        @story = Story.find(params[:id])

        user = get_user_from_token
        # For private stories, check for access here
        
        entry = ActiveModel::SerializableResource.new(@story)
        
        # @story.new_viewer(1)
        render json: @story
    end

    def append
        toAdd = params[:addend]
        @story = Story.find(params[:id])
        @story.content += " " + toAdd
        @story.save



        render :json => {message: 'done'}
    end

    protected

    def json_request? 
        return request.format.json?
    end
end
