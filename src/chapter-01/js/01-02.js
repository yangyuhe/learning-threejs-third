function init() {
  // create a scene, that will hold all our elements such as objects, cameras and lights.
  var scene = new THREE.Scene();

  // create a camera, which defines where we're looking at.
  var camera = new THREE.PerspectiveCamera(
    //field of view, FOV, 相机视角
    //相机视锥体的垂直视场角，简称VFOV
    50,
    //视椎体的宽高比，和下面的setSize对应
    window.innerWidth / window.innerHeight,
    //near，近点视角必须大于0
    1,
    //far
    1000
  );

  // create a render and set the size
  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0x000000));
  //这块会影响canvas的长宽
  renderer.setSize(window.innerWidth, window.innerHeight);

  // show axes in the screen
  var axes = new THREE.AxesHelper(30);
  scene.add(axes);

  // create the ground plane
  var planeGeometry = new THREE.PlaneGeometry(120, 40);
  var planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xaaaaaa,
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;

  //平面的定位是以其中心点为基准的
  plane.position.set(0, 0, 0);

  // add the plane to the scene
  scene.add(plane);

  // create a cube，立方体，参数分别是对应x,y,z轴的长度
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 40);

  //wireframe设置为true防止被渲染为实体
  var cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true,
  });
  //Mesh是三角形多边形网格对象
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  // position the cube
  cube.position.set(40, 0, 0);

  // add the cube to the scene
  scene.add(cube);

  // create a sphere，参数分别是半径，水平分割段数，垂直分割段数（段数越少越粗糙）
  var sphereGeometry = new THREE.SphereGeometry(10, 20, 2);
  var sphereMaterial = new THREE.MeshBasicMaterial({
    color: 0x7777ff,
    wireframe: true,
  });
  var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  // position the sphere
  sphere.position.set(0, 0, 0);

  // add the sphere to the scene
  scene.add(sphere);

  // position and point the camera to the center of the scene
  camera.position.set(-30, 40, 30);

  //场景的中心是0,0,0
  camera.lookAt(scene.position);

  // add the output of the renderer to the html element
  document.getElementById("webgl-output").appendChild(renderer.domElement);

  // render the scene
  renderer.render(scene, camera);
}
