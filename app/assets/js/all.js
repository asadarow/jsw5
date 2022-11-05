let data=[];
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json')
  .then(function (response) {
    data=response.data.data;
    init();
  });
const list=document.querySelector(".result-list");
const result=document.querySelector(".search-result");
let resultlength=0;
// 搜尋結果
function init(){
  let str="";
  let resultstr="";
  data.forEach(function(item){
    str+=`<li class="card"><div class="cover"><p class="area">${item.area}</p><p class="score">${item.rate}</p><a href="#"><img src=${item.imgUrl} alt="#"></a></div><div class="content"><div class="depiction"><h2>${item.name}</h2><p>${item.description}</p></div><div class="purchase"><p><span class="material-icons">error</span>剩下最後 ${item.group} 組</p><h3><span>TWD</span>$${item.price}</h3></div></div></li>`;
    list.innerHTML = str;
  });
  resultlength=data.length;
  resultstr+=`本次搜尋共 ${resultlength} 筆資料`
  result.innerHTML = resultstr;
};

// 篩選條件
const filter=document.querySelector(".filter");

filter.addEventListener("click",function(e){
  let str ="";
  let resultstr="";
  resultlength=0;
  data.forEach(function(item){
    if(e.target.value=="全部地區"){
      str+=`<li class="card"><div class="cover"><p class="area">${item.area}</p><p class="score">${item.rate}</p><a href="#"><img src=${item.imgUrl} alt="#"></a></div><div class="content"><div class="depiction"><h2>${item.name}</h2><p>${item.description}</p></div><div class="purchase"><p><span class="material-icons">error</span>剩下最後 ${item.group} 組</p><h3><span>TWD</span>$${item.price}</h3></div></div></li>`;
      resultlength=data.length;
    }else if(e.target.value==item.area){
      str+=`<li class="card"><div class="cover"><p class="area">${item.area}</p><p class="score">${item.rate}</p><a href="#"><img src=${item.imgUrl} alt="#"></a></div><div class="content"><div class="depiction"><h2>${item.name}</h2><p>${item.description}</p></div><div class="purchase"><p><span class="material-icons">error</span>剩下最後 ${item.group} 組</p><h3><span>TWD</span>$${item.price}</h3></div></div></li>`;
      resultlength++;
    }
    list.innerHTML = str;
  })
  resultstr+=`本次搜尋共 ${resultlength} 筆資料`
  result.innerHTML = resultstr;
})
// 新增資料
const btn = document.querySelector(".btn");
const fname = document.querySelector("#fname");
const imgurl = document.querySelector("#imgurl");
const area = document.querySelector(".country");
const price = document.querySelector("#price");
const count = document.querySelector("#count");
const star = document.querySelector("#star");
const memo = document.querySelector("#memo");
const addform=document.querySelector(".addform");
btn.addEventListener("click",function(e){
  
  if(fname.value.length<1){
    alert("請填寫套票名稱");
  }else if(imgurl.value.length<=1){
    alert("請填寫圖片網址");
  }else if(area.value===""){
    alert("請選擇景點地區");
  }else if(price.value<1){
    alert("套票金額請填寫大於1的數字");
  }else if(count.value<1){
    alert("套票組數請填寫大於1的數字");
  }else if(star.value<1|| star.value>10){
    alert("套票星級請填寫1到10之間的數字");
  }else if(memo.value.length<1){
    alert("請填寫套票描述");
  }else{
    let obj={};
    obj.id=data.length;
    obj.name = fname.value;
    obj.imgUrl=imgurl.value;
    obj.area=area.value;
    obj.description=memo.value;
    obj.group=count.value;
    obj.price=price.value;
    obj.rate=star.value;
    data.push(obj);
    resultlength++;
    alert("新增成功!");
    init();
    filter.value="全部地區";
    addform.reset();
  }
})




