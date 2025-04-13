let search =document.getElementById('search');
let search_icon =document.getElementById('search_icon')


search_icon.addEventListener('click',()=>{
    search.classList.toggle('search_input')
})

let header_gen =document.getElementById('header_gen');
let header_title =document.getElementById('header_title');
let header_pra =document.getElementById('header_pra');
let header =document.getElementsByTagName('header')[0];
let slider_btns = Array.from(document.getElementsByClassName('slider'));


const slider_load =()=> {
setTimeout(()=>{
     header.style.background="url(https://www.hindustantimes.com/ht-img/img/2024/04/22/1600x900/amitabh_bachchan_kalki_2898_AD_1713755993913_1713755994323.png) no-repeat";
     (document.getElementById('header_dur')).innerText=" 1h 47min";
     header_gen.innerHTML=  `<i class="ri-star-fill"></i>8.9
                <span>Action/ sci-fi/time</span>`;
     header_title.innerText =`kalki`;
     header_pra.innerText="KΛLKI 2898 – Λ.D:- is a 2024 Indian Telugu-language epic science fiction film[direct by Nag Ashwin";   
     slider_btns[0].style.background =" #fff";         
     slider_btns[1].style.background =" rgb(184 , 184, 184, .1)";         
     slider_btns[2].style.background =" rgb(184 , 184, 184, .1)";         
}, 0);   

setTimeout(()=>{
    header.style.background="url(https://cdn.marvel.com/content/1x/avengersendgame_lob_mas_dsk_01.jpg) no-repeat";
    (document.getElementById('header_dur')).innerText=" 1h 57min";
    header_gen.innerHTML=  `<i class="ri-star-fill"></i>8.9
               <span>Action/ sci-fi/time travel</span>`;
    header_title.innerText =`Avenger Endgame`;
    header_pra.innerText="Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU).";   
    slider_btns[0].style.background =" rgb(184 , 184, 184, .1)";         
    slider_btns[1].style.background =" #fff";         
    slider_btns[2].style.background =" rgb(184 , 184, 184, .1)";         
},5000);    

setTimeout(()=>{
    header.style.background="url('https://www.redefine.co/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F3sjsytt3tkv5%2F32CuFWxlEHvkytg7fx4GMQ%2F29d4060f663dd198972a5c566ddc017d%2FCHAVRE_Still_1.jpg&w=3840&q=75') no-repeat";
    (document.getElementById('header_dur')).innerText=" 2h 57min";
    header_gen.innerHTML=  `<i class="ri-star-fill"></i>8.9
               <span>Action/ historical/thriller </span>`;
    header_title.innerText =`CHHAAVA`;
    header_pra.innerText=" Chhaava (lit. 'Lion's cub') is a 2025 Indian Hindi-language historical action film based on the life of Sambhaji, the second ruler of the Maratha Empire, who is played by Vicky Kaushal. An adaptation of the Marathi novel Chhava by Shivaji Sawant,";   
    slider_btns[0].style.background =" rgb(184 , 184, 184, .1)";         
    slider_btns[1].style.background ="  rgb(184 , 184, 184, .1)";         
    slider_btns[2].style.background =" #fff";         
},10000);    
 }

setInterval(slider_load ,15000);
slider_load();



let plays = document.getElementById('play');
let videos = document.getElementById('video');
let play_btn = document.getElementById('play_btn');



play_btn.addEventListener('click',()=>{
   videos.play();
    
   plays.classList.add('bi-pause-fill');
   plays.classList.remove('bi-play-fill');
    
});

plays.addEventListener('click',()=>{
    if(videos.paused|| videos.currentTime <=0){
        plays.classList.add('bi-pause-fill');
        plays.classList.remove('bi-play-fill');
        videos.play();

    }
    else{
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
        videos.pause();
    }
});


videos.addEventListener('timeupdate',()=>{
    let start_time=document.getElementById('start_time');
    let end_time=document.getElementById('end_time');
    let video_duration =videos.video_duration;
    let min=math.floor(video_duration /60);
    let hour =math.floor(min /60);
    let sec =math.floor(video_duration % 60);
    let video_current_time =videos.currentTime;
    console.log(video_duration);
    

    let start_min =math.floor(video_current_time /60);
    let start_sec =math.floor(video_current_time % 60);
    let start_hour =math.floor(video_current_time /60);

    if(start_min<10){
        start_min ="0" +start_min;
    }
    if(start_sec<10){
        start_sec ="0" +start_sec;
    }

    start_time.innerText =start_min + ":" +start_sec;

    if(start_hour<10){
        start_hour ="0" +start_hour;
    }

    if(start_min == 60|| start_min>60) {
        start_time.innerText = start_hour + ":" + start_min +  ":" + start_sec;
    }
    let seek= document.getElementById('seek');
    let seek_2= document.getElementById('seek_2');
    let seek_dot= document.getElementById('seek_dot');
    
    let progressbar = parseInt((videos.currentTime/ videos.duration)*100);
    
    seek.value = progressbar;
    
    let seekbar =seek.value;
    seek_2.style.width=`${seekbar}%`;
    seek_dot.style.left=`${seekbar}%`;


    seek.addEventListener('change',()=>{
        videos.currentTime =seek.value * videos.duration/100;
    })
});


let full_screen =document.getElementById('full_screen');
full_screen.addEventListener('click',()=>{
    videos.requestFullscreen();
});


let title_video = document.getElementsByClassName('title_video');
let video_1 = document.getElementsByClassName('video_1');


