"use strict"

    // localStorage.setItem("name","Cahandar")
    // localStorage.setItem("surname","Velibeyli")

    // console.log(localStorage.getItem("name"));

// let names =["Pervin","Elekber","Aqshin"]

// localStorage.setItem("names",JSON.stringify(names))





// document.querySelector("button").onclick=function(){
//     //  localStorage.removeItem("name")
//     // localStorage.clear()

//     let datas=JSON.parse(localStorage.getItem("names"))

//     for (const item of datas) {
//         console.log(item);
        
//     }
// }




let cardBtns=document.querySelectorAll("#shop a")

let products=[];

if(localStorage.getItem("basket") !=null){
    products=JSON.parse(localStorage.getItem("basket"))
}


cardBtns.forEach(btn => {

    btn.addEventListener("click",function(e){
        e.preventDefault()

        let productId=parseInt(this.parentNode.parentNode.getAttribute("data-id"))
        let productImg=this.parentNode.previousElementSibling.getAttribute("src");
        let productName=this.parentNode.firstElementChild.innerText;
        let productDesc=this.parentNode.children[1].innerText;
        let productPrice=this.previousElementSibling.innerText;

        

        let existProduct=products.find(m=>m.id==productId)

        if(existProduct!=undefined){
            existProduct.count+=1;

        }else{
            products.push({
                id:productId,
                name:productName,
                img:productImg,
                description:productDesc,
                price:productPrice,
                count:1
            })
        }
        getBasketCount(products)

        localStorage.setItem("basket",JSON.stringify(products))
    })
});

function getBasketCount(arr){
    let sum=0;
    for (const item of arr) {
        sum+=item.count
    }
    document.querySelector("sup").innerText=sum;
}

getBasketCount(products)