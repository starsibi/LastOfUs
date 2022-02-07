import { Component,OnInit } from '@angular/core';
import { Container, Main } from 'ng-particles';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'LastOfUs';
  showLoader: boolean = true;

  id = "tsparticles";
  
  /* or the classic JavaScript object */
  particlesOptions = {          
      background: {
          color: {
              value: "#D47306"
          },            
      },
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: "push"
              },
              onHover: {
                  enable: true,
                  mode: "repulse"
              },
              resize: true
          },
          modes: {
              bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
              },
              push: {
                  quantity: 4
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              }
          }
      },
      particles: {
          color: {
              value: "#ffffff"
          },
          links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
          },
          move: {             
              enable: true,             
              random: false,
              speed: 6,
              straight: false
          },
          number: {
              density: {
                  enable: true,
                  area: 800
              },
              value: 80
          },
          opacity: {
              value: 0.5
          },
          shape: {
              type: "circle"
          },
          size: {
              value: { min: 1, max: 5 }
          }
      },
      detectRetina: true
  };

  particlesLoaded(container: Container): void {
      console.log(container);
  }

  particlesInit(main: Main): void {
      console.log(main);

      // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
  ngOnInit(){
    this.init();
  }
 init() {
  setTimeout(() => {
    this.showLoader = false;
  }, 9000); 

  
 }
}
