const teamList = document.querySelector('.team-name')
teamList.innerText = "TEAMS"

 fetch('http://localhost:3000/teams')
.then(r=> r.json())
.then(teams =>{
    teams.forEach(team =>{
       
        
        

            const teamDiv =document.querySelector("ol")
            const newTeamLi=document.createElement('li') 
            newTeamLi.innerText = team.name

            teamDiv.append(newTeamLi) 
            
            
            newTeamLi.addEventListener("click",function(evt){
               const PlayerList= document.querySelector("#player")
               PlayerList.innerHTML = ""
               team.players.forEach(player=>{

                const newPlayerLi= document.createElement("li")
                newPlayerLi.innerText = player.name
                PlayerList.append(newPlayerLi)
               })
                


               const playerForm =document.querySelector("#newplayer")
               playerForm.addEventListener("submit",(evt)=>{
                  event.preventDefault()
        console.log(team.name)
                    fetch('http://localhost:3000/players',{
                        method:'POST',
                        headers: {
                           "Content-Type": "application/json",
                           Accept:"application/json"
                       },
                       body:JSON.stringify({
                           name:event.target.name.value,
                           age:event.target.age.value,
                           nationality:event.target.nationality.value,
                           team_id: team.id
                       })
                         
               
                   })
                   .then(r=>r.json())
                   .then( newPlayer => {
                    team.players.push(newPlayer);
                    const PlayerList= document.querySelector("#player")
                    PlayerList.innerHTML = ""
                    team.players.forEach(player=>{
                     const newPlayerLi= document.createElement("li")
                     newPlayerLi.innerText = player.name
                     PlayerList.append(newPlayerLi)
                    })
                    
                   })
                    
                    
                    
                   })
               



            })//event teamLI
            
        })
})
