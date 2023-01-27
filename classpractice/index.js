let form, list, image, span
window.addEventListener('load',()=>{
    form = document.querySelector("#form")
    list = document.querySelector("#list")
    image = document.querySelector("#userimage")
    span = document.querySelector("#username")
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const formData = new FormData(form) 
        console.log("formData", formData)
        const data = Object.fromEntries(formData)
        console.log("data",data)
        fetch(`https://api.github.com/users/${data.username}`)
                .then((response)=>{return response.json()})
                .then((data)=>{console.log("response",data)}
                const {avatar_url,public_repos, followers}= data 
                image.setAttribute("src", avatar_url))
})
})