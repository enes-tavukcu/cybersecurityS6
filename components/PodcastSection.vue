<template>
<body>
    <div class="video-page">
      <div class="video-page-header">
        <h1 class="video-page-header-title">Découvrez notre Podcast avec une tierlist</h1>
        <div class="video-description">
         <div class="header-left">
          <img src="@/assets/MiniaEmission.jpg">
           
          </div>
          <div class="header-right">
            <h1>Tier List #1</h1>
            <h2>2025<span>35mins</span></h2>
           <p> Découvrez notre tierlist sur la cybersécurité en classant les hacks du 21ème siècle des meilleurs au pires hacks.</p>
            <div class='info'>
              <h4>Régie :</h4>
              <h5>Dalil Hammachi</h5>
            </div>
            <div class='info'>
              <h4>Participants: </h4>
              <h5>Thomas Hadj-Aïssa, Angelo Simoes, Sofiane Mouadeb et Enes Tavukcu </h5>
            </div>
            
          </div>
        </div>
      </div>
      <div class="video-page__streaming">
        <iframe 
  class="video-page__streaming-iframe"
  src="https://www.youtube.com/embed/EqwWRzPTvZM" 
  title="Vidéo YouTube" 
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

    </div>
      
      
    </div>
    </body>
</template>


<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Fira+Sans:200,400,500,600,700|Plaster);

body{
  margin:0;
  color:#E5DADA;
  overflow-x: hidden;
  font-family:'Fira Sans', sans-serif;
  background-color:black;
  &::-webkit-scrollbar {
          width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: black; 
  }
  &::-webkit-scrollbar-thumb {
    background:#454545; 
    border-radius:3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
}

*{
  box-sizing: border-box;
}

h1,h2,h3,h4,h5,p{
  cursor:default;
}

.video-page{
  width:100%;
  margin:auto;
  min-height:100vh;
  margin-bottom:50px;
  .video-page-header{
    display: flex;
    flex-direction: column;
    width:100%;
    min-height:450px;
    position:relative;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 100%);
    display:flex;
    &:before{
      content: "";
      background: url(https://images.gr-assets.com/books/1348134701l/129984.jpg);
      background-size: cover;
      background-position:center;
      position: absolute;
      top: 0;
      height: 98%;
      filter: blur(8px);
      width: 100%;
      z-index: -1;
    }
    .video-page-header-title{
      text-align: center;

      @include small-down() {
        font-size: 1.2rem;
      }
    }
    .video-description{
      width:100%;
      max-width:1000px;
      margin:auto;
      display:flex;
      gap: 55px;

      @include small-down() {
        display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
      }
      .header-left{
        width:40%;
        min-width:250px;
        display:flex;
        flex-direction:column;
        img {
          border-radius:0.25rem;
        
          object-fit:cover;
        }
        .my-list{
          border-radius: 0.25rem;
          padding: 10px 15px;
          display: flex;
          align-items:center;
          cursor:pointer;
          transition: all .5s;
          border: 2px solid #E5DADA;
          margin-top:20px;
          text-transform:uppercase;
          width: 120px;
          &:hover{
            background-color:#E59500;
          }
          i {
            margin-right:10px;
          }
        }
      }
      .header-right{
         width:60%;
         display:flex;
         flex-direction:column;
         justify-content:center;

         @include small-down() {
          width:80%;
         }
         h1
          {
            margin-bottom:0;
          } 
          h2 {
            font-size:20px;
            margin:0;
            padding:0;

            @include small-down() {
              font-size: 16px;
            }
            span {
              margin-left:10px;
              color:#454545;
              font-weight:bold;
            }
          }
          p {
            color:#888888;

            @include small-down() {
              font-size: 14px;
            }
          }
          .info {
            display:flex;
            color: #454545;
            h4, h5 {
              margin:0;
              font-size:18px

              
            }
            h5 {
              font-weight:normal;
              margin-left:10px;
            }
            @include small-down() {
              h5, h4 {
                font-size: 14px;

              }
            }
          }
          .rating{
            width:40px;
            border-radius: 0.25rem;
            margin-bottom:20px;
            padding: 5px 10px;
            background-color: rgba(132, 0, 50, 0.8);
          }
      }
    }
  }

  .video-page {
  &__streaming {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    margin: auto;
    position: relative;
    
    &-iframe {
      width: 100%;
      height: 500px;
      border-radius: 10px;
      
      @include small-down() {
        height: 250px;
        width: 80%;
      }
    }
  }
}

  .streaming-container{
    width:100%;
    max-width:1000px;
    margin:0 auto 40px auto;
    position:relative;
    img {
      width:100%;
    }
    &:after{
      content:"";
      top:0;
      position:absolute;
      width:100%;
      height:100%;
      background-color: rgba(0,0,0,0.6);
    }
    .streaming-play{
      position: absolute;
      width:100%;
      height:100%;
      top:0;
      display:flex;
      justify-content:center;
      align-items:center;
      font-size:70px;
      z-index:2;
      color: #454545;
      i {
        cursor:pointer;
        transition: all .5s;
        &:hover{
          color:#E5DADA;
        }
      }
    }
  }
  .comments-container{
      width:100%;
      max-width:1000px;
      margin:auto;
      border-top: 2px solid #454545;
      h1 {
        font-size:25px;
        margin-bottom:30px;
        color: #454545;
        font-weight: normal;
      }
     .profile-img {
          width:50px;
          height:50px;
          border-radius:0.25rem;
          object-fit:cover;
        }
      .one-comment{
        display: flex;
        margin-bottom:20px;
        .comment-content{
          margin-left:10px;
          padding-top:5px;
          h4 {
            margin:0;
            span{
              color: #454545;
              margin-left:10px;
            }
          }
          p {
            margin: 0;
            margin-top:10px;
            color: #888888;
          }
        }
      }
    .add-comment{
      display:flex;
      .submit-comment{
        margin-left:10px;
        display:flex;
        flex-direction: column;
        flex-grow:1;
        input {
          background:transparent;
          border:0;
          border-bottom: 1px solid #454545;
          font-family:'Fira Sans', sans-serif;
          font-size:15px;
          color: #E5DADA;
          padding: 5px 0;
          transition: all .5s;
          &:focus{
            border-bottom: 1px solid #E5DADA;
            outline:none;
          }
        }
        .submit{
            font-size:15px;
            padding: 5px 10px;
            border-radius:0.25rem;
            align-self:flex-end;
            cursor:pointer;
            color: #888888;
            transition: all .5s;
            &:hover{
              color: #E59500;
            }
        }
      }
    }
   }

   
}



</style>