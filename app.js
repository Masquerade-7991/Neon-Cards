const cluster = document.querySelector('.container-cluster');

function cardLoad(index){
  return `<div class="container">
      <div class="box b${index}">
        <span></span>
        <div class="content">
          <h2>Card ${index}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, numquam?</p>
          <a href="#">Read more</a>
        </div>
      </div>
    </div>`;
}

window.addEventListener('DOMContentLoaded' , () => {
  let x =[1,2,3,4];
  cluster.innerHTML = x.map((index) => {
    return cardLoad(index);
  }).join('');
});