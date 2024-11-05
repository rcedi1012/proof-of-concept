function worm() {
    wormDiameter = globeScale * 0.2;
    offsetX = globeScale * 0.1;;
    wormY = wormDiameter * 4.4;

    stroke(0);
    strokeWeight(globeScale * 0.006);
    fill(0,0,100);
    ellipse((width * 0.015) + offsetX, wormY * normVol, wormDiameter);
}