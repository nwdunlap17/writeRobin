class StoriesController < ApplicationController

    skip_before_action :authorized, only: :show
    
    def index
        @stories = Story.all
        render json: @stories
    end

    def show
        @story = Story.find(params[:id])
        render json: @story
    end


    def view
        @story = Story.find(params[:id])

        foo = get_user_from_token
        # For private stories, check for access here
        entry = ActiveModel::SerializableResource.new(@story)
        
        StoryChannel.broadcast_to(@story, {story: entry, message: 'hey there!'})
        render json: @story
    end

    def testBroadcast
        @story = Story.find(params[:id])
        puts 'FIRING BROADCAST'
        StoryChannel.broadcast_to(@story, {story: @story, message: 'hey there!'})
        render :json => {message: 'done'}
    end

    def append
        toAdd = params[:addend]
        @story = Story.find(params[:id])
        @story.content += " " + toAdd
        @story.save

        StoryChannel.broadcast_to(@story, {story: @story, message: 'hey there!'})


        render :json => {message: 'done'}
    end

    protected

    def json_request? 
        return request.format.json?
    end
end
