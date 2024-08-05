import 'aframe';


AFRAME.registerComponent('make-visible', {
  schema: {
    target: {type: 'string', default: '#descriptionBox1'}
  },


  
  init: function() {
    const el = this.el
    const descriptionBox = document.querySelector(this.data.target);
    
    if (el && descriptionBox) {
      const toggleVisibility = () => {
        const isVisible = descriptionBox.getAttribute('visible') ;
        console.log(isVisible)
        descriptionBox.setAttribute('visible', (!isVisible).toString());
      };

      this.toggleVisibility=toggleVisibility

      el.addEventListener('click', toggleVisibility);
    }
  },

  remove: function() {
  
      this.el.removeEventListener('click', this.toggleVisibility);
    }
  }
)

/* 

AFRAME.registerSystem('scene-switcher', {
  init: function () {
    this.scenes = {};
    this.currentScene = null;
  },

  registerScene: function (sceneId:string, sceneElement:HTMLElement) {
    this.scenes[sceneId] = sceneElement;
  },

  switchScene: function (sceneId:string) {
    switch (sceneId) {
      case 'scene1':
        this.changeScene('#scene1');
        break;
      case 'scene2':
        this.changeScene('#scene2');
        break;
      // Add more cases as needed
      default:
        console.warn(`No scene found for id: ${sceneId}`);
    }
  },

  changeScene: function (sceneId:string) {
    if (this.currentScene) {
      this.currentScene.setAttribute('visible', false);
    }
    this.currentScene = this.scenes[sceneId];
    if (this.currentScene) {
      this.currentScene.setAttribute('visible', true);
    }
  }
});


AFRAME.registerComponent('scene-switcher-button', {
  schema: {
    targetScene: { type: 'string' }
  },

  init: function () {
    this.el.addEventListener('click', () => {
      var sceneSwitcherSystem = this.el.sceneEl.systems['scene-switcher'];
      sceneSwitcherSystem.switchScene(this.data.targetScene);
    });
  }
});
 */
/* 
AFRAME.registerComponent('scene-switcher', {
  schema: {
    target: { type: 'string' } // Changed to 'string' to store the selector string
  },

  init: function () {
    const el = this.el;
    const targetSelector = this.data.target;

    el.addEventListener('click', function () {
      const targetScene = document.querySelector(targetSelector);
      if (!targetScene) {
        console.error(`Target scene '${targetSelector}' not found.`);
        return;
      }

      // Hide all scenes
      const scenes = document.querySelectorAll('a-scene');
      scenes.forEach(function (scene) {
        (scene as HTMLElement).style.display = 'none';
      });

      // Show the target scene
      (targetScene as HTMLElement).style.display = 'block';
    });
  }
});


 */
AFRAME.registerComponent("click-log", {
  init: function() {
    this.myFunction = function() {
      console.log("clicked");
    };

    this.el.addEventListener("click", this.myFunction);
  },

  remove: function() {
    this.el.removeEventListener("click", this.myFunction);
  }
});




