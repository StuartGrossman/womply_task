var myJqueryAlias = jQuery.noConflict();
myJqueryAlias( document ).ready(function() {

    var Verdicts = {                   
                    1: "<br><div><center><h3>Verdict 1</h3></center><hr></div><div class='column'><br><b>Trial dates</b>: April 11-13, 2016<br><b>Case #</b>: 15CV31527<br><b>Judge</b>: Edward Colt</div><div class='column'><br><b>Offer</b>: $35,000<br><b>Verdict + interest/costs</b>: $96,659.19</div>",

                    2: "<br><div><center><h3>Verdict 2</h3></center><hr></div><div class='column'><br><b>Trial dates</b>: June 8-11, 2004<br><b>Case #</b>: 02CV2076<br><b>Judge</b>: Robert Lowery</div><div class='column'><br><b>Offer</b>: $15,000<br><b>Verdict + interest/costs</b>: $147,460.00</div>",

                    3: "<br><div><center><h3>Verdict 3</h3></center><hr></div><div class='column'><br><b>Trial dates</b>: February 12-15, 2007<br><b>Case #</b>: 05CV3320<br><b>Judge</b>: Steven Pelican</div><div class='column'><br><b>Offer</b>: $50,000<br><b>Verdict + interest/costs</b>: $89,310.29</div>",

                    4: "<br><div><center><h3>Verdict 4</h3></center><hr></div><div class='column'><br><b>Trial dates</b>: February 2-6, 2015<br><b>Case #</b>: 13CV1551<br><b>Judge</b>: William Bain</div><div class='column'><br><b>Offer</b>: $22,000<br><b>Verdict + interest/costs</b>: $94,927.88</div>",

                    5: "<br><div><center><h3>Verdict 5</h3></center><hr></div><div class='column'><br><b>Trial dates</b>: March 13-15, 2000<br><b>Case #</b>: 98CV333<br><b>Judge</b>: Anthony Vollack</div><div class='column'><br><b>Offer</b>: NONE<br><b>Verdict + interest/costs</b>: $100,000 + interest/costs</div>",

                    6: "<br><div><center><h3>Verdict 6</h3></center><hr></div><div class='column'><br><b>Trial dates</b>: September 17-19, 2014<br><b>Case #</b>: 13CV1239<br><b>Judge</b>: Thomas Kane</div><div class='column'><br><b>Offer</b>: $9,000<br><b>Settled post-trial</b>: $100,000.00 + interest/costs-Plaintiff 1<br> $15,000.00 + interest/costs-Plaintiff 2</div>",

                    7: "<br><div><center><h3>Verdict 7</h3></center><hr></div><div class='column'><br><b>Trial dates</b>: August 10-13, 2009<br><b>Case #</b>: 08CV5814<br><b>Judge</b>: David Miller</div><div class='column'><br><b>Offer</b>: $15,000<br><b>Verdict + interest/costs</b>: $23,697.00</div>",

                    8: "<br><div><center><h3>Verdict 8</h3></center><hr></div><div class='column'><br><b>Trial dates</b>: March 29-31, 2010<br><b>Case #</b>: 09CV4143<br><b>Judge</b>: David Miller</div><div class='column'><br><b>Offer</b>: $15,000<br><b>Verdict + interest/costs</b>: $20,997.91</div>",

                    9: "<br><div><center><h3>Verdict 9</h3></center><hr></div><div class='column'><br><b>Trial dates</b>: March 19-20, 2008<br><b>Case #</b>: 06CV5859<br><b>Judge</b>: Valeria Spencer</div><div class='column'><br><b>Verdict + interest/costs</b>: $5,022,558.07</div>",
                }

        var count = 1;
       
        myJqueryAlias('#forward').on('click', function(e){
            if(count <= 8){
                count += 1;
                myJqueryAlias('#placeHolder').fadeOut(1000, function(){
                myJqueryAlias('#placeHolder').html(Verdicts[count])
                myJqueryAlias('#placeHolder').show();
               
             });
            }
            
        })
        myJqueryAlias('#back').on('click', function(e){
            if(count >= 1){
                count -= 1;
                myJqueryAlias('#placeHolder').fadeOut(1000, function(){
                myJqueryAlias('#placeHolder').html(Verdicts[count])
                myJqueryAlias('#placeHolder').show();
               
             });
            }
            
            
        })
    
});


