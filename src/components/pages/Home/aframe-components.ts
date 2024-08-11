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

/* Not used */
  AFRAME.registerComponent('clickable', {
    init: function () {
      this.el.classList.add('clickable');
    },
    remove: function () {
      this.el.classList.remove('clickable');
    }
  });




