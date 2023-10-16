const  llamada_A_la_API=async()=>{
    let url ="https://api.chucknorris.io/jokes/random"
    const api = await fetch(url)
    const  data = await api.json()

    escrivirData(data)
}
const escrivirData = (data)=>{
    divRes = document.querySelector("#resultado")
    divRes.innerHTML = ` <div class="card " style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.value}</h5>
      <p class="card-text"> fue creada el ${data.created_at}</p>
      <button class="btn  boton" onclick="llamada_A_la_API()" type="submit">Buscar otra</button>
    </div>
  </div>`

}
const  llamada_de_categoria=async(catogoria ="animal")=>{
    let url =`https://api.chucknorris.io/jokes/random?category=${catogoria}`
    console.log(`el ur es ${url}`)
    // let url =`https://api.chucknorris.io/jokes/random?category=animal`
    const api = await fetch(url)
    const  data = await api.json()
    console.log(data)
    escrivirDataCatogoria(data)

}
const escrivirDataCatogoria = (data)=>{

    divRes = document.querySelector("#categoria")
    divRes.innerHTML = ` <div class="card " style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${data.value}</h5>
      <p class="card-text"> la cateogria es ${data.categories}</p>
      
    </div>
  </div>`

}
llamada_A_la_API()
llamada_de_categoria()