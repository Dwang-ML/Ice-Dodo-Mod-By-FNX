var map = {
    title: "Test Map V8",
    song: "env2",
    maker: "Ice dodo map maker",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([0.00007, 0.00007, 0.00007], [0, 0, 0], [10, 0.5, 160], "1", 0, 0, 0.6, false, false, false, false);
        a.e([0.00014, 0.00014, -39.99986]);
    },
    post: function() {
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {},
    reset: function() {
        this.section_id = 0;
        a.re('P0', [0.00007, 0.00007, 0.00007], [0, 0, 0], [10, 0.5, 160]);
        a.re('E0', [0.00014, 0.00014, -39.99986], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
