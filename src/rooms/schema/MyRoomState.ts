import { Schema, Context, type, MapSchema } from "@colyseus/schema";

export class Player extends Schema {
    // @ts-ignore
    @type("number") x;
    // @ts-ignore
    @type("number") y;
    // @ts-ignore
    @type("number") z;
    constructor(x = 0, y = 0, z = 0) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

export class MyRoomState extends Schema {
    // @ts-ignore
    @type({ map: Player })
    players = new MapSchema<Player>();
}
