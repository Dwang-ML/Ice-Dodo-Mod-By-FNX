var map = {    title: "idk",    song: "env2",    maker: "buttaknife",    spawn: [0,0.5,0],    init: function() {a.p([9.54,-0.26,-259], [3.16,0,0], [2.96,1.72,11.18], "bababa", -10.0, 0, 0.6, false, false);a.p([14.390070000000001,2.81007,-48.079930000000004], [3.16,0,-1.13], [5.34,0.36,14.86], "bababa", -1.0, 0, 0.6, false, false);a.p([9.540140000000001,-1.96986,-285.56986], [3.16,0,0], [2.96,0.54,11.98], "bababa", 2.4, 0, 0.6, false, false);a.p([6.530209999999999,-1.5297900000000002,-89.58979], [0,0,0], [2.96,0.36,6], "bababa", 0, 0, 0.6, true, false);a.p([-1.5297200000000002,-0.25972,-15.73972], [0,0,-0.44], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([-3.20965,0.7003499999999999,-26.70965], [0,0,-0.79], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([-4.339580000000001,2.05042,-37.72958], [0,0,-1.13], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([9.54049,-0.25951,-82.15951], [3.16,0,0], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([13.09,0.7,-60.16], [3.16,0,-0.79], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([11.240070000000001,-0.25993,-71.10993], [3.16,0,-0.44], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([2.19014,0.78014,-144.28986], [0,0,-1.13], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([3.3202100000000003,-0.56979,-133.27979], [0,0,-0.79], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([5.00028,-1.5297200000000002,-122.29972], [0,0,-0.44], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([2.19035,2.01035,-160.67965], [0,0,-1.13], [11.74,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([6.53042,-1.52958,-114.59958], [0,0,0], [2.96,0.36,6], "bababa", 0, 0, 0.6, false, false);a.p([13.78049,0.78049,-151.33951], [3.12,0,-1.13], [6,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([11.24,-0.26,-194.2], [3.16,0,-0.44], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([13.09007,0.7000700000000001,-183.25993], [3.16,0,-0.79], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([14.390139999999999,2.81014,-171.16986], [3.16,0,-1.06], [8.26,0.36,14.86], "bababa", 0, 0, 0.6, false, false);a.p([9.54021,-0.25978999999999997,-205.24979], [3.16,0,0], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([0.00028000000000000003,-0.25972,-4.65972], [0,0,0], [2.96,0.36,11.18], "bababa", 0, 0, 0.6, false, false);a.p([9.54035,-15.949649999999998,-273.63965], [3.16,0,0], [2.96,1.98,16.44], "eeeee4", 1.2, 0, 0.6, false, false);a.p([11.560419999999999,-0.25958,-170.40957999999998], [3.16,0,0], [2.96,0.36,13.66], "eeeee4", 0, 0, 0.6, false, false);a.p([15.15049,6.10049,-170.40951], [3.16,0,0], [2.96,0.36,13.66], "eeeee4", 0, 0, 0.6, false, false);a.p([9.54,9.84,-295.54], [3.15,-1.21,-0.01], [2.96,0.54,60], "-1.0", 0, 0, 0.6, false, false);a.p([8.020069999999999,9.840069999999999,-295.15993], [3.15,-1.21,-0.01], [0.14,0.54,60], "-1.0", 0, 0, 0.6, false, false);a.p([10.990139999999998,9.84014,-295.15986], [3.15,-1.21,-0.01], [0.14,0.54,60], "-1.0", 0, 0, 0.6, false, false);a.e([9.55,-0.62,-290.2]);},post: function() {cc.set_monkey("speed", 0.2);cc.set_monkey("steer", 0.03);cc.refresh();},section_id: 0,section_update: function() {      let PZ = player.position.z;      switch(this.section_id) {case 0:if (PZ < -42.87993) {speed = default_speed * 0.4;a.g(-1.0,0.0,null);this.section_id += 1} break;case 1:if (PZ < -47.079930000000004) {speed = cc.get("speed", null);a.g(null, null, null);this.section_id += 1} break;case 2:if (PZ < -47.59972) {speed = default_speed * 1.4;a.g(-1.0,null,null);this.section_id += 1} break;case 3:if (PZ < -49.59972) {speed = cc.get("speed", null);a.g(null, null, null);this.section_id += 1} break;case 4:if (PZ < -50.69965) {a.g(-1.0,null,null);this.section_id += 1} break;case 5:if (PZ < -63.31965) {a.g(null, null, null);this.section_id += 1} break;case 6:if (PZ < -91.63965) {speed = default_speed * 1.1;this.section_id += 1} break;case 7:if (PZ < -115.81965000000001) {speed = cc.get("speed", null);this.section_id += 1} break;case 8:if (PZ < -146.39986) {speed = default_speed * 0.4;a.g(-1.0,0.0,null);this.section_id += 1} break;case 9:if (PZ < -151.99986) {speed = cc.get("speed", null);a.g(null, null, null);this.section_id += 1} break;case 10:if (PZ < -156.15958) {speed = default_speed * 0.4;a.g(1.0,0.0,null);this.section_id += 1} break;case 11:if (PZ < -161.75958000000003) {speed = cc.get("speed", null);a.g(null, null, null);this.section_id += 1} break;case 12:if (PZ < -163.61979) {speed = default_speed * 0.4;a.g(-1.0,0.0,null);this.section_id += 1} break;case 13:if (PZ < -169.21979000000002) {speed = cc.get("speed", null);a.g(null, null, null);this.section_id += 1} break;case 14:if (PZ < -210.04951) {speed = default_speed * 2.0;a.g(null,-0.2,null);this.section_id += 1} break;case 15:if (PZ < -254.48951) {speed = cc.get("speed", null);a.g(null, null, null);this.section_id += 1} break;case 16:if (PZ < -258.51979) {speed = default_speed * 0.1;a.g(null,2.0,null);this.section_id += 1} break;case 17:if (PZ < -259.75979) {speed = cc.get("speed", null);a.g(null, null, null);this.section_id += 1} break;case 18:if (PZ < -268.94972) {speed = default_speed * 0.5;this.section_id += 1} break;case 19:if (PZ < -278.72972) {speed = cc.get("speed", null);this.section_id += 1} break;case 20:if (PZ < -280.08958) {speed = default_speed * 1.8;this.section_id += 1} break;case 21:if (PZ < -289.86958) {speed = cc.get("speed", null);this.section_id += 1} break;case 22:if (PZ < -295.70951) {a.g(null,2.0,null);this.section_id += 1} break;case 23:if (PZ < -305.48951) {a.g(null, null, null);this.section_id += 1} break;}},reset: function() {      this.section_id = 0;a.re('P0', [9.54,-0.26,-259], [3.16,0,0], [2.96,1.72,11.18]);a.re('P1', [14.390070000000001,2.81007,-48.079930000000004], [3.16,0,-1.13], [5.34,0.36,14.86]);a.re('P2', [9.540140000000001,-1.96986,-285.56986], [3.16,0,0], [2.96,0.54,11.98]);a.re('P3', [6.530209999999999,-1.5297900000000002,-89.58979], [0,0,0], [2.96,0.36,6]);a.re('P4', [-1.5297200000000002,-0.25972,-15.73972], [0,0,-0.44], [2.96,0.36,11.18]);a.re('P5', [-3.20965,0.7003499999999999,-26.70965], [0,0,-0.79], [2.96,0.36,11.18]);a.re('P6', [-4.339580000000001,2.05042,-37.72958], [0,0,-1.13], [2.96,0.36,11.18]);a.re('P7', [9.54049,-0.25951,-82.15951], [3.16,0,0], [2.96,0.36,11.18]);a.re('P8', [13.09,0.7,-60.16], [3.16,0,-0.79], [2.96,0.36,11.18]);a.re('P9', [11.240070000000001,-0.25993,-71.10993], [3.16,0,-0.44], [2.96,0.36,11.18]);a.re('P10', [2.19014,0.78014,-144.28986], [0,0,-1.13], [2.96,0.36,11.18]);a.re('P11', [3.3202100000000003,-0.56979,-133.27979], [0,0,-0.79], [2.96,0.36,11.18]);a.re('P12', [5.00028,-1.5297200000000002,-122.29972], [0,0,-0.44], [2.96,0.36,11.18]);a.re('P13', [2.19035,2.01035,-160.67965], [0,0,-1.13], [11.74,0.36,11.18]);a.re('P14', [6.53042,-1.52958,-114.59958], [0,0,0], [2.96,0.36,6]);a.re('P15', [13.78049,0.78049,-151.33951], [3.12,0,-1.13], [6,0.36,11.18]);a.re('P16', [11.24,-0.26,-194.2], [3.16,0,-0.44], [2.96,0.36,11.18]);a.re('P17', [13.09007,0.7000700000000001,-183.25993], [3.16,0,-0.79], [2.96,0.36,11.18]);a.re('P18', [14.390139999999999,2.81014,-171.16986], [3.16,0,-1.06], [8.26,0.36,14.86]);a.re('P19', [9.54021,-0.25978999999999997,-205.24979], [3.16,0,0], [2.96,0.36,11.18]);a.re('P20', [0.00028000000000000003,-0.25972,-4.65972], [0,0,0], [2.96,0.36,11.18]);a.re('P21', [9.54035,-15.949649999999998,-273.63965], [3.16,0,0], [2.96,1.98,16.44]);a.re('P22', [11.560419999999999,-0.25958,-170.40957999999998], [3.16,0,0], [2.96,0.36,13.66]);a.re('P23', [15.15049,6.10049,-170.40951], [3.16,0,0], [2.96,0.36,13.66]);a.re('P24', [9.54,9.84,-295.54], [3.15,-1.21,-0.01], [2.96,0.54,60]);a.re('P25', [8.020069999999999,9.840069999999999,-295.15993], [3.15,-1.21,-0.01], [0.14,0.54,60]);a.re('P26', [10.990139999999998,9.84014,-295.15986], [3.15,-1.21,-0.01], [0.14,0.54,60]);a.re('E0', [9.55,-0.62,-290.2], [0,0,0], [1,1,1]);},    physics_update: function() {    },    render_update: function() {    }}