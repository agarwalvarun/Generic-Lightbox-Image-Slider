var slider = (function (){
	var arr,light_arr=[];
	function display_lightbox(){
		var x=this.id;
		var div=light_arr[x];
		document.getElementsByTagName("BODY")[0].appendChild(div);
	}
	function create_lightbox(i){
		var div=document.createElement('div');
		var img=document.createElement('img');
		var cross=document.createElement('i');
		var right=document.createElement('i');
		var left=document.createElement('i');
		left.className='fa fa-chevron-left fa-3x';
		right.className='fa fa-chevron-right fa-3x';
		cross.className='fa fa-times fa-2x';
		img.setAttribute('src',arr[i].src);
		div.className='lightbox';
		div.id=i;
		div.appendChild(img);
		div.appendChild(cross);
		div.appendChild(right);
		div.appendChild(left);
		light_arr[i]=div;
		arr[i].className='image';
		arr[i].id=i;
	}
	function slide_image(){
		for (var i=0;i<=arr.length-1;i++){
			create_lightbox(i);
		}
	}
	function remove(){
		$(".lightbox").remove();
	}
	function move_right(){
		var id=$('.lightbox').attr('id'),div;
		$(".lightbox").remove();
		if(+id + +1<=arr.length-1){
			div=light_arr[+id + +1];
			document.getElementsByTagName("BODY")[0].appendChild(div);	
		}
		else{
			div=light_arr[0];
			document.getElementsByTagName("BODY")[0].appendChild(div);	
		}
	}
	function move_left(){
		var id=$('.lightbox').attr('id'),div;
		$(".lightbox").remove();
		if(+id - +1>=0){
			div=light_arr[+id - +1];
			document.getElementsByTagName("BODY")[0].appendChild(div);	
		}
		else{
			div=light_arr[+0 + +arr.length-1];
			document.getElementsByTagName("BODY")[0].appendChild(div);	
		}
	}
	function init(id){
		var el=document.getElementById(id);
		arr=el.getElementsByTagName("img");
		slide_image();
		$(document).on('click', ".image", display_lightbox);
		$(document).on('click', ".fa-times", remove);
		$(document).on('click', ".fa-chevron-right", move_right);
		$(document).on('click', ".fa-chevron-left", move_left);
	}
	return {	
		init:init
	};
})();