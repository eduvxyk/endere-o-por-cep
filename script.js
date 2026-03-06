<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Buscador de Endereço por CEP</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h2>Buscador de Endereço por CEP</h2>
        <input type="text" id="cep" placeholder="Digite o CEP (ex: 12345-678)" maxlength="9">
        <button onclick="buscarEndereco()">Buscar</button>
        <div id="resultado"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>