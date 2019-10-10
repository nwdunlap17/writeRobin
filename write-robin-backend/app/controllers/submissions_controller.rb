class SubmissionsController < ApplicationController

    def create
        user = get_user_from_token
        @submit = Submission.create(sub_params)
        @submit.user_id = user
        # byebug
        render :json => {foo: 'bar'}
    end

    private

    def sub_params
        params.require(:submission).permit(:content,:story_id)
    end
end
