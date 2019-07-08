<!DOCTYPE html>
<html>
    <head>
        <title>Three Card Monte</title>
        <link  href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Eater&display=swap" rel="stylesheet">
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
        <meta name="viewport" content="width=device-width, initial-scale=1">
      
        
    </head>
    <body>
      <div class='container text-center'>
        <header> 
          <h1 id="title">Three Card Monte</h1>
          <h4>Javascript Edition</h4>
        </header>
        <hr>
        <div id="block">
          <div id="rules">
            <h3>
             The rules are simple place a bet and pick a card. If you get the 'ACE' you win the amount you put down.
             <br /> Pick the wrong card and the house takes your money. If you run out of money 'Game Over'.
            </h3>
          </div>
          <div id="vault"></div>
          <div id="bet"></div>
          <div id="betting"></div>
          <div id="board">        
            <div class ="boardSlot" id="slot1"></div>
            <div class ="boardSlot" id="slot2"></div>
            <div class ="boardSlot" id="slot3"></div>
          </div>
          <div id="results"></div>
          <div id="replay"></div>
        </div>  
        <hr>
        <script src="js/card.js"></script>               
        <footer>    
          <div class="foot">
            <img id="f_img" src="img/CSUMB_Logo1.png" alt="CSUMB Logo"/>  
          </div>
          <div id="foot" id = "copyright">
            CST336 Internet Programming. 2019&copy; Sheridan <br />
            <strong> Disclaimer:</strong> The information in this webpage is fictitious. <br />
            It is used for academic purposes only.  
          </div>
          Image by <a href="https://pixabay.com/users/blickpixel-52945/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=570704">Michael Schwarzenberger</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=570704">Pixabay</a>
        </footer>
    </body>
</html>