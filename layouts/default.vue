<template>
  <div class="page">
    <header class="header">
      <Header />
    </header>
    <div class="container container-page">
      <Nuxt />
    </div>
    <footer class="footer">
      <Footer/>
    </footer>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
//font-family: 'Merriweather', serif;

html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #E5E5E5;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    font-family: 'Merriweather', serif;
  }
  .page{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
  }
  .container{
    width: 1206px;
    display: flex;
  }
  h1{
    font-weight: bold;
    font-size: 24px;
    color: #343030;
  }
  h2{
    font-size: 18px;
    font-weight: normal;
    line-height: 150%;
    color: #343030;
  }
  h3{
    font-weight: bold;
    font-size: 16px;
    color: #343030;
    line-height: 150%;
  }
  h4{
    font-weight: bold;
    font-size: 16px;
    color: #343030;
    line-height: 150%;
  }
  h5{
    font-weight: normal;
    font-size: 16px;
    color: #343030;
    line-height: 150%;
  }
  h6{
    font-weight: 300;
    font-size: 16px;
    color: #343030;
    line-height: 150%;
  }
  a{
    text-decoration: none;
  }
  .through-text{
    text-decoration: line-through;
  }
  button{
    min-width: 118px;
    text-align: center;
    padding: 14px;
    font-weight: bold;
    font-size: 14px;
    background: #403432;
    border: none;
    color: #F4F6F9;
    transition: background-color .2s ease-in-out;
    &:hover{
      background-color: #776763;
    }
    &:disabled{
      background-color: #C1B4B1;
    }
    &:focus{
      outline: none;
    }
    &.active{
      background: #5B3A32;
      &:disabled{
        background: #5B3A32;
      }
    }
  }
  input[type=text]{
    font-weight: normal;
    font-size: 14px;
    color: #343030;
    min-width: 416px;
    border: 1px solid #E1E1E1;
    padding: 13px 16px;
    background: #E5E5E5;
    transition: border .2s ease-in-out;
    &::placeholder{
      font-size: 14px;
      color: #9F9F9F;
    }
    &:focus{
      background: #E5E5E5;
      outline: none;
      border: 1px solid #B5B5B5;
    }
  }
  footer,
  header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E1E1E1;
    padding: 24px 0;
    .container{
      justify-content: space-between;
      .right{
        width: 50%;
        display: flex;
        justify-content: flex-end;
      }
      .left{
        width: 50%;
        nav{
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }
  footer{
    background: #ECEAEA;
    .container{
      .right{
        display: flex;
        align-items: center;
        justify-content: space-around;
        a{
          color: #555555;
        }
      }
    }
  }

  .container-page{
    min-height: calc(100vh - 202px);
    padding-top: 45px;
    .art-list{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }
}

</style>
