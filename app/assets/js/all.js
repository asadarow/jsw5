let data = [
  {
    "id": 0,
    "name": "肥宅心碎賞櫻3日",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    "area": "高雄",
    "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    "group": 87,
    "price": 1400,
    "rate": 10
  },
  {
    "id": 1,
    "name": "貓空纜車雙程票",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台北",
    "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    "group": 99,
    "price": 240,
    "rate": 2
  },
  {
    "id": 2,
    "name": "台中谷關溫泉會1日",
    "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    "group": 20,
    "price": 1765,
    "rate": 7
  }
];
const list=document.querySelector(".result-list");
// 搜尋結果
function init(){
  let str="";
  data.forEach(function(item){
    str+=`<li class="card">
    <div class="cover">
      <p class="area">${item.area}</p>
      <p class="score">${item.rate}</p>
      <img src=${item.imgUrl} alt="#">
    </div>
    <div class="content">
      <div class="depiction">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
      </div>
      <div class="purchase">
        <p>
          <span class="material-icons">
          error
          </span>
          剩下最後 ${item.group} 組</p>
        <h3><span>TWD</span>$${item.price}</h3>
      </div>
    </div>
    </li>`;
    list.innerHTML = str;
  });
};
// 篩選條件
const filter=document.querySelector(".filter");
filter.addEventListener("click",function(e){
  let str ="";
  data.forEach(function(item){
    if(e.target.value=="全部地區"){
      str+=`<li class="card">
    <div class="cover">
      <p class="area">${item.area}</p>
      <p class="score">${item.rate}</p>
      <img src=${item.imgUrl} alt="#">
    </div>
    <div class="content">
      <div class="depiction">
        <h2>${item.name}</h2>
        <p>${item.description}</p>
      </div>
      <div class="purchase">
        <p>
          <span class="material-icons">
          error
          </span>
          剩下最後 ${item.group} 組</p>
        <h3><span>TWD</span>$${item.price}</h3>
      </div>
    </div>
    </li>`;
    }else if(e.target.value==item.area){
      str+=`<li class="card">
      <div class="cover">
        <p class="area">${item.area}</p>
        <p class="score">${item.rate}</p>
        <img src=${item.imgUrl} alt="#">
      </div>
      <div class="content">
        <div class="depiction">
          <h2>${item.name}</h2>
          <p>${item.description}</p>
        </div>
        <div class="purchase">
          <p>
            <span class="material-icons">
            error
            </span>
            剩下最後 ${item.group} 組</p>
          <h3><span>TWD</span>$${item.price}</h3>
        </div>
      </div>
      </li>`;
    }
    list.innerHTML = str;
  })
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
btn.addEventListener("click",function(e){
  let obj={};
  obj.name = fname.value;
  obj.imgUrl=imgurl.value;
  obj.area=area.value;
  obj.description=memo.value;
  obj.group=count.value;
  obj.price=price.value;
  obj.rate=star.value;
  data.push(obj);
  init();
  // fname.value="";
  // imgurl.value="";
  // area.value="";
  // memo.value="";
  // count.value="";
  // price.value="";
  // star.value="";
})




