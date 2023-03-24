//IMPORTAÇÃO DO PACOTE SEQUELIZ
const Sequelize = require('sequelize');

//IMPORTAÇÃO DO ARQUIVO DE CONEXÃO COM O BANCO DE DADOS
const connection = require('../database/database');

/*
PARAMETROS DO MÉTODO DEFINE
1 - NOME DA TABELA - STRING
2 - OBJETO JSON: 
                NOME DO CAMPO DA TABELA
                TIPO DE DADO DO CAMPO DA TABELA
                REGRAS DO CAMPO DA TABELA (NULL, NOT NULL, DEFAULT...ETC)
*/
const modelCategoria = connection.define(
    'tbl_Cliente',
    
    {
        cod_cliente:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome_cliente:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        
        RG:{

            type: Sequelize.INTEGER,
            allowNull: true
          
        },

        Endereço:{

            type: Sequelize.INTEGER,
            allowNull: true
           
        },
    }

        
);

//modelCategoria.sync({force:true});

module.exports = modelCategoria;