class Typewriter{


  constructor(){

    this.showCaseText = document.querySelector('.header-showcase .section-a .caption h1');
    this.captionlastSentence = this.showCaseText.textContent.substring(16, this.showCaseText.textContent.length);
    this.events();


  }


  events(){






  }

  //Methods

  run(){

    if(this.captionlastSentence === "I build websites_"){

      console.log(true);

    }


  }

}

var typewriter = new Typewriter();


typewriter.run();
