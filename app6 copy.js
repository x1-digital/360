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
        texture = new THREE.TextureLoader().load('Gallery_wide.jpg');
        texture.wrapS = THREE.RepeatWrapping  // <-- remove mirror effect
        texture.repeat.x = -1 // <-- remove mirror effect 
        geometry = new THREE.SphereGeometry( 500, 500, 500 );
        material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide, } );
        sphere = new THREE.Mesh( geometry, material);
        sphere.position.set(0, 0, 0)
        scene.add( sphere );

        
        
        //button1
        buttontext1 = new THREE.TextureLoader().load('MainLobby.jpg');
        geometry = new THREE.PlaneGeometry( 35, 36 );
        material = new THREE.MeshBasicMaterial( {map:buttontext1});
        button1 = new THREE.Mesh( geometry, material );
        button1.position.set(-150, 8, 159)
        button1.lookAt(-140, 7, 0)
        scene.add( button1 );

        // wireframe1
        var geo = new THREE.EdgesGeometry( button1.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button1.add( wireframe );

        //button2
        buttontext2 = new THREE.TextureLoader().load('GS1.jpg');
        geometry = new THREE.PlaneGeometry( 15, 16 );
        material = new THREE.MeshBasicMaterial( {map:buttontext2});
        button2 = new THREE.Mesh( geometry, material );
        button2.position.set(-250, -45, -40)
        button2.lookAt(0, 0, 0)
        scene.add( button2 );

        // wireframe2
        var geo = new THREE.EdgesGeometry( button2.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button2.add( wireframe );

        //button3
        buttontext3 = new THREE.TextureLoader().load('GS3.jpg');
        geometry = new THREE.PlaneGeometry( 15, 16 );
        material = new THREE.MeshBasicMaterial( {map:buttontext3});
        button3 = new THREE.Mesh( geometry, material );
        button3.position.set(250, -37, 20)
        button3.lookAt(0, 0, 0)
        scene.add( button3 );

        // wireframe3
        var geo = new THREE.EdgesGeometry( button3.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button3.add( wireframe );

        //button4
        buttontext4 = new THREE.TextureLoader().load('GS2.jpg');
        geometry = new THREE.PlaneGeometry( 17, 18 );
        material = new THREE.MeshBasicMaterial( {map:buttontext4});
        button4 = new THREE.Mesh( geometry, material );
        button4.position.set(120, -40, -300)
        button4.lookAt(0, 0, 0)
        scene.add( button4 );

        // wireframe4
        var geo = new THREE.EdgesGeometry( button4.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        button4.add( wireframe );

        //popup1
        popuptext1 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 3, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext1});
        popup1 = new THREE.Mesh( geometry, material );
        popup1.position.set(5, -61, -150)
        popup1.lookAt(100, 0, 0)
        scene.add( popup1 );

        // wireframepopup1
        var geo = new THREE.EdgesGeometry( popup1.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup1.add( wireframe );

        //popup2
        popuptext2 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 3, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext2});
        popup2 = new THREE.Mesh( geometry, material );
        popup2.position.set(310, -44, -350)
        popup2.lookAt(0, 0, -300)
        scene.add( popup2 );

        // wireframepopup2
        var geo = new THREE.EdgesGeometry( popup2.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup2.add( wireframe );

        //popup3
        popuptext3 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 2, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext3});
        popup3 = new THREE.Mesh( geometry, material );
        popup3.position.set(350, -26.5, -285)
        popup3.lookAt(0, 0, -300)
        scene.add( popup3 );

        // wireframepopup3
        var geo = new THREE.EdgesGeometry( popup3.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup3.add( wireframe );

        //popup4
        popuptext4 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 2, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext4});
        popup4 = new THREE.Mesh( geometry, material );
        popup4.position.set(320, -24.5, -150)
        popup4.lookAt(0, 0, -250)
        scene.add( popup4 );

        // wireframepopup4
        var geo = new THREE.EdgesGeometry( popup4.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup4.add( wireframe );

        //popup5
        popuptext5 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 3, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext5});
        popup5 = new THREE.Mesh( geometry, material );
        popup5.position.set(350, -43.5, -95)
        popup5.lookAt(0, -100, 900)
        scene.add( popup5 );

        // wireframepopup5
        var geo = new THREE.EdgesGeometry( popup5.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup5.add( wireframe );

        //popup6
        popuptext6 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 3, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext6});
        popup6 = new THREE.Mesh( geometry, material );
        popup6.position.set(350, -35, 158)
        popup6.lookAt(0, 0, -2000)
        scene.add( popup6 );

        // wireframepopup6
        var geo = new THREE.EdgesGeometry( popup6.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup6.add( wireframe );

        //popup7
        popuptext7 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 5, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext7});
        popup7 = new THREE.Mesh( geometry, material );
        popup7.position.set(300, -71, 238)
        popup7.lookAt(0, 0, -2500)
        scene.add( popup7 );

        // wireframepopup7
        var geo = new THREE.EdgesGeometry( popup7.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup7.add( wireframe );

        //popup8
        popuptext8 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 8, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext8});
        popup8 = new THREE.Mesh( geometry, material );
        popup8.position.set(40, -115, 400)
        popup8.lookAt(0, 0, -2500)
        scene.add( popup8 );

        // wireframepopup8
        var geo = new THREE.EdgesGeometry( popup8.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup8.add( wireframe );

        //popup9
        popuptext9 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 4, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext9});
        popup9 = new THREE.Mesh( geometry, material );
        popup9.position.set(-410, -59, 150)
        popup9.lookAt(0, 0, -2500)
        scene.add( popup9 );

        // wireframepopup9
        var geo = new THREE.EdgesGeometry( popup9.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup9.add( wireframe );

        //popup10
        popuptext10 = new THREE.TextureLoader().load('Red_Circle(small).png');
        geometry = new THREE.CircleGeometry( 2.5, 128 );
        material = new THREE.MeshBasicMaterial( {map:popuptext10});
        popup10 = new THREE.Mesh( geometry, material );
        popup10.position.set(-350, -36.5, -55)
        popup10.lookAt(0, 0, 0)
        scene.add( popup10 );

        // wireframepopup10
        var geo = new THREE.EdgesGeometry( popup10.geometry );
        var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );
        var wireframe = new THREE.LineSegments( geo, mat );
        wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
        popup10.add( wireframe );
        
    
        control = new THREE.OrbitControls(camera, renderer.domElement);
        control.target = new THREE.Vector3(1, 0, 0);
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

        function onMouseMovePopUp1( event ) {
            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
            mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
            // update the picking ray with the camera and mouse position
            raycaster.setFromCamera( mouse, camera );
            // calculate objects intersecting the picking ray
             intersects = raycaster.intersectObjects( [popup1], false);
             if (intersects.length > 0) {
                intersects[0].object.material.color.set(0x0099ff);
                rotationstop()
              } else { 
                popup1.material.color.set(0xffffff);
              }
        }

        function onMouseMovePopUp2( event ) {
            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
            mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
            // update the picking ray with the camera and mouse position
            raycaster.setFromCamera( mouse, camera );
            // calculate objects intersecting the picking ray
             intersects = raycaster.intersectObjects( [popup2], false);
             if (intersects.length > 0) {
                intersects[0].object.material.color.set(0x0099ff);
                rotationstop()
              } else { 
                popup2.material.color.set(0xffffff);
              }
        }

        function onMouseMovePopUp3( event ) {
            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
            mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
            // update the picking ray with the camera and mouse position
            raycaster.setFromCamera( mouse, camera );
            // calculate objects intersecting the picking ray
             intersects = raycaster.intersectObjects( [popup3], false);
             if (intersects.length > 0) {
                intersects[0].object.material.color.set(0x0099ff);
                rotationstop()
              } else { 
                popup3.material.color.set(0xffffff);
              }
        }

        function onMouseMovePopUp4( event ) {
            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
            mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
            // update the picking ray with the camera and mouse position
            raycaster.setFromCamera( mouse, camera );
            // calculate objects intersecting the picking ray
             intersects = raycaster.intersectObjects( [popup4], false);
             if (intersects.length > 0) {
                intersects[0].object.material.color.set(0x0099ff);
                rotationstop()
              } else { 
                popup4.material.color.set(0xffffff);
              }
        }

        function onMouseMovePopUp5( event ) {
            // calculate mouse position in normalized device coordinates
            // (-1 to +1) for both components
            mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
            mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
            // update the picking ray with the camera and mouse position
            raycaster.setFromCamera( mouse, camera );
            // calculate objects intersecting the picking ray
             intersects = raycaster.intersectObjects( [popup5], false);
             if (intersects.length > 0) {
                intersects[0].object.material.color.set(0x0099ff);
                rotationstop()
              } else { 
                popup5.material.color.set(0xffffff);
              }
        }

        function onMouseMovePopUp6( event ) {
          // calculate mouse position in normalized device coordinates
          // (-1 to +1) for both components
          mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
          mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
          // update the picking ray with the camera and mouse position
          raycaster.setFromCamera( mouse, camera );
          // calculate objects intersecting the picking ray
           intersects = raycaster.intersectObjects( [popup6], false);
           if (intersects.length > 0) {
              intersects[0].object.material.color.set(0x0099ff);
              rotationstop()
            } else { 
              popup6.material.color.set(0xffffff);
            }
      }

      function onMouseMovePopUp7( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [popup7], false);
         if (intersects.length > 0) {
            intersects[0].object.material.color.set(0x0099ff);
            rotationstop()
          } else { 
            popup7.material.color.set(0xffffff);
          }
    }

    function onMouseMovePopUp8( event ) {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
      mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
      // update the picking ray with the camera and mouse position
      raycaster.setFromCamera( mouse, camera );
      // calculate objects intersecting the picking ray
       intersects = raycaster.intersectObjects( [popup8], false);
       if (intersects.length > 0) {
          intersects[0].object.material.color.set(0x0099ff);
          rotationstop()
        } else { 
          popup8.material.color.set(0xffffff);
        }
  }

  function onMouseMovePopUp9( event ) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera( mouse, camera );
    // calculate objects intersecting the picking ray
     intersects = raycaster.intersectObjects( [popup9], false);
     if (intersects.length > 0) {
        intersects[0].object.material.color.set(0x0099ff);
        rotationstop()
      } else { 
        popup9.material.color.set(0xffffff);
      }
}

