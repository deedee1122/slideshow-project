function Slideshow(id) {
    this.currentIndex = 0;
    this.app = document.getElementById(id);
    
    if(!this.app){
      throw new Error('could not find app by id "' + id + '"')
    }
    this.getSlides();
    
     let previousSlideBtn = this.app.querySelector(".previous");
  
  if (!previousSlideBtn){
    previousSlideBtn = document.createElement('button')
    previousSlideBtn.textContent = 'PreviousSlideBtn'
    this.app.append(previousSlideBtn)
  }
  
    previousSlideBtn.addEventListener("click", () => {
       this.previousSlide();
    });
    
     let nextSlideBtn = this.app.querySelector(".next");
  
  if (!nextSlideBtn){
    nextSlideBtn = document.createElement('button')
    nextSlideBtn.textContent = 'nextSlideBtn'
    this.app.append(nextSlideBtn)
  }
  
    nextSlideBtn.addEventListener("click", () => {
       this.nextSlide();
    });
  }

  Slideshow.prototype.getSlides = function(){
    this.slides = this.app.querySelectorAll("img")
  }
  
  Slideshow.prototype.nextSlide = function(){
     this.toggleHide(this.slides[this.currentIndex])
    this.currentIndex = this.currentIndex + 1;
  
    if(this.currentIndex === this.slides.length){
      this.currentIndex = 0
    }
    this.toggleHide(this.slides[this.currentIndex])
  }
    
   Slideshow.prototype.previousSlide = function(){
     debugger
      this.toggleHide(this.slides[this.currentIndex])
    this.currentIndex = this.currentIndex - 1;
  
    if (this.currentIndex < 0){
      this.currentIndex = this.slides.length - 1
    }
      this.toggleHide(this.slides[this.currentIndex])
   }
  
    Slideshow.prototype.toggleHide = function(element) {
      if (element.style.display === "none") {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }
  
  
  export default Slideshow;