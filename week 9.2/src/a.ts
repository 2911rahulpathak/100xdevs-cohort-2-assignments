//named constraints
// one of the way ->type KeyInput = "up"|"down"|"left"|"right";
//enum is iteration over some constant values (human readable)
enum Direction {
    Up,
    Down,
    Left,
    Right
}


//writing KeyInput besides keypressed
function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up);
doSomething(Direction.Down);

