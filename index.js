import { personList } from "./data.js";



const container = document.querySelector("#container");

const  totalCards = Math.ceil(window.innerHeight/100);

personList.slice(0,totalCards + 5).forEach(person => {
    const card = document.createElement('div');
    card.id = person.id;
    card.className = 'card';

    const header = document.createElement('h4')
    header.textContent = person.name;

    const image = document.createElement('img')
    image.setAttribute('src',person.image)
    image.setAttribute('width','50px')

    const para = document.createElement('p')
    para.textContent = person.description;

    card.append(header,image,para);
    
    container.appendChild(card);

})


const callback = (entries, observer) => {
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
      //console.log(entry)
      if(entry.isIntersecting){
        console.log(entry.target.id);
        
      }
    });
  };

  const observer = new IntersectionObserver(callback,{
    root:document.querySelector("#container"),
    rootMargin:"0px",
    threshold:1.0
});

[...container.children].forEach((child)=>{
    observer.observe(child);
})


  















