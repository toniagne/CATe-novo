// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
   .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'MenuCtrl'
    })

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

.state('tab.dash-unidades', {
    url: '/dash/unidades/:iditem',
    views: {
      'tab-dash': {
        templateUrl: 'templates/unidades.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })

 .state('tab.autonomo', {
      url: '/autonomo',
      views: {
        'tab-autonomo': {
          templateUrl: 'templates/autonomo.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.autonomo-empreendedor', {
      url: '/autonomo/empreendedor',
      views: {
        'tab-autonomo': {
          templateUrl: 'templates/autonomo-empreendedor.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.autonomo-ade', {
      url: '/autonomo/ade',
      views: {
        'tab-autonomo': {
          templateUrl: 'templates/autonomo-ade.html',
          controller: 'ChatsCtrl'
        }
      }
    })


 .state('tab.trabalhador', {
      url: '/trabalhador',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  .state('tab.empresa', {
      url: '/empresa',
      views: {
        'tab-empresa': {
          templateUrl: 'templates/empresa.html',
          controller: 'ChatsCtrl'
        }
      }
    })
   //---------------------------------------------------------------VAGAS
 .state('tab.empresa-vagas', {
      url: '/empresa/vagas',
      views: {
        'tab-empresa': {
          templateUrl: 'templates/empresa-vagas.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.empresa-requerimento', {
      url: '/empresa/requerimento',
      views: {
        'tab-empresa': {
          templateUrl: 'templates/empresa-requerimento.html',
          controller: 'ChatsCtrl'
        }
      }
    })
   .state('tab.empresa-curriculum', {
      url: '/empresa/curriculum',
      views: {
        'tab-empresa': {
          templateUrl: 'templates/empresa-curriculum.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.empresa-caged', {
      url: '/empresa/caged',
      views: {
        'tab-empresa': {
          templateUrl: 'templates/empresa-caged.html',
          controller: 'ChatsCtrl'
        }
      }
    })
     .state('tab.empresa-demanda', {
      url: '/empresa/demanda',
      views: {
        'tab-empresa': {
          templateUrl: 'templates/empresa-demanda.html',
          controller: 'ChatsCtrl'
        }
      }
    })
      .state('tab.empresa-cbo', {
      url: '/empresa/cbo',
      views: {
        'tab-empresa': {
          templateUrl: 'templates/empresa-cbo.html',
          controller: 'ChatsCtrl'
        }
      }
    })
.state('tab.empresa-vagas-login', {
      url: '/empresa/vagaslogin',
      views: {
        'tab-empresa': {
          templateUrl: 'templates/empresa-vagas-login.html',
          controller: 'ChatsCtrl'
        }
      }
    })
.state('tab.empresa-vagas-cadastro', {
      url: '/empresa/vagascadastro',
      views: {
        'tab-empresa': {
          templateUrl: 'templates/empresa-vagas-cadastro.html',
          controller: 'ChatsCtrl'
        }
      }
    })



 //---------------------------------------------------------------VAGAS
 .state('tab.trabalhador-oportunidades', {
      url: '/trabalhador/oportunidades',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-oportunidades.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.trabalhador-vagas', {
      url: '/trabalhador/vagas/:tipoVaga',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-vagas.html',
          controller: 'TrabalhadorVagas'
        }
      }
    })
   .state('tab.trabalhador-login', {
      url: '/trabalhador/login',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-login-mte.html',
          controller: 'ChatsCtrl'
        }
      }
    })
     .state('tab.trabalhador-cadastro', {
      url: '/trabalhador/cadastro',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-cadastro-mte.html',
          controller: 'ChatsCtrl'
        }
      }
    })


//---------------------------------------------------------------qualificacao / PRONATEC
 .state('tab.trabalhador-qualificacao', {
      url: '/trabalhador/qualificacao',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-qualificacao.html',
          controller: 'ChatsCtrl'
        }
      }
    })
 .state('tab.trabalhador-pronatec', {
      url: '/trabalhador/pronatec',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-pronatec.html',
          controller: 'ChatsCtrl'
        }
      }
    })

 //---------------------------------------------------------------SEGURO
 .state('tab.trabalhador-seguro', {
      url: '/trabalhador/seguro',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-seguro.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  //---------------------------------------------------------------ORIENTAÇÃO
 .state('tab.trabalhador-orientacao', {
      url: '/trabalhador/orientacao',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-orientacao.html',
          controller: 'ChatsCtrl'
        }
      }
    })

   //---------------------------------------------------------------PACET
 .state('tab.trabalhador-pacet', {
      url: '/trabalhador/pacet',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-pacet.html',
          controller: 'ChatsCtrl'
        }
      }
    })

    //---------------------------------------------------------------CARTEIRA DE TRABALHO
 .state('tab.trabalhador-carteira', {
      url: '/trabalhador/carteira',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-carteira.html',
          controller: 'ChatsCtrl'
        }
      }
    })

     //---------------------------------------------------------------PREVIDENCIA
 .state('tab.trabalhador-previdencia', {
      url: '/trabalhador/previdencia',
      views: {
        'tab-trabalhador': {
          templateUrl: 'templates/trabalhadores-previdencia.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/unidades.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/fisicas',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
     .state('tab.unidades-moveis', {
      url: '/chats/moveis',
      views: {
        'tab-chats': {
          templateUrl: 'templates/unidades-moveis.html',
          controller: 'UnidadesMoveis'
        }
      }
    })
     .state('tab.unidades-moveis-servicos', {
      url: '/chats/moveis/servicos',
      views: {
        'tab-chats': {
          templateUrl: 'templates/unidades-moveis-servicos.html',
          controller: 'UnidadesMoveis'
        }
      }
    })
  .state('tab.unidades-moveis-localizar', {
      url: '/chats/moveis/localizar',
      views: {
        'tab-chats': {
          templateUrl: 'templates/unidades-moveis-localizar.html',
          controller: 'lerUnidadesMoveis'
        }
      }
    })
  .state('tab.unidades-moveis-programacao', {
      url: '/chats/moveis/programacao',
      views: {
        'tab-chats': {
          templateUrl: 'templates/unidades-moveis-programacao.html',
          controller: 'UnidadesMoveisProgramacao'
        }
      }
    })
  .state('tab.unidades-moveis-eventos', {
      url: '/chats/moveis/eventos',
      views: {
        'tab-chats': {
          templateUrl: 'templates/unidades-moveis-eventos.html',
          controller: 'UnidadesMoveisEventos'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
