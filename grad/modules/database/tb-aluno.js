
//
// graduacao --> tb-graduacao.js
// estado --> 'A': ativo; 'T': trancado
// orientP --> tb-professor.js
//

var aluno = [
//2021.1
 {matricula: 21101, nome: 'Leandro Feijó Breves', graduacao: 8, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21102, nome: 'Erick Rodrigues da Silva', graduacao: 16, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21103, nome: 'Fernando dos Santos Barbosa Filho', graduacao: 16, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21104, nome: 'Rosana Leandro de Oliveira', graduacao: 16, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21105, nome: 'Amanda Cardoso Aires Mendes', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21106, nome: 'André Muniz Demori', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21107, nome: 'Filipe Moreira da Silveira', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21108, nome: 'Filipe Rodrigues Cardoso da Silva', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21109, nome: 'Jean Michel Galindo da Silva', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21110, nome: 'Jeferson Luis Gonçalves', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21111, nome: 'Lorran Santos Rodrigues', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21112, nome: 'Natália Oliveira Barbosa de Paula', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21113, nome: 'Paula Drumond', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21115, nome: 'Treice de Oliveira Moreira', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},
 {matricula: 21116, nome: 'Wallace da Silva Coelho Valadão', graduacao: 0, estado: 'A', orientP: 100, prazo: '20230302'},

//2020.3
 {matricula: 20301, nome: 'Eduardo Martin Malvacio', graduacao: 17, estado: 'A', orientP: 100, prazo: '20220928'},

//2020.1
 {matricula: 20101, nome: 'Madalena Lopes e Silva', graduacao: 15, estado: 'A', orientP: 8, prazo: '20220211'},
 {matricula: 20102, nome: 'Leonardo Costa Ferreira', graduacao: 16, estado: 'A', orientP: 9, prazo: '20220211'},
 {matricula: 20103, nome: 'Alessandro Ramos Rebello', graduacao: 0, estado: 'A', orientP: 100, prazo: '20220211'},
 {matricula: 20104, nome: 'André Luiz da Costa Barcellos', graduacao: 0, estado: 'A', orientP: 6, prazo: '20220211'},
 {matricula: 20105, nome: 'Antonio José Horta Neto', graduacao: 0, estado: 'A', orientP: 2, prazo: '20220211'},
 {matricula: 20107, nome: 'Gilvan Praxedes de Almeida', graduacao: 0, estado: 'A', orientP: 6, prazo: '20220211'},
 {matricula: 20108, nome: 'Guilherme Bernieri', graduacao: 0, estado: 'A', orientP: 6, prazo: '20220211'},
 {matricula: 20109, nome: 'Igor Maffei Libonati Maia', graduacao: 0, estado: 'A', orientP: 13, prazo: '20220211'},
 {matricula: 20110, nome: 'Igor Moreira Vaz', graduacao: 0, estado: 'A', orientP: 100, prazo: '20220211'},
 {matricula: 20111, nome: 'Jonathas Vinícius Gonzaga Alves Araujo', graduacao: 0, estado: 'A', orientP: 17, prazo: '20220211'},
 {matricula: 20112, nome: 'Josinaldo Santos de Azevedo', graduacao: 0, estado: 'A', orientP: 100, prazo: '20220211'},
 {matricula: 20113, nome: 'Mathias Afonso Guedes de Menezes', graduacao: 0, estado: 'A', orientP: 9, prazo: '20220211'},
 {matricula: 20114, nome: 'Nicole Fernanda dos Santos', graduacao: 0, estado: 'A', orientP: 100, prazo: '20220211'},
 {matricula: 20116, nome: 'Vinicius de Souza Nunes', graduacao: 0, estado: 'A', orientP: 6, prazo: '20220211'},
 {matricula: 20117, nome: 'Yuri de Abreu Melo', graduacao: 0, estado: 'A', orientP: 12, prazo: '20220211'},

//2019.2
 {matricula: 19202, nome: 'Patrick Antunes dos Santos', graduacao: 0, estado: 'A', orientP: 100, prazo: '20220514'},
 {matricula: 19204, nome: 'Valdecir da Silva Pereira', graduacao: 0, estado: 'A', orientP: 13, prazo: '20221201'},
 {matricula: 19205, nome: 'Wagner da Silva Maciel Sodré', graduacao: 0, estado: 'A', orientP: 6, prazo: '20230701'},

//2019.1
 {matricula: 19101, nome: 'Vicente Esperança Padrenosso', graduacao: 8, estado: 'A', orientP: 16, prazo: '20211211'},
 {matricula: 19102, nome: 'Lucimar de Andrade Lial Moura', graduacao: 16, estado: 'A', orientP: 8, prazo: 'defesa em 28/06/2021'},
 {matricula: 19103, nome: 'Tiago Duarte Neves', graduacao: 16, estado: 'A', orientP: 15, prazo: '20211211'},
 {matricula: 19105, nome: 'Alexandra Miguel Raibolt da Silva', graduacao: 0, estado: 'A', orientP: 9, prazo: '20211211'},
 {matricula: 19107, nome: 'Christiana Couto', graduacao: 0, estado: 'A', orientP: 12, prazo: '20211211'},
 {matricula: 19108, nome: 'Cláudio da Silva de Vasconcelos', graduacao: 0, estado: 'A', orientP: 100, prazo: '20210828'},
 {matricula: 19109, nome: 'Daniel Capello Carvalho', graduacao: 0, estado: 'A', orientP: 5, prazo: '20210828'},
 {matricula: 19110, nome: 'Daniel Felisberto Traciná Filho', graduacao: 0, orientP: 3, estado: 'A', prazo: '20211211'},
 {matricula: 19111, nome: 'Eduardo Evans Romanus', graduacao: 0, estado: 'A', orientP: 13, prazo: '20211218'},
 {matricula: 19113, nome: 'Felipe de Lima e Lima', graduacao: 0, estado: 'A', orientP: 5, prazo: '20211211'},
 {matricula: 19117, nome: 'Mariana Magalhães de Mattos Coelho', graduacao: 0, estado: 'A', orientP: 3, prazo: '20210828'},
 {matricula: 19120, nome: 'Viviane Viana Sofiste de Abreu', graduacao: 0, estado: 'A', orientP: 6, prazo: '20211218'},

//2018.2
 {matricula: 18203, nome: 'Leander de Barros Souza', graduacao: 0, estado: 'A', orientP: 11, prazo: 'defesa em 14/05/2021'},

//2018.1
 {matricula: 18106, nome: 'Allan Matheus Marques dos Santos', graduacao: 0, estado: 'A', orientP: 6, prazo: '20211211'},

//2017.3
 {matricula: 17304, nome: 'Jonatan Gall Delgado de Souza', graduacao: 0, estado: 'A', orientP: 10, prazo: '20211211'},
];
