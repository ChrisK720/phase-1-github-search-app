// I need to do the following:
// 1)  need to get get the form
// 2) Add an event listener to it
// 3) The user will input a a user name
// 4) on submit I will need to perform a get request like so 
// must first do e.preventDefault()
// fetch('https://api.github.com/search/users?q=octocat')
// .then(res => {
//   res.json()
//})
// .then(initDispalyUsrs)
// At this point I have a js array tha t has all the usrs with the given usr name
// I now need to display the usrname avatar and link for each element in the given array.
// For this I can use a  for loop:
// let usrName
// let avatarSrc
// function initDisplayUsrs(array){
//    for(let usrInf of array){
//     usrName = usr.login
//     avatarSrc = usr.avatar_url
//     link = usr.html_url
//   conDisplayUsrs(usrInf)
//}
// Now I need to appened this to DOM
// Function conDisplayUsrs(usrInf){
// const users =  document.createElement('h1')
// users.id = "users"
// users.textContent = "users"
//
// const usr = document.createElement('li')
// usr.innerHTML = ` ${usrName} <img src=`${avatarSrc}`> <a href= `${link}`>GitHub page </a>
//  
//}



 document.addEventListener('DOMContentLoaded', init)

 function init(){
     formSub()
    
 }

 function formSub () {
   const form = document.getElementById('github-form')
   form.addEventListener('submit', getUsrInp)
 }

 function getUsrInp(e) {
    e.preventDefault()
    const usrInp = document.getElementById('search').value
    fetch(`https://api.github.com/search/users?q=${usrInp}`)
    .then(res => res.json())
    .then(object =>  {
      array = object.items
      initDisplayUsrs(array)
    })
 }
 
 function initDisplayUsrs(array) {
  for(let usrInf of array){
         usrName = usrInf.login
        avatarSrc = usrInf.avatar_url
        pageLink = usrInf.html_url
       conDisplayUsrs(usrName,avatarSrc,pageLink,usrInf)
  }
  const ul = document.getElementById('user-list')
   initRepos(ul)
  
 }

 function conDisplayUsrs(usrName,avatarSrc,pageLink,){
   const usr = document.createElement('li')
   usr.innerHTML = ` ${usrName} <img src="${avatarSrc}" id="${usrName}"> <a href= "${pageLink}">GitHub page </a>`
   const ul = document.getElementById('user-list')
   ul.appendChild(usr)
   const avatar = document.getElementById(`${usrName}`)
   avatar.style.width = '20px'
   avatar.style.height = '20px'
    
  
}

 function initRepos(ul) {
  console.log('done')
//   ul.addEventListener('click', function(event){
//     if(event.target.tagName === 'li'){
//     const targetId = event.target.id
//      fetch(`https://api.github.com/users/${targetId}/repos`)
//      .then(res => res.json())
//      .then(con1Repos)
//   }
//  })
}

 function con1Repos(object) {
  object.forEach(repo => {
    const repoName = repo.name;
    const defaultBranch = repo.default_branch;
    const description = repo.description;
    con2Repo(repoName,defaultBranch,description)
  })
 }

 function con2Repo(repoName,default_branch,description){
  const repo = document.createElement('li')
  const ul2 = document.getElementById('repoList')
    repo.innerHTML = `
    <ul>
     <li> ${repoName}</li>
     <li> ${description}</li>
     <li> ${default_branch} </>li
   
    </ul> `
   ul2.appendChild(repo)
  
   
  
 }