function onMouseMovePopUp10( event ) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );
  // calculate objects intersecting the picking ray
   intersects = raycaster.intersectObjects( [popup10], false);
   if (intersects.length > 0) {
      intersects[0].object.material.color.set(0x0099ff);
      rotationstop()
    } else { 
      popup10.material.color.set(0xffffff);
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

    function onMouseDownPopUp1( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [popup1], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        PopUp1()
        }
    }

    function onMouseDownPopUp2( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [popup2], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        PopUp2()
        }
    }

    function onMouseDownPopUp3( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [popup3], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        PopUp3()
        }
    }

    function onMouseDownPopUp4( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [popup4], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        PopUp4()
        }
    }

    function onMouseDownPopUp5( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
        mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
        // calculate objects intersecting the picking ray
         intersects = raycaster.intersectObjects( [popup5], false);
        for ( let i = 0; i < intersects.length; i ++ ) {
        intersects[ i ].object.material.color.set(0xff0000);
        PopUp5()
        }
    }

    function onMouseDownPopUp6( event ) {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
      mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
      // update the picking ray with the camera and mouse position
      raycaster.setFromCamera( mouse, camera );
      // calculate objects intersecting the picking ray
       intersects = raycaster.intersectObjects( [popup6], false);
      for ( let i = 0; i < intersects.length; i ++ ) {
      intersects[ i ].object.material.color.set(0xff0000);
      PopUp6()
      }
  }

  function onMouseDownPopUp7( event ) {
    // calculate mouse position in normalized device coordinates
    // (-1 to +1) for both components
    mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
    // update the picking ray with the camera and mouse position
    raycaster.setFromCamera( mouse, camera );
    // calculate objects intersecting the picking ray
     intersects = raycaster.intersectObjects( [popup7], false);
    for ( let i = 0; i < intersects.length; i ++ ) {
    intersects[ i ].object.material.color.set(0xff0000);
    PopUp7()
    }
}

