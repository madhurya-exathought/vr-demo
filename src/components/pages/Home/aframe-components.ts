import 'aframe';



AFRAME.registerComponent('make-visible', {
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
});


AFRAME.registerComponent('move-and-rotate', {
  schema: {
    defaultPosition: {type: 'vec3', default: {x: -4, y: -1, z: -4}},
    defaultRotation: {type: 'vec3', default: {x: 0, y: 0, z: -90}},
    targetPosition: {type: 'vec3', default: {x: -4, y: .75, z: -4}},
    targetRotation: {type: 'vec3', default: {x: 0, y: 0, z: 90}}
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