
//
// disc --> tb-disciplina.js
// dia, hora, sala --> tb-aauxqts.js
// professor --> tb-professor.js
// isolada --> 0: não aceita matrícula de alunos isolados; 1: aceita matrícula de alunos isolados
//

var oferta_disciplina = [
//QTS 2021.1

 {ano: 2021, periodo: 1, disc: 'SC 200101', dia: 0, hora: 0, sala: 0, professor: [0], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'BAS 200600', dia: 0, hora: 1, sala: 0, professor: [100], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'BAS 100001', dia: 0, hora: 1, sala: 0, professor: [100], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'SC 210104', dia: 3, hora: 13, sala: 100, professor: [3], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'SC 210010', dia: 4, hora: 8, sala: 100, professor: [1, 7], isolada: 1},
 {ano: 2021, periodo: 1, disc: 'SC 210303', dia: 2, hora: 8, sala: 100, professor: [13], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'SC 210201', dia: 6, hora: 8, sala: 100, professor: [5], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'SC 210304', dia: 2, hora: 10, sala: 100, professor: [11], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'SC 210305', dia: 5, hora: 10, sala: 100, professor: [17], isolada: 1},
 {ano: 2021, periodo: 1, disc: 'SC 210011', dia: 5, hora: 13, sala: 100, professor: [3], isolada: 1},
 {ano: 2021, periodo: 1, disc: 'SC 210206', dia: 3, hora: 13, sala: 100, professor: [9], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'SC 210308', dia: 5, hora: 8, sala: 100, professor: [8], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'SC 210908', dia: 0, hora: 0, sala: 100, professor: [12], isolada: 0},
 {ano: 2021, periodo: 1, disc: 'SC 210999', dia: 0, hora: 0, sala: 100, professor: [13], isolada: 0}
];

var oferta_disciplina_old = [
//QTS 2020.3

 {ano: 2020, periodo: 3, disc: 'SC 200101', dia: 0, slot: 100, sala: 0, professor: [0], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'BAS 200600', dia: 0, slot: 0, sala: 0, professor: [100], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'BAS 100001', dia: 0, slot: 0, sala: 0, professor: [100], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'PG 100400', dia: 0, slot: 100, sala: 0, professor: [0], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'SC 100400', dia: 0, slot: 100, sala: 0, professor: [0], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'SC 213801', dia: 3, slot: 2, sala: 100, professor: [1, 7], isolada: 1},
 {ano: 2020, periodo: 3, disc: 'SC 504000', dia: 4, slot: 1, sala: 100, professor: [2], isolada: 1},
 {ano: 2020, periodo: 3, disc: 'SC 015308', dia: 5, slot: 1, sala: 100, professor: [13], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'SC 210301', dia: 3, slot: 1, sala: 100, professor: [10], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'SC 506500', dia: 0, slot: 100, sala: 100, professor: [6], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'SC 310301', dia: 0, slot: 100, sala: 100, professor: [8], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'SC 310900', dia: 0, slot: 100, sala: 100, professor: [5], isolada: 1},
 {ano: 2020, periodo: 3, disc: 'SC 505000', dia: 0, slot: 100, sala: 100, professor: [2], isolada: 1},
 {ano: 2020, periodo: 3, disc: 'SC 311202', dia: 0, slot: 100, sala: 100, professor: [3], isolada: 1},
 {ano: 2020, periodo: 3, disc: 'SC 310202', dia: 0, slot: 100, sala: 100, professor: [13], isolada: 0},
 {ano: 2020, periodo: 3, disc: 'SC 330100', dia: 0, slot: 100, sala: 100, professor: [17], isolada: 1},

//QTS 2020.2
 {ano: 2020, periodo: 2, disc: 'SC 200101', dia:0, slot: 100, sala: 0, professor: [0], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'BAS 200600', dia:0, slot: 0, sala: 0, professor: [100], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'BAS 100001', dia:0, slot: 0, sala: 0, professor: [100], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'PG 100400', dia:0, slot: 100, sala: 0, professor: [0], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'SC 100400', dia:0, slot: 100, sala: 0, professor: [0], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'MD 210000', dia:0, slot: 100, sala: 0, professor: [101], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'SC 018304', dia:3, slot: 1, sala: 100, professor: [17], isolada: 1},
 {ano: 2020, periodo: 2, disc: 'SC 218900', dia:3, slot: 2, sala: 100, professor: [9], isolada: 1},
 {ano: 2020, periodo: 2, disc: 'SC 216901', dia:4, slot: 1, sala: 100, professor: [5], isolada: 1},
 {ano: 2020, periodo: 2, disc: 'SC 501200', dia:4, slot: 1, sala: 100, professor: [12, 11], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'SC 501600', dia:5, slot: 1, sala: 100, professor: [8], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'SC 506000', dia:6, slot: 1, sala: 100, professor: [6], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'SC 211600', dia:0, slot: 100, sala: 100, professor: [11], isolada: 0},
 {ano: 2020, periodo: 2, disc: 'SC 310101', dia:0, slot: 100, sala: 100, professor: [14], isolada: 1},
 {ano: 2020, periodo: 2, disc: 'SC 501100', dia:0, slot: 100, sala: 100, professor: [13], isolada: 0},

//QTS 2020.1
 {ano: 2020, periodo: 1, disc: 'SC 200101', dia:0, slot: 100, sala: 0, professor: [0], isolada: 0},
 {ano: 2020, periodo: 1, disc: 'BAS 200600', dia:0, slot: 0, sala: 0, professor: [100], isolada: 0},
 {ano: 2020, periodo: 1, disc: 'BAS 100001', dia:0, slot: 0, sala: 0, professor: [100], isolada: 0},
 {ano: 2020, periodo: 1, disc: 'PG 100400', dia:0, slot: 100, sala: 0, professor: [0], isolada: 0},
 {ano: 2020, periodo: 1, disc: 'MD 210000', dia:0, slot: 100, sala: 0, professor: [101], isolada: 0},
 {ano: 2020, periodo: 1, disc: 'SC 020301', dia:2, slot: 1, sala: 1, professor: [11], isolada: 1},
 {ano: 2020, periodo: 1, disc: 'SC 213801', dia:3, slot: 1, sala: 1, professor: [1, 7], isolada: 1},
 {ano: 2020, periodo: 1, disc: 'SC 213602', dia:4, slot: 1, sala: 1, professor: [9], isolada: 1},
 {ano: 2020, periodo: 1, disc: 'SC 216502', dia:4, slot: 1, sala: 3, professor: [12], isolada: 1},
 {ano: 2020, periodo: 1, disc: 'SC 216302', dia:5, slot: 2, sala: 1, professor: [3], isolada: 1},
 {ano: 2020, periodo: 1, disc: 'SC 501100', dia:6, slot: 1, sala: 0, professor: [6], isolada: 0}
];

