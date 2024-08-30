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



