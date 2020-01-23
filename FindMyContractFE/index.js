const teamList = document.querySelector('.team-name')
teamList.innerText = "TEAMS"
let teamObj;
// we set up global variable when we click team has id and we set up teamobj = team so when ever we pass Teamobj 
//which has team.id in teamobj when we click each team we can finds correct team 

 fetch('http://localhost:3000/teams')
.then(r=> r.json())
.then(teams =>{
    teams.forEach(team =>{
            const teamDiv = document.querySelector("ol")
            const newTeamLi = document.createElement('li') 
            newTeamLi.innerText = team.name

            teamDiv.append(newTeamLi) 
         
            newTeamLi.addEventListener("click",function(evt){
                teamObj = team
                // console.log(teamId)
               const PlayerList = document.querySelector("#player")
               PlayerList.innerHTML = ""
               team.players.forEach(player=>{

                const newPlayerLi= document.createElement("li")
                newPlayerLi.innerText = player.name
               newPlayerLi.addEventListener("click",function(evt){
                   renderUpdatedForm(player,teamObj)

                   const updatePlayerForm =document.querySelector("#updatedPlayerdiv")
                    updatePlayerForm.addEventListener("submit",(event)=>{
                    event.preventDefault()
    fetch(`http://localhost:3000/players/${player.id}`,{
        method:'PATCH',
        headers: {
            "Content-Type": "application/json",
            Accept:"application/json"
        },
        body:JSON.stringify({
            name:event.target.name.value,
            age:event.target.age.value,
            nationality:event.target.nationality.value,
            // team_id: teamObj.id
            // here is the new person make a new player this what we are sending to our data 
        })
    })
    .then(r=>r.json())
    .then(updatedPlayer => {
        
        teamObj.players.push(updatedPlayer);
        newPlayerLi.innerText = updatedPlayer.name

        // const PlayerList= document.querySelector("#player")
        // PlayerList.innerHTML = ""
        // teamObj.players.forEach(player=>{
            // const updatedPlayerLi= document.createElement("li")
            // updatedPlayerLi.innerText = updatedPlayer.name
            // PlayerList.append(updatedPlayerLi)
        // })
    })
})
                   //why we crate a from here because when we click to player we should update form
                   //and updated form need to know about playerOBJ.renderupdatedform(player)already know about player


            })
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
    const PlayerList = document.querySelector("#player")
    // PlayerList.innerHTML = ""
        // teamObj.players.forEach(player=>{
            
            const updatedPlayerDiv = document.querySelector("ol")
            const updatedPlayerLi= document.createElement('li') 
            updatedPlayerDiv.innerText = team.name
            updatedPlayerDiv.append(updatedPlayerLi) 

        // const newPlayerLi= document.createElement("li")
            // newPlayerLi.innerText = newPlayer.name
            // PlayerList.append(newPlayerLi)
        // })
    })
})


function renderUpdatedForm(player, teamobj){

    const PlayerDiv = document.querySelector("#updatedPlayerdiv")
    PlayerDiv.innerHTML = ""

    let newUpdatedPlayerDiv = document.createElement("div")
    newUpdatedPlayerDiv.innerHTML =`<form id="updatePlayer">
    Name:<br>
    <input type="text" name="name" value =""><br>
    Age:<br>
    <input type="text" name="age">
    </br>
    Natinoality:<br>
    <input type="text" name="nationality"><br>
    <button>submit</button>
    
    </form> `
    PlayerDiv.append(newUpdatedPlayerDiv)
}
// formDiv.innerHTML = ""



