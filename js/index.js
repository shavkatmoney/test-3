console.log(pokemons);

let elheader = document.querySelector('.header');
let elheader__inp = document.querySelector('.header__int');
let elheader__btn = document.querySelector('.header__btn')
let ellist = document.querySelector('.pokemons__list');

elheader__btn.addEventListener("click" , function () {
    ellist.innerHTML = null
})

function render() {
    let header__intValue = elheader__inp.value
    console.log(header__intValue);
    


    
    for (let i = 0; i < pokemons.length; i++) {
        const item = pokemons[i];

    
        let li = document.createElement('li');
        let img = document.createElement('img');
        let pokemons__span = document.createElement('span')
        let pokemon__addition = document.createElement('div')
        let title = document.createElement('h2');
        let like = document.createElement('img');
        let type = document.createElement('p');
        let candy = document.createElement('h3');
        let pokemons__inner = document.createElement('div');
        let weight__kg = document.createElement('p');
        let height__m = document.createElement('p');
        let pokemons__inners = document.createElement('div');
        let bottom__info = document.createElement('button');
        let bottom__boos = document.createElement('button');
        
        bottom__info.textContent = 'More info'
        bottom__boos.textContent = 'boom we'
        title.textContent = item.name
        type.textContent = item.type
        candy.textContent = item.candy
        weight__kg.textContent = item.weight
        height__m.textContent = item.height
        img.src = item.img
        
        
        ellist.appendChild(li);
        li.appendChild(img);
        li.appendChild(pokemons__span)
        li.appendChild(pokemon__addition)
        pokemon__addition.appendChild(title);
        pokemon__addition.appendChild(like);
        li.appendChild(type);
        li.appendChild(candy);
        li.appendChild(pokemons__inner);
        pokemons__inner.appendChild(weight__kg);
        pokemons__inner.appendChild(height__m);
        li.appendChild(pokemons__inners);
        pokemons__inners.appendChild(bottom__info);
        pokemons__inners.appendChild(bottom__boos);
        
        img.style = 'weight: 202px; height:202px;';
        like.src = './img/layk.webp';
        pokemon__addition.style = 'display: flex; align-items: center; justify-content: space-between;'
        like.style = 'width: 24px; height: 18px;'
        pokemons__inner.style = 'display: flex; align-items: center;justify-content: space-between; padding-top: 10px;';
        ellist.style = 'display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;';
        // li.style = ' width: 300px; height:380px; background-color: aliceblue; display:text-align: left; flex; align-items: center; flex-direction: column; margin-left:20px; border-radius:10px; border-radius: 10px; border:solid 3px rgb(0, 0, 0);  margin-top: 20px;';
        li.style = 'padding: 20px 20px; background-color: aliceblue; display:text-align: left; flex; align-items: center; flex-direction: column; margin-left:20px; border-radius:10px; border-radius: 10px; border:solid 3px rgb(0, 0, 0);  margin-top: 20px;';
        type.style = ' padding-top: 8px;  padding-bottom: 8px;';
        weight__kg.style = 'font-size: 16px; color: black;'
        height__m.style = 'font-size: 16px; color: black;'
        pokemons__inners.style = 'display: flex; align-items: center;justify-content: space-between; margin-top: 10px;';
        bottom__info.style = 'margin-top: 10px;  padding: 6px;border:solid 3px rgb(0, 0, 255);color: blue;background-color: aliceblue; border-radius: 5px;'
        bottom__boos.style = 'margin-top: 10px;  padding: 6px;border:solid 3px rgb(0, 255, 42);color: rgb(0, 255, 42);background-color: aliceblue;border-radius: 5px;' 
        pokemons__span.style = 'width: 100px; height:2px color: rgb(0, 0, 0); '
    }
}
render()