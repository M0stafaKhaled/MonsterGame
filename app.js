new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameState:false,
        turns:[]




    },
    methods: {

        startGame: function(){

        this.gameState = true;
        this.playerHealth = 100;
        this.monsterHealth =100;
        this.turns=[];

        },
        getDamge:function (maxDamge,minDamge){

          return  Math.floor( Math.max((Math.random() *maxDamge ) +1 , minDamge));
        },

        attack: function (){
            var damge = this.getDamge(3,10);   
            this.monsterHealth -= damge;
            this.turns.unshift(

                {
                    isPlayer:true,
                    text:'player hits the monster for' +damge ,

                }
            );
                this.chackWin();
                this.monsterAttack();


        },
        chackWin:function (){

            if(this.monsterHealth <=0){
                if(confirm('You win new game'))
                  this.startGame();

                else
                    this.gameState = false;

                
                return true ;
               
            }
           else if(this.playerHealth <=0){


            if(confirm('You loase new game'))
            this.startGame();

          else
              this.gameState = false;
             
            }
            return false;
          
        },
       specialAttack:function (){
                var damge = this.getDamge(10,20);
              this.monsterHealth -=  damge;
              this.turns.unshift(

                {
                    isPlayer:true,
                    text:'player hits the monster  hard for' +damge 

                });
                this.chackWin();
                this.monsterAttack();
              

        },

        monsterAttack:function (){
            var damge = this.getDamge(4,12);
           this.playerHealth -= damge;
           this.turns.unshift({
                    isPlayer:false,
                    text:'Monster hits player for' + damge,

           });
           this.chackWin();

        },

        healing:function (){
            if(this.playerHealth <=90)
            this.playerHealth += 14;
            else {

                this.playerHealth = 100;
            }
            
            this.monsterAttack();


        },
        giveUp:function (){

            this.gameState = false;
        },

       
        


    }


     
});