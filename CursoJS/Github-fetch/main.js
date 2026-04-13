/*
    Hacer una petición a la API
    Validar si la petición es ok
    Si la petición es okay tenemos que recuperar los datos
    Después solo filtrar los que ocupemos
    Imprimirlos en el DOM
*/

const form = document.querySelector('.search__form')
form.addEventListener('submit', fetchData)

async function fetchData(e){
    try{
        e.preventDefault()

        const user = document.querySelector('.search__input').value.toLowerCase()

        if(!user){
           throw new Error('We can´t search without a user') 
        }

        const response = await fetch(`https://api.github.com/users/${user}`)

        
        if(!response.ok){
            throw new Error('We couldn´t retrieve the data, sorry :(')
        }
        else{
            const data = await response.json()

            const userImg = document.querySelector('.user-card__avatar')
            userImg.src = data.avatar_url

            const userName = document.querySelector('.user-card__name')
            userName.textContent = data.name

            const userBio = document.querySelector('.user-card__bio')
            userBio.textContent = data.bio

            document.querySelector('.search__input').value = ''
        }

    }

    catch(e){
        alert(`Error ${e}`)
    }

}

