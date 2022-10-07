const calculadoraFolhaPagamento = {
    inss: function(valorPagamento) {
        if (valorPagamento === undefined) {
            return 'Por favor, insira o valor'; 
        } else if (valorPagamento <= 1212) {
            return `O valor de contribuição do INSS é ${valorPagamento * 0.075}`;
        } else if (valorPagamento <= 2427.35) {
            return `O valor de contribuição do INSS é ${valorPagamento * 0.09}`; 
        } else if (valorPagamento <= 3641.03) {
        return `O valor de contribuição do INSS é ${valorPagamento * 0.12}`;
        } else {
        return `O valor de contribuição do INSS é ${valorPagamento * 0.14}`;
        }
    },
    falta: function(valorPagamento) {
        if (valorPagamento === undefined) {
            return 'Por favor, insira o valor';
        } else {
            return `O valor da falta diária de um salário de ${valorPagamento} é ${valorPagamento / 30}`;  
        }
    },
    irrf: function(valorPagamento) {
        if (valorPagamento === undefined) {
            return 'Por favor, insira o valor';
        } else {
        if (valorPagamento <= 1903.98) {
            return 'Isento de pagamento. Salário abaixo do valor de tabela.';
        } else if (valorPagamento <= 2826.26) {
            return `O valor de contribuição do IRRF é de ${valorPagamento * 0.075}`;
        } else if (valorPagamento <= 3751.05) {
            return `O valor de contribuição do IRRF é de ${valorPagamento * 0.15}`;
        } else if (valorPagamento <= 4664.68) {
            return `O valor de contribuição do IRRF é de ${valorPagamento * 0.225}`;
        } else {
            return `O valor de contribuição do IRRF é de ${valorPagamento * 0.275}`;
            }
        }
    },
    fgts: function(valorPagamento) {
        if (valorPagamento === undefined) {
            return 'Por favor, insira o valor';
        } else {
            return `O valor de pagamento do FGTS é ${valorPagamento * 0.08}`;  
        }
    },
    horaExtra: function(valorPagamento, h50, h100) {
        if (valorPagamento === undefined || h50 === undefined || h100 === undefined) {
            return 'Por favor, insira as informações corretamente';
        } else if (h50 == true && h100 == false) {
            return `O valor da hora extra de 50% é de ${(valorPagamento/220) * 0.5}`;
        } else if (h50 == false && h100 == true) {
            return `O valor da hora extra de 100% é de ${(valorPagamento/220) * 1}`;  
        }
    }
}
