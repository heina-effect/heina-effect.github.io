
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
              <img id="skillBtn" class="navBtn navDark navActive" src="img/skill.svg" alt="skillSvg">
              <p class="caption">SKILL</p>
            </a>
          </li>
          <li class="navList">
            <a href="./project.html">
              <img id="projectBtn" class="navBtn navDark navActive" src="img/project.svg" alt="proSvg">
              <p class="caption">PROJECT</p>
            </a>
          </li>
          <li class="navList">
            <a href="./about.html">
              <img id="aboutBtn" class="navBtn navDark navActive" src="img/monster.svg" alt="monsterSvg">
              <p class="caption">ABOUT</p>
            </a>
          </li>
          <li class="navList">
            <a href="./contact.html">
              <img id="contactBtn" class="navBtn navDark navActive" src="img/add.svg" alt="addSvg">
              <p class="caption">CONTACT</p>
            </a>
          </li>
        </ul>
      </article>
    </header>
    `
  }
}
customElements.define('header-components', Header);

