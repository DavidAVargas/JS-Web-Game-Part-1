function newImage(src, positionLeft, positionRight) {
    let newImg = document.createElement('img')
    newImg.src = src;
    newImg.style.position = 'fixed'
    newImg.style.left = positionLeft;
    newImg.style.bottom = positionRight;
    document.body.append(newImg)
};

newImage('assets/green-character.gif', '100px', '100px');

newImage('assets/pine-tree.png','450px', '200px');

newImage('assets/tree.png', '200px', '300px');

newImage('assets/pillar.png', '350px', '100px');

newImage('assets/crate.png', '150px', '200px');

newImage('assets/well.png', '500px', '425px',);

let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)

sword.addEventListener('dblclick', function() {
    console.log('Double-clicked on sword');
    sword.remove();
});

function newItem(src, positionLeft, positionBottom) {
    let newItem = document.createElement('img')
    newItem.src = src;
    newItem.style.position = 'fixed'
    newItem.style.left = positionLeft;
    newItem.style.bottom = positionBottom;
    document.body.append(newItem)
};

newItem('assets/sword.png', '500px', '405px');

newItem('assets/shield.png', '165px', '185px');

newItem('assets/staff.png', '600px', '100px');

//bonus I may or may not have cheated for the bonus 

function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}

function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)


newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)


