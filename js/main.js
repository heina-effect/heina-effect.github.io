
class Header extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <header>
      <article id="header">
        <section>
          <div class="mySelf">
            <div>
              <img src="img/heinaImg.png" alt="heinaImg">
            </div>
            <div class="introRandom">
              <p>
                I'M
              </p>
              <p class="textRandom">
              </p>
              <p>
                HYUNA KIM
              </p>
            </div>
          </div>
          <div class="quotes">
            <p>
              "I would rather die of passion than of boredom"
            </p>
            <span>
              Vincent van Gogh
            </span>
          </div>
        </section>
        <section class="mySelf_txt">
          <p>
            안녕하세요
            <br>
            경험을 통해 성장하고 있는
            <br>
            FRONT-END 개발자 입니다.
            <br>
          </p>
          <p>
            저에 대해 궁금하시거나 관심이 있으시다면, 언제든지 연락주세요 
            <strong>
              heina2ffect@gmail.com
            </strong>    
          </p>
          <p>
            더 멋진 기회를 꿈꾸고 있습니다.
            <br>
            언제든지 다시 방문해주세요.
            <br>
            감사합니다. 다음에 또 뵙겠습니다. 
          </p>
          <p>
            Adios
          </p>
        </section>
      </article>
      <article id="nav">
        <ul>
          <li >
            <a class="darkMode">
              <img class="lightBtn" src="img/sun.png" alt="darkLightMode">
            </a>
          </li>
          <li class="navList">
            <a href="./index.html">
              <!-- <img class="navBtn" src="img/skill.svg" alt="skillSvg"> -->
              <img class="navBtn" src="img/skill.png" alt="skillSvg">
              <p class="caption">SKILL</p>
            </a>
          </li>
          <li class="navList">
            <a href="./project.html">
              <img class="navBtn navDark" src="img/project.svg" alt="proSvg">
              <p class="caption">PROJECT</p>
            </a>
          </li>
          <li class="navList">
            <a href="./about.html">
              <img class="navBtn navDark" src="img/monster.svg" alt="monsterSvg">
              <p class="caption">ABOUT</p>
            </a>
          </li>
          <li class="navList">
            <a href="./contact.html">
              <img class="navBtn navDark" src="img/add.svg" alt="addSvg">
              <p class="caption">CONTACT</p>
            </a>
          </li>
        </ul>
      </article>
    </header>
    `
    // let navLists = document.querySelectorAll(".navList>a>img")
    // for (let navList of navLists) {
    //   navList.addEventListener("click", (e)=>{
    //     e.preventDefault();
    //     console.log("target",e)
    //     // navList.src = "img/skill.png";
    //     let filePath = navList.src
    //     // let filelength = srcd.length;
    //     console.log("파일주소", filePath)
        
    //     let change = filePath.split(".").pop()


    //     // let fileDot = filePath.substr(-3)
    //     // console.log("확장자명", fileDot)
    //     // fileDot = "png"
    //     // console.log("확장자명", fileDot)
    //     // src="img/skill.png"

    //     // http://127.0.0.1:5500/Heina/heina-effect.github.io/img/project.svg
    //   })
    // }
  }
}
customElements.define('header-components', Header);

