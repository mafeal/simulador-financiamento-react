export default function calculaParcelas(nParcelas, taxa, periodo, vAtual) {
    let taxaMensal = ''
    let vFuturo = ''
    let coefFinanceiro = ''
    let parcela = ''
    const taxaConvertida = taxa.replace(/[,]+/g, ".")

    if (periodo === '% ao ano') {
        taxaMensal = (Math.pow((1 + (taxaConvertida / 100)), (1/12))) - 1
    } else {
        taxaMensal = taxaConvertida / 100;
    }
    
    vFuturo = ((1 * vAtual) * Math.pow((1 + taxaMensal),nParcelas)).toFixed(2).replace(/\.+/g, ",")

    coefFinanceiro = taxaMensal / (1 - Math.pow((1+taxaMensal), -nParcelas))

    parcela = (coefFinanceiro * vAtual).toFixed(2).replace(/\.+/g, ",")

    console.log(`A parcela é R$ ${parcela} e o Valor futuro é R$ ${vFuturo}`);

    return [parcela, vFuturo]
};
