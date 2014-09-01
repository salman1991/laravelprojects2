(function( $ ) {
    
    $.fn.globalclass = function(options) {
        alert('u r here ');
        $(this).removeClass("even").removeClass("odd").removeClass("last").removeClass("first"); 
        $(this).filter(':even').addClass('odd').end()
        .filter(':odd').addClass('even');
        $(this).first().addClass( "first" );
        $(this).last().addClass( "last" );
        if(!(options.element===null)){      
            $(options.element).each(function(index) {
                var value = options.element[index]['value'];
                var counter = 1;
                var length_of_element = $(options.childs).length;
                while(length_of_element){
                    if(counter%options.element[index]['value']==0){
                        $(options.childs+":eq("+(counter-1)+")").addClass(options.element[index]['custom_class']);  
                    }   
                counter++;
                length_of_element--;
                }   
            });
        }
    }
    return this;
}( jQuery ));
