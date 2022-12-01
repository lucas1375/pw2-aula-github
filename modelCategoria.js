//IMPORTAÇÃO DO PACOTE SEQUELIZE
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
    'Cliente',
    {
        CPF:{

            type: Sequelize.STRING(15),

            primaryKey: true,

            autoIncrement:true

        },

        Endereço:{

            type: Sequelize.STRING(100),

            allowNull: false

        }

        ,Nome:{

            type: Sequelize.INTEGER,

            allowNull: false

        },

        RG:{

            type: Sequelize.STRING(15),

            allowNull: false

        },

        cod_cliente:{

            type: Sequelize.STRING(100),

            allowNull: false

        }

    }
);

modelCategoria.sync({force:true});

module.exports = modelCategoria;