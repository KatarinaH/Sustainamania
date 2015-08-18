$(document).ready( function() {
  
	$('ul li').click(function() {
      var itemName = $(this).attr('class');
      console.log(itemName);

      itemName = itemName.replace('filter-', '');

      $('.clothes').isotope({
         filter: '.'+itemName
      });

   });

	renderGrid();


	$('.box8').click(function(){
        $('#overlay').fadeIn('fast',function(){
            $('#box').animate({'top':'10%'},500);
        });
    });
    $('#boxclose').click(function(){
        $('#box').animate({'top':'-110%'},500,function(){
            $('#overlay').fadeOut('fast');
        });
    });


    $('.woman1').click(function(){
        $('#overlayShop').fadeIn('fast',function(){
            $('#boxShop').animate({'top':'10%'},500);
        });
    });
    $('#boxcloseShop').click(function(){
        $('#boxShop').animate({'top':'-110%'},500,function(){
            $('#overlayShop').fadeOut('fast');
        });
    });
});


function renderGrid() {
	$('#info-wrapper, .clothes').isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});
}