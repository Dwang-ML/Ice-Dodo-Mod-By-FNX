var map = {
    title: "Mixed Leaps",
    song: "env2",
    maker: "uPilot",
    spawn: [0, 0.5, 0],
    init: function() {
        a.y([0.00021, -7.0597900000000005, -33.27979], [0, 0, 0], [11, 11, 11], "0.0", 0, 0, 0.6, false, 1);
        a.p([0.00028000000000000003, -2.62972, -10.709719999999999], [0, 0, 0], [4.48, 2.12, 36.18], "0.0", 0, 0, 0.6, false, false);
        a.p([-6.669650000000001, -2.6396499999999996, -43.13965], [0.62, 0, 0], [4.48, 2.12, 16], "0.0", 0, 0, 0.6, false, false);
        a.c([0.00042, -1.03958, -23.82958], 0.0);
        a.c([0.00049, -0.95951, -33.84951], 0.0);
        a.p([-9.41, -2.62, -55.19], [-0.22, 0, 0], [4.48, 2.12, 16], "0.0", 0, 0, 0.6, false, false);
        a.y([2.44007, -7.3899300000000006, -116.02993000000001], [0, 0, 0], [11, 11, 11], "0.0", 0, 0, 0.6, false, 1);
        a.p([2.4901400000000002, -2.95986, -103.88986000000001], [-0.02, 0, 0], [4.48, 2.12, 16], "0.0", 0, 0, 0.6, false, false);
        a.p([2.49021, -2.95979, -128.83979], [-0.02, 0, 0], [4.48, 2.12, 16], "0.0", 0, 0, 0.6, false, false);
        a.c([-1.05972, -1.3397200000000002, -115.98971999999999], 0.0);
        a.c([2.87035, -1.3396500000000002, -115.98965], 0.0);
        a.c([2.9604199999999996, -1.3395800000000002, -131.63958], 0.0);
        a.p([2.49049, -2.9595100000000003, -153.09950999999998], [-0.02, 0, 0], [4.48, 2.12, 16], "0.0", 0, 0, 0.6, false, false);
        a.p([3.06, 1.86, -203.5], [-0.02, 0.43, -0.01], [5.04, 2.36, 20.02], "0.0", 0, 0, 0.6, false, false);
        a.p([2.4900700000000002, -2.29993, -184.86992999999998], [-0.02, 0, 0], [5.04, 2.36, 20.02], "0.0", 0, 0, 0.6, false, false);
        a.p([3.06014, 1.8601400000000001, -222.34986], [-0.02, 0.43, -0.01], [5.04, 2.36, 20.02], "0.0", 0, 0, 0.6, false, false);
        a.p([3.06021, 1.86021, -241.30979], [-0.02, 0.43, -0.01], [5.04, 2.36, 20.02], "0.0", 0, 0, 0.6, false, false);
        a.c([2.87028, -1.3397200000000002, -147.62972], 0.0);
        a.c([1.16035, -1.3396500000000002, -155.54965], 0.0);
        a.c([-2.37958, -1.3395800000000002, -81.46958], 0.0);
        a.c([-3.7495100000000003, -1.3395099999999998, -85.36950999999999], 0.0);
        a.c([2.02, 5.38, -227.12], 0.0);
        a.c([4.51007, 5.6100699999999994, -246.52992999999998], 0.0);
        a.c([4.26014, 3.4201400000000004, -203.75986], 0.0);
        a.c([3.7602100000000003, -0.5997899999999999, -190.31978999999998], 0.0);
        a.c([-5.7297199999999995, -0.95972, -43.649719999999995], 0.0);
        a.c([-10.16965, -0.95965, -46.33965], 0.0);
        a.c([-10.16958, -0.95958, -56.83958], 0.0);
        a.c([1.51049, -1.3395099999999998, -127.56951], 0.0);
        a.p([2.49, -10.43, -168.52], [-0.02, 0, 0], [4.48, 2.12, 16], "0.0", 1.5, 0, 0.6, false, false);
        a.p([3.17007, -2.95993, -259.70993], [-0.02, 0, 0], [7.78, 2.12, 25.7], "0.0", 0, 0, 0.6, true, false);
        a.p([-3.82986, -2.95986, -80.17986], [-0.22, 0, 0], [4.48, 2.12, 16], "0.0", 0, 0, 0.6, true, false);
        a.p([3.17021, -2.95979, -297.79979], [-0.02, 0, 0], [7.78, 2.12, 25.7], "0.0", 0, 0, 0.6, false, false);
        a.e([3.59007, -1.3799299999999999, -345.09993000000003]);
    },
    post: function() {
        a.u('P13');
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -60.31993) {
                    a.g(null, -1.0, null);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -64.01993) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -136.37986) {
                    a.g(null, 0.0, null);
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -145.63986) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -164.85972) {
                    speed = default_speed * 1.001;
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -181.91972) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -194.40957999999998) {
                    speed = default_speed * 2.001;
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -211.46957999999998) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -212.97951) {
                    speed = default_speed * 2.001;
                    this.section_id += 1
                }
                break;
            case 9:
                if (PZ < -230.03951) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 10:
                if (PZ < -231.94) {
                    speed = default_speed * 2.001;
                    this.section_id += 1
                }
                break;
            case 11:
                if (PZ < -249) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 12:
                if (PZ < -294.41965) {
                    speed = default_speed * 1.0;
                    this.section_id += 1
                }
                break;
            case 13:
                a.mov('P13', 'z', -0.7);
                if (PZ < -399.19964999999996) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('Y0', [0.00021, -7.0597900000000005, -33.27979], [0, 0, 0], [11, 11, 11]);
        a.re('P0', [0.00028000000000000003, -2.62972, -10.709719999999999], [0, 0, 0], [4.48, 2.12, 36.18]);
        a.re('P1', [-6.669650000000001, -2.6396499999999996, -43.13965], [0.62, 0, 0], [4.48, 2.12, 16]);
        a.re('C0', [0.00042, -1.03958, -23.82958], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [0.00049, -0.95951, -33.84951], [0, 0, 0], [2, 2, 2]);
        a.re('P2', [-9.41, -2.62, -55.19], [-0.22, 0, 0], [4.48, 2.12, 16]);
        a.re('Y1', [2.44007, -7.3899300000000006, -116.02993000000001], [0, 0, 0], [11, 11, 11]);
        a.re('P3', [2.4901400000000002, -2.95986, -103.88986000000001], [-0.02, 0, 0], [4.48, 2.12, 16]);
        a.re('P4', [2.49021, -2.95979, -128.83979], [-0.02, 0, 0], [4.48, 2.12, 16]);
        a.re('C2', [-1.05972, -1.3397200000000002, -115.98971999999999], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [2.87035, -1.3396500000000002, -115.98965], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [2.9604199999999996, -1.3395800000000002, -131.63958], [0, 0, 0], [2, 2, 2]);
        a.re('P5', [2.49049, -2.9595100000000003, -153.09950999999998], [-0.02, 0, 0], [4.48, 2.12, 16]);
        a.re('P6', [3.06, 1.86, -203.5], [-0.02, 0.43, -0.01], [5.04, 2.36, 20.02]);
        a.re('P7', [2.4900700000000002, -2.29993, -184.86992999999998], [-0.02, 0, 0], [5.04, 2.36, 20.02]);
        a.re('P8', [3.06014, 1.8601400000000001, -222.34986], [-0.02, 0.43, -0.01], [5.04, 2.36, 20.02]);
        a.re('P9', [3.06021, 1.86021, -241.30979], [-0.02, 0.43, -0.01], [5.04, 2.36, 20.02]);
        a.re('C5', [2.87028, -1.3397200000000002, -147.62972], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [1.16035, -1.3396500000000002, -155.54965], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [-2.37958, -1.3395800000000002, -81.46958], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [-3.7495100000000003, -1.3395099999999998, -85.36950999999999], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [2.02, 5.38, -227.12], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [4.51007, 5.6100699999999994, -246.52992999999998], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [4.26014, 3.4201400000000004, -203.75986], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [3.7602100000000003, -0.5997899999999999, -190.31978999999998], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [-5.7297199999999995, -0.95972, -43.649719999999995], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [-10.16965, -0.95965, -46.33965], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [-10.16958, -0.95958, -56.83958], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [1.51049, -1.3395099999999998, -127.56951], [0, 0, 0], [2, 2, 2]);
        a.re('P10', [2.49, -10.43, -168.52], [-0.02, 0, 0], [4.48, 2.12, 16]);
        a.re('P11', [3.17007, -2.95993, -259.70993], [-0.02, 0, 0], [7.78, 2.12, 25.7]);
        a.re('P12', [-3.82986, -2.95986, -80.17986], [-0.22, 0, 0], [4.48, 2.12, 16]);
        a.re('P13', [3.17021, -2.95979, -297.79979], [-0.02, 0, 0], [7.78, 2.12, 25.7]);
        a.re('E0', [3.59007, -1.3799299999999999, -345.09993000000003], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
