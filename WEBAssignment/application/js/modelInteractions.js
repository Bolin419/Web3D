//adapted from example code 'benskitchen.com'

function fantaScene(){
    nSwitch = 0;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
    cameraFront_Fanta();
}

function cokeScene(){
    nSwitch = 1;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
    cameraFront_Coca();
}

function costaScene(){
    nSwitch = 2;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
    cameraFront_Costa();
}

var spinning = false;

function spin()
{ 
	spinning = !spinning;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
	spinning = false;
	document.getElementById('model__RotationTimer').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('model__RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'false');
}

function wireFrame()
{
	var e = document.getElementById('wire');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headLight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function omniLight()
{
	lightOn = !lightOn;
	document.getElementById('model__omniLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function targetLight()
{
	lightOn = !lightOn;
	document.getElementById('model__targetLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function cameraFront_Fanta()
{
	document.getElementById('model__CameraFront_Fanta').setAttribute('bind', 'true');
}

function cameraBack_Fanta()
{
	document.getElementById('model__CameraBack_Fanta').setAttribute('bind', 'true');
}

function cameraLeft_Fanta()
{
	document.getElementById('model__CameraLeft_Fanta').setAttribute('bind', 'true');
}

function cameraRight_Fanta()
{
	document.getElementById('model__CameraRight_Fanta').setAttribute('bind', 'true');
}

function cameraTop_Fanta()
{
	document.getElementById('model__CameraTop_Fanta').setAttribute('bind', 'true');
}

function cameraBottom_Fanta()
{
	document.getElementById('model__CameraBottom_Fanta').setAttribute('bind', 'true');
}


function cameraFront_Coca()
{
	document.getElementById('model__CameraFront_Coca').setAttribute('bind', 'true');
}

function cameraBack_Coca()
{
	document.getElementById('model__CameraBack_Coca').setAttribute('bind', 'true');
}

function cameraLeft_Coca()
{
	document.getElementById('model__CameraLeft_Coca').setAttribute('bind', 'true');
}

function cameraRight_Coca()
{
	document.getElementById('model__CameraRight_Coca').setAttribute('bind', 'true');
}

function cameraTop_Coca()
{
	document.getElementById('model__CameraTop_Coca').setAttribute('bind', 'true');
}

function cameraBottom_Coca()
{
	document.getElementById('model__CameraBottom_Coca').setAttribute('bind', 'true');
}


function cameraFront_Costa()
{
	document.getElementById('model__CameraFront_Costa').setAttribute('bind', 'true');
}

function cameraBack_Costa()
{
	document.getElementById('model__CameraBack_Costa').setAttribute('bind', 'true');
}

function cameraLeft_Costa()
{
	document.getElementById('model__CameraLeft_Costa').setAttribute('bind', 'true');
}

function cameraRight_Costa()
{
	document.getElementById('model__CameraRight_Costa').setAttribute('bind', 'true');
}

function cameraTop_Costa()
{
	document.getElementById('model__CameraTop_Costa').setAttribute('bind', 'true');
}

function cameraBottom_Costa()
{
	document.getElementById('model__CameraBottom_Costa').setAttribute('bind', 'true');
}