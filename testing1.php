<html>
<head>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script src="globalclass.js"></script>
</head>	
</body>
<div class="entries">
	<div class="entry">
		class1
	</div>
	<div class="entry">
		class2
	</div>
	<div class="entry">
		class3
	</div>
	<div class="entry">
		class4
	</div>
	<div class="entry">
		class5
	</div>
	<div class="entry">
		class6
	</div>
	<div class="entry">
		class6
	</div>
	<div class="entry">
		class7
	</div>
	<div class="entry">
		class8
	</div>
	<div class="entry">
		class8
	</div>
</div>


<script>
jQuery(document).ready(function(){
	// alert('u r re e');
jQuery("div.entries > div.entry").globalclass({
		 childs : ".entry",
 		element : [{"value":"3","custom_class":"proaactive"},{"value":"2","custom_class":"newclass"},{"value":"5","custom_class":"customclass"}]
 	});
});
</script>
</body>
</html>

