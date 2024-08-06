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
/* AFRAME.registerComponent('make-visible', {
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
) */


  AFRAME.registerComponent('clickable', {
    init: function () {
      this.el.classList.add('clickable');
    },
    remove: function () {
      this.el.classList.remove('clickable');
    }
  });


AFRAME.registerComponent("click-log", {
  init: function() {
    this.myFunction = function() {
      console.log("clicked scene 2");
    };

    this.el.addEventListener("click", this.myFunction);
  },

  remove: function() {
    this.el.removeEventListener("click", this.myFunction);
  }
});




