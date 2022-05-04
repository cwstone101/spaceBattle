
// our ship
let USSHelloWorld = {

    name: "Bob",
    hull: 20,
    firepower: 5,
    accuracy: .7,




    //dodge: function(){
        // allows us to retreat
    //}


}

let alienShips = {
    name: "Aliens",
    hull: getAlienHull(),
    firepower: getAlienFirePower(),
    accuracy: getAlienAccuracy(),

}


function getAlienHull(min, max) {
    return Math.random() * (3 - 6) + min;
    }

function getAlienFirePower(min, max) {
    return Math.random() * (2 - 4) + min;
    }

function getAlienAccuracy(min, max) {
    return Math.random() * (.6 - .8) + min;
    }


        


// another example of doing it
// let USSAssembly = [1,1,1,1]
// subtract points out of array to reach death




// -------------------------------------------



const battle=() => {
    let playerOneScore = 100


    let alienScore = 100




    console.log('Battle Started!')
    // startGame
    // establishRoundOne
    

let command = prompt('Ready To [A]ttack? or [R]etreat?')

    if(command === 'A'){

        let target = document.querySelector('.ufo')
        
        let explosion = document.createElement('img')
            explosion.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4805rNJem9vUyMBmPaw4dU4JZcAxGfZnQw&usqp=CAU')
        
        
        
        

        // decrease alient Point Value

        let currentScore = document.querySelector('.hunnit').innerHTML=" ";
        //currentScore.style.backgroundColor = 'black';



        let halfLife = document.querySelector('.fifty').innerHTML='50%';



        console.log(currentScore)
        


        target.replaceWith(explosion)
        // signal Explosion

    }else(
        console.log('PlayerOne has retreated AND LOSES and is a loser')
    )




    
}

const move = () => {
    let icon = document
    querySelector('.ship')
    icon.classList.toggle
    ('moveSomething')
}








let alienMob = []










