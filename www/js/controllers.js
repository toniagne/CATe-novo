angular.module('starter.controllers', ['ionic'])
 
.controller('DashCtrl', ['$http', '$scope', '$rootScope', '$state', function($http, $scope, $rootScope, $state) { 	     
        $rootScope.GotoLink = function (url) {
          window.open(url,'_blank', "location=1,status=1,scrollbars=1");
        }
}])

.controller('MenuCtrl', function($scope, $ionicSideMenuDelegate, $ionicModal) {
    
 })

.controller('ChatsCtrl', function($scope, $http, $rootScope, $sce, $window) {
 

$scope.trustUrl = function(url) { 
  return $sce.trustAsResourceUrl(url);
}

$scope.linkModelFunc = function (url){    
  var linkok = $sce.trustAsResourceUrl(url);
  //$window.open(linkok,'_system', "location=1,status=1,scrollbars=1");
}

  $scope.login            = $sce.trustAsResourceUrl("https://granulito.mte.gov.br/imoweb/");
  $scope.cadastro         = $sce.trustAsResourceUrl("http://www.renies.com.br/neolig/cadastro.html");

  $scope.disvagas         = $sce.trustAsResourceUrl("https://maisemprego.mte.gov.br/imoweb/index.xhtml");
  $scope.discadastro      = $sce.trustAsResourceUrl("https://maisemprego.mte.gov.br/imoweb/paginas/e-trabalhador/precadastro.xhtml");
  $scope.empresacurriculum= $sce.trustAsResourceUrl("https://maisemprego.mte.gov.br/portal/pages/home.xhtml");
  $scope.caged            = $sce.trustAsResourceUrl("https://granulito.mte.gov.br/portalcaged/paginas/home/home.xhtml");
  $scope.demanda          = $sce.trustAsResourceUrl("http://www.mtecbo.gov.br/cbosite/pages/home.jsf");

  

 $rootScope.GotoLink = function (url) {  

          //$window.open(url,'_blank', "location=1,status=1,scrollbars=1");
        }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicLoading, $ionicPopup, $http) {
  //$scope.chat = Chats.get($stateParams.chatId);
   
   


 $ionicLoading.show({
    content: 'Carregando Unidades',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $scope.iconetopo =  $stateParams.tipoVaga;
  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/unidades')
               .success(function(data) {
                      $ionicLoading.hide(); 
                }) 
               .error(function(data) {
                $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
               })
               .then(        
                function(res){ 
                  $scope.unidades  = res.data;              
                });   
    
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
})



.controller('UnidadesMoveisProgramacao', function($scope, $http, $ionicPopup, $ionicLoading) {
 $ionicLoading.show({
    content: 'Carregando Unidades',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/quinzenal')
               .success(function(data) {
                      $ionicLoading.hide(); 
                }) 
               .error(function(data) {
                $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
               })
               .then(        
                function(res){ 
                  $scope.quinzenal  = res.data;              
                }); 
 
     $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };  
})

.controller('UnidadesMoveisEventos', function($scope, $http, $ionicPopup, $ionicLoading) {
 $ionicLoading.show({
    content: 'Carregando Unidades',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/eventos')
               .success(function(data) {
                      $ionicLoading.hide(); 
                }) 
               .error(function(data) {
                $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
               })
               .then(        
                function(res){ 
                  $scope.eventos  = res.data;              
                }); 
 
     $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };  
})

.controller('lerUnidadesMoveis', function($scope, $http, $ionicPopup, $ionicLoading) {
 $ionicLoading.show({
    content: 'Carregando Unidades',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/unidadesmoveis')
               .success(function(data) {
                      $ionicLoading.hide(); 
                }) 
               .error(function(data) {
                $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
               })
               .then(        
                function(res){ 
                  $scope.unidadesmoveis  = res.data;              
                }); 
 
     $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };	
})

.controller('AccountCtrl', function($scope, $http) {
   
})

.controller('UnidadesMoveis', function($scope, $http) {
   
})

.controller('TrabalhadorVagas', function($scope, $sce, $rootScope, $http, $ionicLoading, $stateParams, $ionicPopup, $ionicModal) {
  
   $ionicModal.fromTemplateUrl('templates/logintrabalhador.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });


    $scope.showPopup = function(url) { 
      $scope.endereco = $sce.trustAsResourceUrl(url);
      $scope.modal.show();
    }
    
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

   $rootScope.GotoLink = function (url) {
          window.open(url,'_blank', "location=1,status=1,scrollbars=1");
        }

     $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };  
    $ionicLoading.show({
    content: 'Carregando Vagas',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
  });
  $scope.iconetopo =  $stateParams.tipoVaga;
  $http.get('http://www.renies.com.br/ddd37/gerenciador/cate/vagas', {params: {tipo: $stateParams.tipoVaga}})
               .success(function(data) {
                      $ionicLoading.hide(); 
                }) 
               .error(function(data) {
                $ionicLoading.hide();
                  return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Seu dispositivo não esta conectado na internet.'
                     });
               })
               .then(        
                function(res){ 
                  $scope.vagas  = res.data;              
                });   
   
});
