class PlayersController < ApplicationController

    def index 
        @players = Player.all
       render json: @players 
    end 
     
    def create 
        
        @team = Team.find(params[:team_id])
        @player = Player.create(create_player_params)
        @player.teams.push(@team)
        # we are adding to team to players list of team
        # @team.players.push(@player)
        # if @player.valid 
      
        render json: @player
        # else 
            # render json: @player.errors.full_messages, status:404
        # end 
    end 
    
    
    
    
    
    def show
        @player = Player.find(params[:id])
        render json: @player
    end

    def update 
       @player = Player.find(params[:id])
        @player.update(edit_player_params)
        render json: @player
    end

    def destroy 
        @player = Player.find(params[:id])
        @player.destroy
        render json: @player
    end 

        def random 
            @random_player = Player.all.sample
            render json:@random_player
        end 
 
    private 
    def edit_player_params
        params.permit(:name,:nationality,:age)
    end 
 
 def create_player_params
    params.permit(:name,:age,:nationality,:appearance, :assist,:rebound,:points,:salary,:image_url,:youtube_url,:likes)
 end 

end 
 