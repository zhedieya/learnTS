class Point1 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }
}

// 接口继承类
interface Point3d extends Point1 {
  z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
console.log(point3d);

class Point2 {
  x: number;
  y: number;
  constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
  }
}

// const p = new Point2(1, 2);
// 将 `Point2` 当做类型来用
function printPoint(p: Point2) {
  console.log(p.x, p.y);
}
printPoint(new Point2(1, 2));

