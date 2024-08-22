import 'aframe';

AFRAME.registerComponent('make-visible', {
  schema: {
    target: { type: 'selector' }
  },

  init: function() {
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.el.addEventListener('click', this.toggleVisibility);
  },

  toggleVisibility: function() {
    const targetEl = this.data.target;
    if (targetEl) {
      const currentVisibility = targetEl.getAttribute('visible');
      targetEl.setAttribute('visible', !currentVisibility);
      this.handleVisibilityAndClickEvents();
    } else {
      console.warn('selectionPlane not found');
    }
  },

  handleVisibilityAndClickEvents: function() {
    this.el.sceneEl.emit('toggle-visibility-and-click-events');
  },

  remove: function() {
    this.el.removeEventListener('click', this.toggleVisibility);
  }
});

/* AFRAME.registerComponent('make-visible', {
  schema: {
    target: {type: 'selector'}
  },
  
  init: function() {
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.el.addEventListener('click', this.toggleVisibility);
  },

  toggleVisibility: function() {
    const targetEl = this.data.target;
    if (targetEl) {
      const currentVisibility = targetEl.getAttribute('visible');
      targetEl.setAttribute('visible', !currentVisibility);
  
    } else {
      console.warn('descriptionbox not found');
    }
  },

  remove: function() {
    this.el.removeEventListener('click', this.toggleVisibility);
  }
}); */

AFRAME.registerComponent('toggle-event', {
  schema: {
    target: { type: 'selector' }  // Specify the target selector (e.g., #hero)
  },
  
  init: function() {
    this.toggleEvent = this.toggleEvent.bind(this);
    this.handleClickEvent = this.handleClickEvent.bind(this);

    // Ensure the target element exists before trying to interact with it
    const targetEl = this.data.target;
    if (targetEl) {
      // Initially disable the click event
      this.eventEnabled = false;
      targetEl.removeEventListener('click', this.handleClickEvent);
      console.log('Click event initially disabled for', targetEl);
    } else {
      console.warn('Target entity not found');
    }

    // Attach the toggle functionality to the current entity
    this.el.addEventListener('click', this.toggleEvent);
  },

  toggleEvent: function() {
    const targetEl = this.data.target;

    if (targetEl) {
      if (this.eventEnabled) {
        // Disable the click event
        targetEl.removeEventListener('click', this.handleClickEvent);
        console.log('Click event disabled for', targetEl);
      } else {
        // Enable the click event
        targetEl.addEventListener('click', this.handleClickEvent);
        console.log('Click event enabled for', targetEl);
      }

      // Toggle the eventEnabled state
      this.eventEnabled = !this.eventEnabled;
    } else {
      console.warn('Target entity not found');
    }
  },

  handleClickEvent: function(event: any) {
    // This function is where you define what happens when the hero entity is clicked
    console.log('Hero entity clicked');
  },

  remove: function() {
    this.el.removeEventListener('click', this.toggleEvent);

    const targetEl = this.data.target;
    if (targetEl) {
      targetEl.removeEventListener('click', this.handleClickEvent);
    }
  }
});



AFRAME.registerComponent('make-visible1', {
  schema: {
    target: {type: 'selector'}
  },
  
  init: function() {
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.el.addEventListener('click', this.toggleVisibility);
  },

  toggleVisibility: function() {
    const targetEl = this.data.target;
    if (targetEl) {
      const currentVisibility = targetEl.getAttribute('visible');
      const newVisibility = !currentVisibility;
      
      targetEl.setAttribute('visible', newVisibility);

      // Also toggle pointer-events based on visibility
      targetEl.setAttribute('style', newVisibility ? 'pointer-events: auto;' : 'pointer-events: none;');

    } else {
      console.warn('Target entity not found');
    }
  },

  remove: function() {
    this.el.removeEventListener('click', this.toggleVisibility);
  }
});


