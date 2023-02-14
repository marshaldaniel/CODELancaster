let form, list, image, span

window.addEventListener('load',()=>{
    form = document.querySelector("#form")
    list = document.querySelector("#list")
    image = document.querySelector("#userimage")
    span = document.querySelector("#username")

    form.addEventListener('submit',(event)=>{

       event.preventDefault() 
       const formData = new FormData(form)
       console.log("Form Data", formData)
       const data = Object.fromEntries(formData)
       console.log("data ", data)
       const username = data.username
       //fetch the data
       fetch(`https://api.github.com/users/${data.username}`)
       //fetch(`https://api.github.com/users/${data.username}`)
       //convert the received response
       .then((response)=>{
            return response.json()
       })
       //Use the converted data
       .then((data)=>{
            const {avatar_url, public_repos, followers} = data
            image.setAttribute("src", avatar_url)
            span.interHTML = username
            
            const li1 = document.createElement('li')
            //assign retrieved value for li tag
            li1.innerHTML = `Public Repos: ${public_repos}`            
            //first create the list tag
            const li2 = document.createElement('li')
            li2.innerHTML = `Followers: ${followers}`

            //append the li with new information
            list.appendChild(li1)
            list.appendChild(li2)

            console.log("data", data)

       })
    })
}) 
