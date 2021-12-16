//information



var container;

var camera, scene, renderer;

var video, texture, planeGeometry,cube_mat, cube_geo ,cube_mesh, geometry, material, mesh, plane, sphere;




    
raycaster = new THREE.Raycaster();
mouse = new THREE.Vector3( 20, 20, 20 );


        init();
        animate();
        
        
    
    function init() {

        
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
        texture = new THREE.TextureLoader().load('Information_360.jpg');
        texture.wrapS = THREE.RepeatWrapping  // <-- remove mirror effect
        texture.repeat.x = -1 // <-- remove mirror effect 
        geometry = new THREE.SphereGeometry( 500, 500, 500 );
        material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, } );
        sphere = new THREE.Mesh( geometry, material);
        sphere.position.set(0, 0, 0)
        scene.add( sphere );

        

        //plane
        planetext = new THREE.TextureLoader().load('Welcome_Info.jpg');
        geometry = new THREE.PlaneGeometry( 180, 200 );
        material = new THREE.MeshBasicMaterial( {map:planetext});
        plane = new THREE.Mesh( geometry, material );
        plane.position.set(155, 20, -100)
        plane.lookAt(0, 20, -7)
        scene.add( plane );


        
        
        //button1
        buttontext1 = new THREE.TextureLoader().load('MainLobby.jpg');
        geometry = new THREE.PlaneGeometry( 49, 50 );
        material = new THREE.MeshBasicMaterial( {map:buttontext1});
        button1 = new THREE.Mesh( geometry, material );
        button1.position.set(-400, 0, -200)
        button1.lookAt(0, 0, 300)
        scene.add( button1 );

        // wireframe1
        var geo = new THREE.EdgesGeometry( button1.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button1.add( wireframe );
        
   
    
        control = new THREE.OrbitControls(camera, renderer.domElement);
        control.target = new THREE.Vector3(8.3, 0, -5);
        control.update();

    

    }


        control.autoRotate = true;
        control.autoRotateSpeed = 0.1;

        control.dampingFactor = -0.5; // friction
        control.rotateSpeed = -0.2; // mouse sensitivity   
    
        control.maxPolarAngle = Math.PI / 2.0;
        control.minPolarAngle = Math.PI / 2.0;

        control.minDistance = 1;
        control.maxDistance = 50;


        function rotationstop()
        {
            control.autoRotate = false;
        }
        
        function rotation()
        {
            control.autoRotate = true;
        }


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
                rotationstop()
              } else { 
                button1.material.color.set(0xffffff);
                rotation()
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
        closeMe1()
        
        
        }

        
    }
    
    
    function animate() {
        requestAnimationFrame( animate );
        render();
    }

    function render() {
        control.update();
        renderer.render( scene, camera );
    }
    
    window.addEventListener( 'mousemove', onMouseMove1, false );
    window.addEventListener( 'pointerdown', onMouseDown1, false );
    window.requestAnimationFrame(render);

    function closeMe1()
{
    location.replace("index copy 3.html")
}



