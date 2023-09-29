AFRAME.registerComponent('markerHandler', {
    init: async function() {
        this.el.addEventListener("markerFound",()=>{
            console.log("marker is found")
        })
        this.el.addEventListener("markerLost",()=>{
            console.log("marker is lost")
        })
    }
});
