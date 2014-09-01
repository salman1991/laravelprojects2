(function( $ ) {
    
    $.fn.classify = function(options) {
        $("li").removeClass("even").removeClass("odd").removeClass("last").removeClass("first"); 
        $('ul li').filter(':even').addClass('odd').end()
        .filter(':odd').addClass('even');
        $( "li" ).first().addClass( "first" );
        $( "li" ).last().addClass( "last" );
       
        
        this.filter(" li ").each(function(i) {
        var value = options.element[i]['value'];

        
        if(!(value === null))
        {
            console.log('test');
            var counter = 1;
            var length_of_li = $('ul li').length;
           
            while(length_of_li){
                if(counter%options.element[i]['value']==0){
                    
                    $("li:eq("+(counter-1)+")").addClass(options.element[i]['custom_class']);  
                }   
                
                counter++;
                length_of_li--;
                  
            }   
           
        }   
          
        });
            
        
    }
        
        return this;
        
   
 
}( jQuery ));
