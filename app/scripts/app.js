'use strict';
//specify $scope and menucontroller for angular
angular.module('confusionApp', [])
    .controller('MenuController', ['$scope',function($scope) {
      //this is where we introduce our variable ng-directives
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails = false;

  
  $scope.dishes = [
    {
      name:'Uthapizza',
      image: 'images/uthapizza.png',
      category: 'mains',
      label:'Hot',
      price:'4.99',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: ''
    },
    
    {
      name:'Zucchipakoda',
      image: 'images/zucchipakoda.png',
      category: 'appetizer',
      label:'',
      price:'1.99',
      description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
      comment: ''
    },
    
    {
      name:'Vadonut',
      image: 'images/vadonut.png',
      category: 'appetizer',
      label:'New',
      price:'1.99',
      description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
      comment: ''
    },
    
    {
      name:'ElaiCheese Cake',
      image: 'images/elaicheesecake.png',
      category: 'dessert',
      label:'',
      price:'2.99',
      description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
      comment: ''
    }
  ]; 
  
  //this.dishes = dishes; this is removed because dishes object is attached to scope
  


  $scope.select = function(setTab) {
    $scope.tab = setTab;
    
    if (setTab === 2) {
      $scope.filtText = "appetizer";
    } 
    else if (setTab === 3) {
      $scope.filtText = "mains";
    }
    else if (setTab === 4) {
      $scope.filtText = "dessert";
    }
    else {
      $scope.filtText = "";
    }
  };
  
  $scope.isSelected = function (checkTab) {
    return ($scope.tab === checkTab);
  };
  //introduce our show details code
  $scope.toggleDetails = function() {
    $scope.showDetails = !$scope.showDetails;
  };

}])

//introduce contact controller
    .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                               agree:false, email:"" };
                               //check options for select
             var channels = [{value:"tel", label:"Tel."},
                             {value:"Email",label:"Email"}];

                        $scope.channels = channels;
                        //tracks to see if the user has selected the approprite channel selction
            $scope.invalidChannelSelection = false;                   
        }])   
      //introduce feedbackController which is a child of contact controller
      //the feedbackController can get anything that is nested under the
      //contactController
  .controller('FeedbackController', ['$scope', function($scope) {
            //ng-submit button is clicked we have to call the 
            //send feedback functon
            $scope.sendFeedback = function() {

                                console.log($scope.feedback);
                              
                  //if the user submits the button we check if the 
                //checkbox is checked 
                            if ($scope.feedback.agree && ($scope.feedback
                              .mychannel == "")&& !$scope.feedback.mychannel) 
                                {//if checkbox is ticked and feedback.my channel is 
                                //an empty string invalidchannelselection
                                  $scope.invalidChannelSelection = true;
                                    console.log('incorrect');
                                }
                            else {
                                  //else checkbox is ticked and invalid is true
                                  $scope.invalidChannelSelection = false;
                                  $scope.feedback = {
                                        mychannel:"", firstName:"", lastName:"",
                                                     agree:false, email:"" };
                                  $scope.feedback.mychannel="";

                                  $scope.feedbackForm.$setPristine();
                                  console.log($scope.feedback);
                                }    

                          };


        }])     

;       