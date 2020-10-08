class CommentsController < ApplicationController

	def index 
		comments = Comment.all
		render json: comments
	end

	# def comment_params
	# 	params.require
	# end
	
end
