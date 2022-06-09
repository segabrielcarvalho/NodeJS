const chalk = require('chalk');
const fs = require('fs')

function trataErro(erro) {
    throw new Error(chalk.redBright(erro.code, 'Não existe arquivo'))
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro) {
      trataErro(erro);
    } finally {
      console.log(chalk.blue('operação concluída'));
    }
   }


pegaArquivo('./teste.md')
