class Chain {
    constructor(body1, body2) {
        // this.bodyA = body1;
        // this.bodyB = body2;
        var chain_options = {
            bodyA: body1,
            bodyB: body2,
            length: 0.5,
            stiffness: 1
        }
        this.chain = Matter.Constraint.create(chain_options);
        World.add(world, this.chain);
        this.bodyA = body1;
        this.bodyB = body2;
    }
    display() {
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
    }
}