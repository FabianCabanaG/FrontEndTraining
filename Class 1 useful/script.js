const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const pa = document.querySelector('.pa');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log(
    {
        h1,p,pa,pid,input
    }
);
// ------------------- Edit html from JS

// -- Not that useful, someone could insert html code
// h1.innerHTML = 'Patito';
// -- changes text as text
// h1.innerText = 'patito'

//  --basic modification of classes

// console.log(h1.getAttribute('class'));
// h1.setAttribute('class','rojo');
// console.log(h1.getAttribute('class'));

// h1.classList.add('rojo');
// h1.classList.remove('verde');

// h1.classList.toggle();
// h1.classList.contains(); -- Boolean output

// input.value = "***********"

// --- create a new html tag and inserting it into html code (object.append)

const img = document.createElement('img');

img.setAttribute('src','https://i.blogs.es/5d6007/luffy-en-one-piece/1366_2000.jpeg');

pid.append(img); // add content after content in html -- Same as appendChild