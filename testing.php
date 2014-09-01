
<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="classify.js"></script>
</head>	
</body>
<ul>
    <li>home</li>
    <li>rome</li>
    <li>dome</li>
    <li>mome</li>
    <li>some</li>
</ul>
<script>
jQuery(document).ready(function(){
	// alert('u r re e');
 jQuery(" li ").classify({
 	
 	
 		element : [{"value":"1","custom_class":"proaactive"},{"value":"2","custom_class":"newclass"}]
 	
 
 	 	
 	 });
});
</script>
</body>
</html>