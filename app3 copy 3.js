//exhibit



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
        texture = new THREE.TextureLoader().load('ExhibitArea_XX.jpg');
        texture.wrapS = THREE.RepeatWrapping  // <-- remove mirror effect
        texture.repeat.x = -1 // <-- remove mirror effect 
        geometry = new THREE.SphereGeometry( 500, 500, 500 );
        material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
        sphere = new THREE.Mesh( geometry, material);
        sphere.position.set(0, 0, 0)
        scene.add( sphere );



        //button1
        buttontext1 = new THREE.TextureLoader().load('BrandX1.jpg');
        geometry = new THREE.PlaneGeometry( 50, 14 );
        material = new THREE.MeshBasicMaterial( {map:buttontext1});
        button1 = new THREE.Mesh( geometry, material );
        button1.position.set(65, 39, -200)
        button1.lookAt(30, 25, 50)
        scene.add( button1 );

        
        // wireframe1
        var geo = new THREE.EdgesGeometry( button1.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button1.add( wireframe );


        //button2
        buttontext2 = new THREE.TextureLoader().load('BrandX1.jpg');
        geometry = new THREE.PlaneGeometry( 32, 9 );
        material = new THREE.MeshBasicMaterial( {map:buttontext2});
        button2 = new THREE.Mesh( geometry, material );
        button2.position.set(-218, 23, -150)
        button2.lookAt(-250, 14, 150)
        scene.add( button2 );

        
        // wireframe2
        var geo = new THREE.EdgesGeometry( button2.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button2.add( wireframe );

        //button3
        buttontext3 = new THREE.TextureLoader().load('BrandX1.jpg');
        geometry = new THREE.PlaneGeometry( 22, 6 );
        material = new THREE.MeshBasicMaterial( {map:buttontext3});
        button3 = new THREE.Mesh( geometry, material );
        button3.position.set(111, 15, 150)
        button3.lookAt(128, 15, 0)
        scene.add( button3 );


        
        // wireframe3
        var geo = new THREE.EdgesGeometry( button3.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button3.add( wireframe );

        //button4
        buttontext4 = new THREE.TextureLoader().load('BrandX1.jpg');
        geometry = new THREE.PlaneGeometry( 23, 7 );
        material = new THREE.MeshBasicMaterial( {map:buttontext4});
        button4 = new THREE.Mesh( geometry, material );
        button4.position.set(-87, 17.5, 148)
        button4.lookAt(-40, 15, -200)
        scene.add( button4 );

        
        // wireframe4
        var geo = new THREE.EdgesGeometry( button4.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button4.add( wireframe );

        //button5
        buttontext5 = new THREE.TextureLoader().load('MainLobby.jpg');
        geometry = new THREE.PlaneGeometry( 10, 11 );
        material = new THREE.MeshBasicMaterial( {map:buttontext5});
        button5 = new THREE.Mesh( geometry, material );
        button5.position.set(250, 0, 25)
        button5.lookAt(0, 0, 0)
        scene.add( button5 );

        
        // wireframe5
        var geo = new THREE.EdgesGeometry( button5.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button5.add( wireframe );
        

       


    
        control = new THREE.OrbitControls(camera, renderer.domElement)
        control.target = new THREE.Vector3(-0.5, 0, -1);
        control.update();

        }

        control.autoRotate = true;
        control.autoRotateSpeed = 0.1;


        control.dampingFactor = -0.5; // friction
        control.rotateSpeed = -0.2; // mouse sensitivity   
    
        control.maxPolarAngle = Math.PI / 1.6;
        control.minPolarAngle = Math.PI / 2.0;

        

        control.minDistance = 1;
        control.maxDistance = 300;


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

    function onMouseMove2( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [button2], false);
         if (intersects.length > 0) {
            intersects[0].object.material.color.set(0x0099ff);
            rotationstop()
          } else { 
            button2.material.color.set(0xffffff);
          }
    }

    function onMouseMove3( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [button3], false);
         if (intersects.length > 0) {
            intersects[0].object.material.color.set(0x0099ff);
            rotationstop()
          } else { 
            button3.material.color.set(0xffffff);
          }
    }

    function onMouseMove4( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [button4], false);
         if (intersects.length > 0) {
            intersects[0].object.material.color.set(0x0099ff);
            rotationstop()
          } else { 
            button4.material.color.set(0xffffff);
          }
    }

    function onMouseMove5( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [button5], false);
         if (intersects.length > 0) {
            intersects[0].object.material.color.set(0x0099ff);
            rotationstop()
          } else { 
            button5.material.color.set(0xffffff);
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


    function onMouseDown2( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
       
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [button2], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        closeMe2()
        }
    
    }


    function onMouseDown3( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
       
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [button3], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        closeMe3()
        }
    
    }

    function onMouseDown4( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
       
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [button4], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        closeMe4()
        }
    
    }

    function onMouseDown5( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
       
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [button5], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        closeMe5()
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
    window.addEventListener( 'mousemove', onMouseMove2, false );
    window.addEventListener( 'mousemove', onMouseMove3, false );
    window.addEventListener( 'mousemove', onMouseMove4, false );
    window.addEventListener( 'mousemove', onMouseMove5, false );
    window.addEventListener( 'pointerdown', onMouseDown1, false );
    window.addEventListener( 'pointerdown', onMouseDown2, false );
    window.addEventListener( 'pointerdown', onMouseDown3, false );
    window.addEventListener( 'pointerdown', onMouseDown4, false );
    window.addEventListener( 'pointerdown', onMouseDown5, false );
    window.requestAnimationFrame(render);

    function closeMe1()
{
    location.replace("index4.html")
}

function closeMe2()
{
    location.replace("index5.html")
}

function closeMe3()
{
    location.replace("index6.html")
}

function closeMe4()
{
    location.replace("index7.html")
}

function closeMe5()
{
    location.replace("index copy.html")
}