video_1[0].addEventListener('click',()=>{
    videos.src="kalki-2898-ad-blockbuster-promo-hindi-prabhas-amitabh-kamal-haasan-deepika-nag-ashwin-1080-publer.io.mp4";
    videos.play(); 
    title_video[0].innerText ="kalki (2024)";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[1].addEventListener('click',()=>{
    videos.src="avengers-endgame-official-trailer-hindi-in-cinemas-april-26-1080-publer.io (1).mp4";
    videos.play(); 
    title_video[0].innerText ="avenger endgame(2020)";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[2].addEventListener('click',()=>{
    videos.src="Chhaava.mp4";
    videos.play(); 
    title_video[0].innerText ="Chhaava";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});


const movies =[
    {
        id:36,
        img:"the gazi attack.jpg",
        title:"the gazi attack",
        letter:"t",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2011,
        rate:2.5,
        url:"the_gazi_attack.html",
        tppr:"trend",
        msot:"movie",

        

    },
    {
        id:35,
        img:"comndo.jpg",
        title:"comndo",
        letter:"c",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2020,
        rate:9.3,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },
    {
        id:34,
        img:"caption phillips.jpg",
        title:"caption phillips",
        letter:"c",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2020,
        rate:9.1,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },

    {
        id:33,
        img:"bloodshoot.jpg",
        title:"Blood Shoot",
        letter:"b",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:9.7,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },

    {
        id:32,
        img:"blade.jpg",
        title:"Blade",
        letter:"b",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:7.7,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },
    {
        id:31,
        img:"takepoint.jpg",
        title:"Take point",
        letter:"t",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:7.9,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },

    {
        id:30,
        img:"battel drown.jpg",
        title:"Battel Drown",
        letter:"b",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2020,
        rate:8.9,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },

    {
        id:29,
        img:"bagi.jpg",
        title:"Bagi",
        letter:"b",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"comady",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2020,
        rate:8.8,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },

    {
        id:28,
        img:"bad boys.jpg",
        title:"Bad Boys",
        letter:"b",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:6.8,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },
    {
        id:27,
        img:"ateet.jpg",
        title:"Ateet",
        letter:"a",
        genrel:"action",
        genre2:"none",
        genre3:"none",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2020,
        rate:9.7,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },
    {
        id:26,
        img:"aqwaman.jpg",
        title:"Aqwaman",
        letter:"a",
        genrel:"action",
        genre2:"crime",
        genre3:"adeventure",
        genre4:"biography",
        genre5:"animation",
        genre6:"none",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2020,
        rate:9.1,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",

    },

    {
        id:25,
        img:"angel.jpg",
        title:"Angel",
        letter:"a",
        genrel:"action",
        genre2:"crime",
        genre3:"adeventure",
        genre4:"biography",
        genre5:"animation",
        genre6:"comady",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:8.8,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",

    },
    {
        id:24,
        img:"allahdin.jpg",
        title:"Allahdin",
        letter:"a",
        genrel:"action",
        genre2:"crime",
        genre3:"adeventure",
        genre4:"biography",
        genre5:"animation",
        genre6:"comady",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:8.2,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",


    },
    {
        id:23,
        img:"air.jpg",
        title:"Air",
        letter:"a",
        genrel:"none",
        genre2:"crime",
        genre3:"adeventure",
        genre4:"biography",
        genre5:"animation",
        genre6:"comady",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:8.8,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",

    },
    {
        id:22,
        img:"angel.jpg",
        title:"Angel",
        letter:"a",
        genrel:"action",
        genre2:"crime",
        genre3:"adeventure",
        genre4:"biography",
        genre5:"animation",
        genre6:"comady",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:8.8,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",


    },
    {
        id:21,
        img:"angel.jpg",
        title:"Angel",
        letter:"a",
        genrel:"action",
        genre2:"crime",
        genre3:"adeventure",
        genre4:"biography",
        genre5:"animation",
        genre6:"comady",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:8.8,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",

    },
    {
        id:20,
        img:"angel.jpg",
        title:"Angel",
        letter:"a",
        genrel:"action",
        genre2:"crime",
        genre3:"adeventure",
        genre4:"biography",
        genre5:"animation",
        genre6:"comady",
        genre7:"documentary",
        genre8:"none",
        genre9:"18+",
        genrel0:"scifi",
        genrel1:"horror",
        year:2021,
        rate:8.8,
        url:"themanor.html",
        tppr:"trend",
        msot:"movie",
    },
]


let action1 =document.getElementById('action1');
let action_bx =document.getElementById('action_bx');

action1.addEventListener('click',()=>{
    action1.classList.toggle('cato_button_active');
    action_bx.classList.toggle('movie_box_active');
   
});
document.querySelectorAll('.avenger-movies .gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('img').style.transform = 'rotateY(20deg)';
        item.querySelector('img').style.transition = 'transform 0.6s ease-in-out';
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('img').style.transform = 'rotateY(0deg)';
    });
});

let year=document.getElementById('year');
let a_z = document.getElementById('a-z');
let lla_2=document.getElementById('lla_2');



year.addEventListener('click', ()=>{
    year.classList.toggle('show_year1')
});


a_z.addEventListener('click', ()=>{
    a_z.classList.toggle('show_year1')
});

lla_2.addEventListener('click',()=>{
    lla_2.classList.toggle('list')
});




let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param
let countItem = items.length;
let itemActive = 0;
// event next click
next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//event prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}
// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 50000)
function showSlider(){
    // remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setPositionThumbnail();

    // clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 50000)
}
function setPositionThumbnail () {
    let thumbnailActive = document.querySelector('.thumbnail .item.active');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

// click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})




















































