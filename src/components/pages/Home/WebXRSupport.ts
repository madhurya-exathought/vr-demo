export function checkWebXRSupport() {
    if ('xr' in navigator) {
        const xr = (navigator as any).xr;
        xr.isSessionSupported('immersive-vr').then((supported: boolean) => {
        if (supported) {
          console.log('WebXR VR supported');
          // Enable VR features or buttons in your app
        } else {
          console.log('WebXR VR not supported');
          // Disable VR features or show a message to the user
        }
      });
    } else {
      console.log('WebXR not supported in this browser');
      // WebXR is not supported at all
    }
  }