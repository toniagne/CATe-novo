angular.module('starter.services', [])
 
.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data

 var chats = [{}];

 

   
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    banners: function(cidade){
      var banners =  $http.get('http://www.ddd37.com.br/app/listagens/banners', {params: {cidade: cidade}});
      console.log(banners);
    },
    get: function(chatId) {
      console.log(chatId);
        var itens =chatId.split("*");
          
        var detalheContato = [
                                {
                                     
                                    "imagem": itens[0], 
                                    "titulo": itens[1]
                                },
                             ];                           

      return detalheContato[0];
    }
  };
});
