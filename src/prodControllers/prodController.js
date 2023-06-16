module.exports = {
    async raiz ( req , res ) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do servidor Raiz')
    },

    async produtos ( req , res ) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do servidor produto')
    },

    async vendas ( req , res ) {
        const result = await console.log('Servidor requisitado');
        return res.send('Resposta do servidor de vendas');
    }
}