AFRAME.registerComponent('make-visibles', {
  schema: {
    target: { type: 'selector' },
  },

  init: function() {
    console.log('Component initialized'); // Debugging line
    this.isCreated = false; // To track whether the entity is created
    this.handleAction = this.handleAction.bind(this);
    this.el.addEventListener('click', this.handleAction);
  },

  handleAction: function() {
    const targetEl = this.data.target;
    console.log('Click event triggered'); // Debugging line
    if (targetEl) {
      console.log('Handling target:', targetEl); // Debugging line
      if (this.isCreated) {
        // Remove the entity
        targetEl.parentNode.removeChild(targetEl);
        this.isCreated = false;
      } else {
        console.log('else')
        // Ensure the target element is correctly set up
        if (!targetEl.parentNode) {
          this.el.sceneEl.appendChild(targetEl); // Append to the scene or a specific parent
          console.log('Adding target:', targetEl); // Debugging line
        }
        this.isCreated = true;
      }
    } else {
      console.warn('Target element not found');
    }
  },

  remove: function() {
    this.el.removeEventListener('click', this.handleAction);
  }
});



AFRAME.registerComponent('move-and-rotate', {
  schema: {
    defaultPosition: {type: 'vec3', default: {x: -4, y: -1.5, z: -4}},
    defaultRotation: {type: 'vec3', default: {x: 0, y: 0, z: 0}},
    targetPosition: {type: 'vec3', default: {x: -4.75, y: 1.75, z: -4}},
    targetRotation: {type: 'vec3', default: {x: 0, y: 0, z: 180}}
  },
  
  init: function() {
    this.state = 'default';
    this.toggleMoveAndRotate = this.toggleMoveAndRotate.bind(this);
    this.el.addEventListener('click', this.toggleMoveAndRotate);
  },

  toggleMoveAndRotate: function() {
   
    if (this.state === 'default') {
      this.el.setAttribute('position', this.data.targetPosition);
      this.el.setAttribute('rotation', this.data.targetRotation);
      this.state = 'target';
    
    } else {
      this.el.setAttribute('position', this.data.defaultPosition);
      this.el.setAttribute('rotation', this.data.defaultRotation);
      this.state = 'default';
    
    }
   
  },

  remove: function() {
    this.el.removeEventListener('click', this.toggleMoveAndRotate);
  }
});


AFRAME.registerComponent('dynamic-sky', {
  schema: {
    speed: {type: 'number', default: 0.1}
  },

  tick: function () {
    var skyEl = this.el;
    var cameraEl = document.querySelector('[camera]');
    var cameraPos = cameraEl.object3D.position;
    
    // Calculate offset based on camera y-position
    var yOffset = cameraPos.y * this.data.speed;
    
    // Apply offset to sky texture
    skyEl.object3D.rotation.y = yOffset;
  }
});

/* Not used */
  AFRAME.registerComponent('clickable', {
    init: function () {
      this.el.classList.add('clickable');
    },
    remove: function () {
      this.el.classList.remove('clickable');
    }
  });


  AFRAME.registerComponent('hotspot', {
    schema: {
      target: {type: 'string'},
      label: {type: 'string'}
    },
    init: function() {
      this.el.addEventListener('click', () => {
        // Handle click event
        console.log(`Clicked hotspot to ${this.data.target}`);
        // You can add logic here to change rooms or show info
      });
    }
  });

 
/* 
  // rounded-rect-shader.js
AFRAME.registerShader('rounded', {
  schema: {
    color: { type: 'color', default: '#FFF' },
    radius: { type: 'number', default: 0.1 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision highp float;
    varying vec2 vUv;
    uniform vec3 color;
    uniform float radius;

    void main() {
      vec2 p = vUv * 2.0 - 1.0;
      float len = length(p);
      float r = smoothstep(radius, radius + 0.01, len);
      gl_FragColor = vec4(color, 1.0 - r);
    }
  `
});
 */