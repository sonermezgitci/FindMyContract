const teamList = document.querySelector('.team-name')
teamList.innerText = "TEAMS"
let teamObj;
// we set up global variable when we click team has id and we set up teamobj = team so when ever we pass Teamobj 
//which has team.id in teamobj when we click each team we can finds correct team 

 fetch('http://localhost:3000/teams')
.then(r=> r.json())
.then(teams =>{
    teams.forEach(team =>{
            const teamDiv =document.querySelector("ol")
            const newTeamLi=document.createElement('li') 
            newTeamLi.innerText = team.name

            teamDiv.append(newTeamLi) 
         
            newTeamLi.addEventListener("click",function(evt){
                teamObj = team
                // console.log(teamId)
               const PlayerList= document.querySelector("#player")
               PlayerList.innerHTML = ""
               team.players.forEach(player=>{

                const newPlayerLi= document.createElement("li")
                newPlayerLi.innerText = player.name
                PlayerList.append(newPlayerLi)
               })     
            })//event teamLI           
        })
    })
    
    
const playerForm =document.querySelector("#newplayer")
playerForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    // console.log(team.name)
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
            team_id: teamObj.id
            // here is the new person make a new player this what we are sending to our data 
        })
    })
    .then(r=>r.json())
    .then(newPlayer => {
    teamObj.players.push(newPlayer);
    const PlayerList= document.querySelector("#player")
    // PlayerList.innerHTML = ""
        // teamObj.players.forEach(player=>{
            const newPlayerLi= document.createElement("li")
            newPlayerLi.innerText = newPlayer.name
            PlayerList.append(newPlayerLi)
        // })
    })
})