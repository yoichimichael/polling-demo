class CommentsController < ApplicationController

	def index 
		comments = Comment.all
		render json: comments
	end

	def create
		comment = Comment.create(comment_params)
	end

	def comment_params
		params.require(:comment).permit(:content, :name)
	end
	
end
