const calculadoraFolhaPagamento = {
    inss: function(valorPagamento) {
        let resultado = Number(valorPagamento);
        if (Number.isNaN(resultado)) {
            throw new Error('Por favor, digite um valor');
        } else {
        } if (valorPagamento <= 1212) {
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
        let resultado = Number(valorPagamento);
        if (Number.isNaN(resultado)) {
            throw new Error('Por favor, digite um valor');
        } else {
            return `O valor da falta diária de um salário de ${valorPagamento} é ${valorPagamento / 30}`;  
        }
    },
    irrf: function(valorPagamento) {
        let resultado = Number(valorPagamento);
        if (Number.isNaN(resultado)) {
            throw new Error('Por favor, digite um valor');
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
        let resultado = Number(valorPagamento);
        if (Number.isNaN(resultado)) {
            throw new Error('Por favor, digite um valor');
        } else {
            return `O valor de pagamento do FGTS é ${valorPagamento * 0.08}`;  
        }
    },
    horaExtra: function(valorPagamento, h50, h100) {
        let resultado = Number(valorPagamento);
        if (Number.isNaN(resultado)) {
            throw new Error('Por favor, digite um valor');
        } else if (h50 == true && h100 == false) {
            return `O valor da hora extra de 50% é de ${(valorPagamento/220) * 0.5}`;
        } else if (h50 == false && h100 == true) {
            return `O valor da hora extra de 100% é de ${(valorPagamento/220) * 1}`;  
        }
    }
}
