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






