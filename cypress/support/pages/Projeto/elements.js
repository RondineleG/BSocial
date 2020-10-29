export let elements = 
{
    // Dados básicos
   
    menuProjeto: 'nav > .nav > :nth-child(2) > .menu-link',

    cadastrarProjeto: '.open > .dropdown-menu > .dropdown-menu-caixa-submenu > .informacoes-wrapper > :nth-child(1) > .btn',

    nomeDoProjeto: '#nome',

    dataInicial: '#data_inicial',

    dataFinal: '#data_final',

    selecaoPrograma: '.col-md-7 > .form-group > :nth-child(2) > .btn-group > .btn',

    programaSelecionado: '.col-md-7 > .form-group > :nth-child(2) > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text',

    descricaoDoProjeto: '.count-element > .form-control',

    publicoBeneficiado: '.radio-inline-cadastro > .form-group > :nth-child(2) > :nth-child(1)',

    areaDeAtuacao: ':nth-child(1) > .form-group > :nth-child(1) > :nth-child(1) > label > .icheckbox_square-custom > .iCheck-helper',
   
    nomeReponsavel: '//*[@id="responsavel[nome]"]',

    emailReponsavel: '//*[@id="responsavel[email]"]',

    skypeResponsavel: '//*[@id="responsavel[skype]"]',

    telefoneReponsavel: '.input-telefone > .m-b-n-xs > .form-group > div > .form-control',

    operadoraTelefone: '.m-b-n-xs > .form-group > div > .btn-group > .btn > .filter-option',
    
    selecionarOperadora:'.m-b-n-xs > .form-group > div > .btn-group > .dropdown-menu > .dropdown-menu > li:nth-child(4) > a > .text',
 
    salvarDados:'.col-xs-12 > .btn',

    cadastrarResumo:'.li-navegacao-lateral:nth-child(2) > a',
  
    

    // Resumo do projeto

    urlProjeto: 'https://app.bussolasocial.com.br/projeto-novo/6081/cadastro/resumo',
    resumoProjeto: '.form-control:nth-child(1)',
    salvarResumo: '.col-xs-12 > .btn',
    modaVisivel: '.toast',
    modalMensagen: '.toast-message',
    modalTitulo: '.toast-title',
    cadastrarObjetivo : '.li-navegacao-lateral:nth-child(3) > a',

    //Cadastrar obejetivos
    objetivoGeral: '#objetivo_geral',
    primeiroObjetivo:"(//textarea[@name='objetivo[descricao][]'])[2]",
    maisObejetivo: '.sortable-grupo-lista-item .btn:nth-child(1) > .fas',
    segundoObejetivo: '.count-element > .count-element > .count-element > .width-100',
    objetivoVazio:'.sortable-grupo-lista-item:nth-child(4) .width-100',
    salvarObjetivo: "//button[@type='submit']",
    cadastrarPlano: '.li-navegacao-lateral:nth-child(4) > a',

}