//IMPORTAÇAO DO PACOTE SEQUELIZE
const { SequelizeScopeError } = require('sequelize');
const sequelize = require('sequelize');

//IMPORTAÇAO DO ARQUIVO DE CONEXAO COM BANCO DE DADOS
const connection = require('../database/database');

/*
PARAMETROS METODO DEFINE
1-NOME DA TABELA - STRING
2-TIPO DE DADO DO CAMPO
3-REGRAS DO CAMPO DA TABELA (NULL, NOT NULL)
*/
const  modelCategoria = connection.define(
    'Cliente',
    {
        CPF:{

            type: Sequelize.INTEGER,

            primaryKey: true,

            autoIncrement:true

        },

        Nome:{

            type: Sequelize.STRING(50),

            allowNull: true

        },

        Endereco:{
            
            type: Sequelize.STRING(80),

            allowNull: true
        },

        RG:{
            
            type: Sequelize.STRING(16),

            allowNull: true
        },


        cod_cliente:{
            
            type: Sequelize.STRING(5),

            allowNull: true
        },

        
    }
);

module.export =  router;