//alert("hello word!")
let Blog = document.getElementsByClassName('bodyibou')
console.log(Blog);
for (let i = 0; i < Blog.length; i++) {
    let prix = Blog[i].children[2];
    console.log(prix);
    let btnplus = Blog[i].children[3].children[0]
    !console.log(btnplus);





    let quantite = Blog[i].children[3].children[1];
    let btnmoins = Blog[i].children[3].children[2];
    let qtt = parseInt(quantite.innerHTML)
    let count = parseInt(prix.innerHTML)
    console.log(qtt)

    btnplus.addEventListener('click', () => {
        qtt++
        quantite.innerText = qtt < 10 ? '0' + qtt : qtt
        prix.innerHTML = qtt * count

    });

    btnmoins.addEventListener('click', () => {
        qtt--;
        quantite.innerText = qtt < 10 ? '0' + qtt : qtt
        prix.innerText = qtt * count
        if (quantite > 0) {

            qtt--
            qtt > 0
        }
    })
}

let quantity = document.getElementsByClassName('bodyibou')

console.log(quantity);
for (let i = 0; i < quantity.length; i++) {
    let sup = quantity[i].children[4].children[0]
    let like = quantity[i].children[4].children[1]


    sup.addEventListener('click', () => {
          
        if (sup.remove()){
         btnmoins.addEventListener('click').remove()
         btnplus.addEventListener('click').remove()
        }
        return sup.remove(quantity[i])
     
    });
    like.addEventListener('click', () => {

       return like.style.color = "red"

    })

}
let body = document.getElementById('total')
console.log(total)

for (let i = 0; i < total.length; i++) {
    let tot = document.getElementsByClassName('tot')
    let prix1 = document.getElementsByClassName('prix1')
    let prix2 = document.getElementsByClassName('prix2')
    let prix3 = document.getElementsByClassName('prix3')
    console.log(prix1)
    function Total(tot) {
        return tot.reduce((prix1, prix2, prix3) => prix1 + prix2 + prix3, 0);



    }

    window.onload = Total
}