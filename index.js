let product_img = document.getElementById("product_img")
let btn = document.getElementsByClassName("btn")
btn[0].onclick =function(){
    product_img.src ="apparel6.jpg"
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btn[1].onclick =function(){
    product_img.src ="apparel5.jpg"
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
}
btn[2].onclick =function(){
    product_img.src ="apparel4.jpg"
    for(bt of btn){
        bt.classList.remove("active")
    }
    this.classList.add("active")
    
}