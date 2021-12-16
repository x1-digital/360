//entertainment


var container;

var camera, scene, renderer;

var video, texture, planeGeometry,cube_mat, cube_geo ,cube_mesh, geometry, material, mesh, plane, sphere;




    
raycaster = new THREE.Raycaster();
mouse = new THREE.Vector3( 20, 20, 20 );

        init();
        animate();
        
        
    
    function init() {

        

        container = document.createElement( 'div' );
        document.body.appendChild( container );
        
        camera = new THREE.PerspectiveCamera(70, window.innerWidth/ window.innerHeight, 0.1, 1000 );
        camera.position.set(0, 0, 0);
        
        scene = new THREE.Scene();
    
        renderer = new THREE.WebGLRenderer({ antialias: true });
        document.body.appendChild( renderer.domElement);
        renderer.setSize( window.innerWidth, window.innerHeight );


        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
        
        }

        window.addEventListener( 'resize', onWindowResize );

        
        
        


        //sphere
        texture = new THREE.TextureLoader().load('Entertainment_X.jpg');
        
        texture.wrapS = THREE.RepeatWrapping  // <-- remove mirror effect
        texture.repeat.x = -1 // <-- remove mirror effect 
        geometry = new THREE.SphereGeometry( 500, 500, 500 );
        material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.BackSide} );
        sphere = new THREE.Mesh( geometry, material);
        sphere.position.set(0, 0, 0)
        scene.add( sphere );


        //plane

        planeVideo = document.getElementById( 'video' );
        textureVideo = new THREE.VideoTexture( planeVideo );
        planeGeometry = new THREE.PlaneBufferGeometry( 158, 85, 10);
        materialVideo = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureVideo});
        plane = new THREE.Mesh( planeGeometry, materialVideo );
        plane.lookAt(-1, 0, -0.7)
        plane.position.x = 150;
        plane.position.y = 49;
        plane.position.z = 131;
        scene.add( plane );



        // wireframe
        var geo = new THREE.EdgesGeometry( plane.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        plane.add( wireframe );

        
        //button1
        buttontext1 = new THREE.TextureLoader().load('MainLobby.jpg');
        geometry = new THREE.PlaneGeometry( 32, 33 );
        material = new THREE.MeshBasicMaterial( {map:buttontext1});
        button1 = new THREE.Mesh( geometry, material );
        button1.position.set(-300, 0, -280)
        button1.lookAt(-320, 0, 450)
        scene.add( button1 );

        

        
        // wireframe1
        var geo = new THREE.EdgesGeometry( button1.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button1.add( wireframe );

   
        
    
     control = new THREE.OrbitControls(camera, renderer.domElement)
     control.target = new THREE.Vector3(7.2, 0, 5);
     control.update();
     
     
    }


        control.dampingFactor = -0.5; // friction
        control.rotateSpeed = -0.2; // mouse sensitivity   

        control.maxPolarAngle = Math.PI / 1.7;
        control.minPolarAngle = Math.PI / 3;

        control.minDistance = 1;
        control.maxDistance = 300;

        



        function onMouseMove1( event ) {
            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
            mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
            // update the picking ray with the camera and mouse position
            raycaster.setFromCamera( mouse, camera );
            // calculate objects intersecting the picking ray
             intersects = raycaster.intersectObjects( [button1], false);
             if (intersects.length > 0) {
                intersects[0].object.material.color.set(0x0099ff);
              } else { 
                button1.material.color.set(0xffffff);
              }
        }
    
        
    function onMouseDown1( event ) {

        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
    
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
    
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [button1], false);
         
         
        for ( let i = 0; i < intersects.length; i ++ ) {
    
            intersects[ i ].object.material.color.set(0xff0000);
            
            closeMe1();
            
        }
    }

    function onMouseDown2( event ) {

        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
    
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
    
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [plane], false);
         
         
        for ( let i = 0; i < intersects.length; i ++ ) {
    
            intersects[ i ].object.material.color.set(0xffffff);
            
            videofull();
            
        }
    }


    
    
    function animate() {
        requestAnimationFrame( animate );
        render();
    }

    function render() {
        renderer.render( scene, camera );
    }
    
    window.addEventListener( 'mousemove', onMouseMove1, false );
    window.addEventListener( 'pointerdown', onMouseDown1, false );
    window.addEventListener( 'pointerdown', onMouseDown2, false );
    window.requestAnimationFrame(render);

    function closeMe1()
{
    location.replace("index copy 2.html")
}


function videofull()
{
    var elem = document.getElementById("video");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
     
}





  
