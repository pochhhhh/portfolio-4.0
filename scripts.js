class TypeWriter{

  constructor(){

    this.output = "";
    this.message = "Hi, I'm Marlon. I enjoy developing websites.|";
    this.counter = 0;
    this.phraseNumber = 0;
    this.isDeleting = false;
    this.type();

  }

  delete(){

    let modifiedOutput = this.output.substr(0, this.counter);

    setTimeout(function(){

      this.counter--;
      modifiedOutput = this.output.substr(0, this.counter);
      this.output = modifiedOutput;
      document.querySelector('#typewriterCaption').textContent = this.output;


      if(this.output !== "Hi, I'm Marlon. I enjoy "){

        this.delete(this.counter, this.output);

      }

      if(this.output === "Hi, I'm Marlon. I enjoy "){

        this.type();

      }

    }.bind(this), 30);

  }

  type(){

    if(this.output === "Hi, I'm Marlon. I enjoy "){


    }

  setTimeout(function(){

    if(this.counter === this.message.length && this.message !== "Hi, I'm Marlon. I enjoy making a digital difference.|"){

      const changeWords = this.message.substring(24);
      const staticMessage = this.message.substr(0, 23);
      let counter = this.message.length;

      if(counter === this.message.length){

        this.isDeleting = true;
        this.delete();

      }

    }


    if(this.counter < this.message.length &&
      !this.isDeleting){

    this.output += this.message[this.counter];
    document.querySelector('#typewriterCaption').textContent = this.output;
    this.counter++;
    this.type();

    }

    if(this.counter < this.message.length &&
      this.isDeleting){

        this.isDeleting = false;

        const phrases = [

          "creating user experiences.|",
          "promoting brands.|",
          "making a digital difference.|"

        ];


        switch(this.phraseNumber){

          case 0:
          this.message = this.output + phrases[this.phraseNumber];
          this.phraseNumber++;
          this.type();
          break;

          case 1:
          this.message = this.output + phrases[this.phraseNumber];
          this.phraseNumber++;
          this.type();
          break;

          case 2:
          this.message = this.output + phrases[this.phraseNumber];
          this.phraseNumber++;
          this.type();
          break;


        }

    }



  }.bind(this),  65);


    }

  }


var typewriter = new TypeWriter();