function onMouseDownPopUp8( event ) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );
  // calculate objects intersecting the picking ray
   intersects = raycaster.intersectObjects( [popup8], false);
  for ( let i = 0; i < intersects.length; i ++ ) {
  intersects[ i ].object.material.color.set(0xff0000);
  PopUp8()
  }
}

function onMouseDownPopUp9( event ) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );
  // calculate objects intersecting the picking ray
   intersects = raycaster.intersectObjects( [popup9], false);
  for ( let i = 0; i < intersects.length; i ++ ) {
  intersects[ i ].object.material.color.set(0xff0000);
  PopUp9()
  }
}

function onMouseDownPopUp10( event ) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = ( ( event.clientX - renderer.domElement.offsetLeft ) / renderer.domElement.clientWidth ) * 2 - 1;
  mouse.y = - ( ( event.clientY - renderer.domElement.offsetTop ) / renderer.domElement.clientHeight ) * 2 + 1;
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );
  // calculate objects intersecting the picking ray
   intersects = raycaster.intersectObjects( [popup10], false);
  for ( let i = 0; i < intersects.length; i ++ ) {
  intersects[ i ].object.material.color.set(0xff0000);
  PopUp10()
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
    window.addEventListener( 'mousemove', onMouseMovePopUp1, false );
    window.addEventListener( 'mousemove', onMouseMovePopUp2, false );
    window.addEventListener( 'mousemove', onMouseMovePopUp3, false );
    window.addEventListener( 'mousemove', onMouseMovePopUp4, false );
    window.addEventListener( 'mousemove', onMouseMovePopUp5, false );
    window.addEventListener( 'mousemove', onMouseMovePopUp6, false );
    window.addEventListener( 'mousemove', onMouseMovePopUp7, false );
    window.addEventListener( 'mousemove', onMouseMovePopUp8, false );
    window.addEventListener( 'mousemove', onMouseMovePopUp9, false );
    window.addEventListener( 'mousemove', onMouseMovePopUp10, false );
    window.addEventListener( 'pointerdown', onMouseDown1, false );
    window.addEventListener( 'pointerdown', onMouseDown2, false );
    window.addEventListener( 'pointerdown', onMouseDown3, false );
    window.addEventListener( 'pointerdown', onMouseDown4, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp1, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp2, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp3, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp4, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp5, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp6, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp7, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp8, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp9, false );
    window.addEventListener( 'pointerdown', onMouseDownPopUp10, false );
    window.requestAnimationFrame(render);

    function closeMe1()
{
    location.replace("index.html")
}

    function closeMe2()
{
    location.replace("index12.html")
}

function closeMe3()
{
    location.replace("index13.html")
}

function closeMe4()
{
    location.replace("index14.html")
}


function PopUp1() {
    document.getElementById("imagebutton1").click();
  }

  function PopUp2() {
    document.getElementById("imagebutton2").click();
  }

  function PopUp3() {
    document.getElementById("imagebutton3").click();
  }

  function PopUp4() {
    document.getElementById("imagebutton4").click();
  }

  function PopUp5() {
    document.getElementById("imagebutton5").click();
  }

  function PopUp6() {
    document.getElementById("imagebutton6").click();
  }

  function PopUp7() {
    document.getElementById("imagebutton7").click();
  }

  function PopUp8() {
    document.getElementById("imagebutton8").click();
  }

  function PopUp9() {
    document.getElementById("imagebutton9").click();
  }

  function PopUp10() {
    document.getElementById("imagebutton10").click();
  }

 





