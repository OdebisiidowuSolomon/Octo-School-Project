(function($){
    "use strict"; // Start of use strict  

    // login popup
    function login_popup(){
    	$('.popup-form').find('input:not(.button)').on('focusin',function(){    		
    		$(this).parent().addClass('input-focus');
    	}).on('focusout',function(){
    		$(this).parent().removeClass('input-focus');
    	})
    	$('.popup-form').find('input:not(.button)').each(function(){
    		if($(this).val()) $(this).parent().addClass('has-value');
    		else $(this).parent().removeClass('has-value');    		
    	})
    	$('.popup-form').find('input:not(.button)').on('keyup',function(){
    		$(this).parent().removeClass('invalid');
			if($(this).val()) $(this).parent().addClass('has-value');
			else $(this).parent().removeClass('has-value');
    	})
    	$('.open-login-form,.login-popup,.register-popup,.lostpass-popup').on('click',function(e){
    		if(!$(this).parents('.disable-popup').length > 0){
	    		e.preventDefault();
	    		$('.login-popup-content-wrap').fadeIn();
	    		if($(this).hasClass('register-popup')) $('.register-link').trigger('click');
	    		if($(this).hasClass('lostpass-popup')) $('.lostpass-link').trigger('click');
	    	}
    	})
    	$('.close-login-form,.popup-overlay').on('click',function(e){
    		e.preventDefault();
    		$('.login-popup-content-wrap').fadeOut();
    	})
    	$('.popup-redirect').on('click',function(e){
    		e.preventDefault();
    		var id = $(this).attr('href');
    		$('.ms-default').fadeOut();
    		$('.popup-form').removeClass('active');
    		$(id).parents('.popup-form').addClass('active');
    	})
    	$('#login_error a').on('click',function(){
    		$('.lostpass-link').trigger('click');
    	})
    }

    // fix append css
    function fix_css_append(){
		var css_data = String($('#s7upf-theme-style-inline-css').html());
		$('#s7upf-theme-style-inline-css').remove();
	    if(css_data) $('head').append('<'+'style id="s7upf-theme-style-inline-css">'+css_data+'</style>');
    }
    // Letter popup
    function letter_popup(){
    	//Popup letter
		var content = $('#boxes-content').html();
		$('#boxes-content').html('');
		if(content) $('body').append('<div id="boxes">'+content+'</div>');
		if($('#boxes').html() != ''){
			var id = '#dialog';	
			//Get the screen height and width
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
		
			//Set heigth and width to mask to fill up the whole screen
			$('#mask').css({'width':maskWidth,'height':maskHeight});
			
			//transition effect		
			$('#mask').fadeIn(500);	
			$('#mask').fadeTo("slow",0.6);	
		
			//Get the window height and width
			var winH = $(window).height();
			var winW = $(window).width();
	              
			//Set the popup window to center
			$(id).css('top',  winH/2-$(id).height()/2);
			$(id).css('left', winW/2-$(id).width()/2);
		
			//transition effect
			$(id).fadeIn(2000); 	
		
			//if close button is clicked
			$('.window .close-popup').on('click',function (e) {
				//Cancel the link behavior
				e.preventDefault();
				
				$('#mask').hide();
				$('.window').hide();
			});		
			
			//if mask is clicked
			$('#mask').on('click',function () {
				$(this).hide();
				$('.window').hide();
			});
		}
		//End popup letter
    }

    /************** FUNCTION ****************/ 
    function tool_panel(){
    	$('.dm-open').on('click',function(){
    		$('#widget_indexdm').toggleClass('active');
    		$('#indexdm_img').toggleClass('active');
    		return false;
    	})
    	$('.dm-content .item-content').on('hover',function(){
    		if(!$(this).hasClass('active')){
    			$('.img-demo').removeClass('dm-scroll-img');
				setTimeout(function() {
					$('.img-demo').addClass('dm-scroll-img');
				},20);
    			$(this).parent().find('.item-content').removeClass('active');
    			$(this).addClass('active');
    		}
			$('#indexdm_img').addClass('active');
			var img_src = $(this).find('img').attr('data-src');			
			$('.img-demo').css('display','block');
			$('.img-demo').css('background-image','url('+img_src+')');
    	});
    	$('.img-demo').mouseenter(function(){
			$(this).addClass('pause');
	        }).mouseleave(function(){
	        $(this).removeClass('pause');
	    });
    	var default_data = $('#s7upf-theme-style-inline-css').html();    	
    	$('.dm-color').on('click',function(){
    		$(this).parent().find('.dm-color').removeClass('active');
    		$(this).addClass('active');
    		var color,color2,rgb,rgb2;
    		var data = $('.get-data-css').attr('data-css');
    		var sep = new RegExp('##', 'gi');
    		data = data.replace(sep,'"', -1);
    		// Color 1
    		var color_old = $('.get-data-css').attr('data-color');
    		var rgb_old = $('.get-data-css').attr('data-rgb');
    		var color_df = $('.get-data-css').attr('data-colordf');
    		var rgb_df = $('.get-data-css').attr('data-rgbdf');
    		if($(this).attr('data-color')) $('.get-data-css').attr('data-color',$(this).attr('data-color'));
    		if($(this).attr('data-rgb')) $('.get-data-css').attr('data-rgb',$(this).attr('data-rgb'));
    		color = $('.get-data-css').attr('data-color');    		
    		rgb = $('.get-data-css').attr('data-rgb');

    		// Color 2
    		var color2_old = $('.get-data-css').attr('data-color2');
    		var rgb2_old = $('.get-data-css').attr('data-rgb2');
    		var color2_df = $('.get-data-css').attr('data-color2df');
    		var rgb2_df = $('.get-data-css').attr('data-rgb2df');
    		if($(this).attr('data-color2')) $('.get-data-css').attr('data-color2',$(this).attr('data-color2'));
    		if($(this).attr('data-rgb2')) $('.get-data-css').attr('data-rgb2',$(this).attr('data-rgb2'));
    		color2 = $('.get-data-css').attr('data-color2');
    		rgb2 = $('.get-data-css').attr('data-rgb2');
    		if(color && color2){
    			// Color 1
	    		color_df = new RegExp(color_df, 'gi');
	    		rgb_df = new RegExp(rgb_df, 'gi');
	    		data = data.replace(color_df,color, -1);
	    		data = data.replace(rgb_df,rgb, -1);

	    		// Color 2
	    		color2_df = new RegExp(color2_df, 'gi');
	    		rgb2_df = new RegExp(rgb2_df, 'gi');
	    		data = data.replace(color2_df,color2, -1);
	    		data = data.replace(rgb2_df,rgb2, -1);

	    		if($('#s7upf-theme-style-inline-css').length > 0) $('#s7upf-theme-style-inline-css').html(data);
	    		else $('head').append('<'+'style id="s7upf-theme-style-inline-css">'+data+'</style>');
	    	}
	    	else $('#s7upf-theme-style-inline-css').html(default_data);
	    	return false;
    	})
    }
    function auto_width_megamenu(){
        if($(window).width()>1170){
            var full_width = parseInt($('.container').innerWidth());
            if($('nav.main-nav').length > 0){
                var main_menu_width = parseInt($('nav.main-nav').innerWidth());
                var main_menu_left = parseInt($('nav.main-nav').offset().left);
                $('nav.main-nav > ul > li.has-mega-menu').each(function(){
                    if($(this).find('.mega-menu').length > 0){
                        var mega_menu_width = parseInt($(this).find('.mega-menu').innerWidth());
                        var li_width = parseInt($(this).innerWidth());
                        var seff = $(this);
                        if($('.rtl').length > 0){
                            setTimeout(function() {
                                main_menu_left = parseInt($(window).width() - (seff.parents('nav.main-nav').offset().left + seff.parents('nav.main-nav').outerWidth()));
                                var mega_menu_left = $(window).width() - (seff.find('.mega-menu').offset().left + seff.find('.mega-menu').outerWidth());
                                var li_left = $(window).width() - (seff.offset().left + seff.outerWidth());
                                var pos = li_left - mega_menu_left - mega_menu_width/2 + li_width/2;
                                var pos2 = pos + mega_menu_left + mega_menu_width - main_menu_left - main_menu_width;
                                if(pos2 > 0 ) pos = pos - pos2;
                                if(pos > 0 ) $(this).find('.mega-menu').css('right',pos);
                                else{
                                    pos  = $(window).width() - ($('.container').offset().left + $('.container').outerWidth()) - main_menu_left + (full_width - mega_menu_width)/2;
                                    seff.find('.mega-menu').css('right',pos);
                                }
                            }, 2000);
                        }
                        else{

                            var mega_menu_left = $(this).find('.mega-menu').offset().left;
                            var li_left = $(this).offset().left;
                            var pos = li_left - mega_menu_left - mega_menu_width/2 + li_width/2;
                            var pos2 = pos + mega_menu_left + mega_menu_width - main_menu_left - main_menu_width;
                            if(pos2 > 0 ) pos = pos - pos2;
                            if(pos > 0 ) $(this).find('.mega-menu').css('left',pos);
                            else{
                                pos  = $('.container').offset().left  - main_menu_left + (full_width - mega_menu_width)/2;
                                seff.find('.mega-menu').css('left',pos);
                            }
                        }
                    }
                })
            }
        }
    }
    //Detail Gallery
    function parallax_slider(){
    	if($('.parallax-slider').length>0){
			var ot = $('.parallax-slider').offset().top;
			var sh = $('.parallax-slider').height();
			var st = $(window).scrollTop();
			var top = (($(window).scrollTop() - ot) * 0.5) + 'px';
			if(st>ot&&st<ot+sh){
				$('.parallax-slider .item-slider').css({
					'background-position': 'center ' + top
				});
			}else{
				$('.parallax-slider .item-slider').css({
					'background-position': 'center 0'
				});
			}
		}
    }
	function detail_gallery(){
		if($('.detail-gallery').length>0){
			$('.detail-gallery').each(function(){
				var data=$(this).find(".carousel").data();
				var seff = $(this);
				if($(this).find(".carousel").length>0){
                    if($(window).width()<=1170){
                        data.visible=4;
                        if($(this).parents(".content-sidebar-left, .content-sidebar-right,.style-image-small").length>0){
                            data.visible=3;
                        }

                    }
                    if($(window).width()<=991){
                        data.visible=3;
                    }
                    if($(window).width()<=767){
                        data.visible=4;
                    }
                    if($(window).width()<=667){
                        data.visible=3;
                    }
                    if($(window).width()<=375){
                        data.visible=2;
                    }
                    if($(this).parents('.gallery-vertical-mobi').length>0){
                        if($(window).width()<=1170 ){
                            data.vertical= false;
                            $(this).parents('.gallery-vertical-mobi').addClass('style-gallery-horizontal');
                            $(this).parents('.gallery-vertical-mobi').removeClass('style-gallery-vertical');
                        }else{
                            data.vertical= true;
                            $(this).parents('.gallery-vertical-mobi').addClass('style-gallery-vertical');
                            $(this).parents('.gallery-vertical-mobi').removeClass('style-gallery-horizontal');
                        }
                    }
					$(this).find(".carousel").jCarouselLite({
						btnNext: $(this).find(".gallery-control .next"),
						btnPrev: $(this).find(".gallery-control .prev"),
						speed: 800,
						visible:data.visible,
						vertical:data.vertical,
					});
				}
				//Elevate Zoom				
				$.removeData($('.detail-gallery .mid img'), 'elevateZoom');//remove zoom instance from image
				$('.zoomContainer').remove();
				if($(window).width()>=768){
					$(this).find('.zoom-style1 .mid img').elevateZoom();
					$(this).find('.zoom-style2 .mid img').elevateZoom({
						scrollZoom : true
					});
					$(this).find('.zoom-style3 .mid img').elevateZoom({
						zoomType: "lens",
						lensShape: "square",
						lensSize: 150,
						borderSize:1,
						containLensZoom:true,
						responsive:true
					});
					$(this).find('.zoom-style4 .mid img').elevateZoom({
						zoomType: "inner",
						cursor: "crosshair",
						zoomWindowFadeIn: 500,
						zoomWindowFadeOut: 750
					});
				}

				$(this).find(".carousel a").on('click',function(event) {
					event.preventDefault();
					$(this).parents('.detail-gallery').find(".carousel a").removeClass('active');
					$(this).addClass('active');
					var z_url =  $(this).find('img').attr("data-src");
					var srcset =  $(this).find('img').attr("data-srcset");
					var index =  Number($(this).parent().attr("data-number"));
					$(this).parents('.detail-gallery').find(".image-lightbox").attr("data-index",index-1);
					$(this).parents('.detail-gallery').find(".mid img").attr("src", z_url);
					$(this).parents('.detail-gallery').find(".mid img").attr("srcset", srcset);
					$('.zoomWindow,.zoomLens').css('background-image','url("'+z_url+'")');
					$.removeData($('.detail-gallery .mid img'), 'elevateZoom');//remove zoom instance from image
					$('.zoomContainer').remove();
					if($(window).width()>=768){
						$(this).parents('.detail-gallery').find('.zoom-style1 .mid img').elevateZoom();
						$(this).parents('.detail-gallery').find('.zoom-style2 .mid img').elevateZoom({
							scrollZoom : true
						});
						$(this).parents('.detail-gallery').find('.zoom-style3 .mid img').elevateZoom({
							zoomType: "lens",
							lensShape: "square",
							lensSize: 150,
							borderSize:1,
							containLensZoom:true,
							responsive:true
						});
						$(this).parents('.detail-gallery').find('.zoom-style4 .mid img').elevateZoom({
							zoomType: "inner",
							cursor: "crosshair",
							zoomWindowFadeIn: 500,
							zoomWindowFadeOut: 750
						});
					}
				});
				$('input[name="variation_id"]').on('change',function(){
					var z_url =  seff.find('.mid img').attr("src");
					$('.zoomWindow,.zoomLens').css('background-image','url("'+z_url+'")');
					$.removeData($('.detail-gallery .mid img'), 'elevateZoom');//remove zoom instance from image
					$('.zoomContainer').remove();
					$('.detail-gallery').find('.zoom-style1 .mid img').elevateZoom();
					$('.detail-gallery').find('.zoom-style2 .mid img').elevateZoom({
						scrollZoom : true
					});
					$('.detail-gallery').find('.zoom-style3 .mid img').elevateZoom({
						zoomType: "lens",
						lensShape: "square",
						lensSize: 150,
						borderSize:1,
						containLensZoom:true,
						responsive:true
					});
					$('.detail-gallery').find('.zoom-style4 .mid img').elevateZoom({
						zoomType: "inner",
						cursor: "crosshair",
						zoomWindowFadeIn: 500,
						zoomWindowFadeOut: 750
					});
				})
				$('.image-lightbox').on('click',function(event){
					event.preventDefault();
                    var gallerys = $(this).attr('data-gallery');
					var index = Number($(this).attr('data-index'));
					var data_thumb = $(this).attr('data-thumb');
					var data_src = $(this).find('img').attr('src');
					var gallerys_array = gallerys.split(',');
                    var data = [];
					var data2 = [];
					var j = 0;
					var k = 0;
					if(gallerys != ''){
						for (var i = 0; i < gallerys_array.length; i++) {
							if(gallerys_array[i] != ''){
                                if(i >= index){
    								data[j] = {};
    								data[j].href = gallerys_array[i];
    								j++;
                                }
                                else{
                                    data2[k] = {};
                                    data2[k].href = gallerys_array[i];
                                    k++;
                                }
							}
						};
					}
                    if(data2.length>0) data = data.concat(data2);
                    if(data_thumb){
                    	var add_thumb = [];
                    	add_thumb[0] = {};
                    	add_thumb[0].href = data_thumb;
                    	if(data_thumb == data_src) data = add_thumb.concat(data);
                    	else data = data.concat(add_thumb);
                    }
					$.fancybox.open(data);
				})
			});
		}
	}
    
    // Menu fixed
    function fixed_header(){
        var menu_element;
        menu_element = $('.main-nav:not(.menu-fixed-content)').closest('.vc_row');
        menu_element.removeClass('vc_hidden');
        if($('.menu-sticky-on').length > 0){
            var menu_class = $('.main-nav').attr('class');
            var header_height = $("#header").height()+100;
            var ht = header_height + 150;
            var st = $(window).scrollTop();

            if(!menu_element.hasClass('header-fixed') && menu_element.attr('data-vc-stretch-content') == 'true') menu_element.addClass('header-fixed');
            if(st>header_height){               
                if(menu_element.attr('data-vc-stretch-content') == 'true'){
                    if(st > ht) menu_element.addClass('active');
                    else menu_element.removeClass('active');
                    menu_element.addClass('fixed-header');
                    $('body').addClass('menu-on-fixed');
                }
                else{
                    if(st > ht) menu_element.parent().parent().addClass('active');
                    else menu_element.parent().parent().removeClass('active');
                    if(!menu_element.parent().parent().hasClass('fixed-header')){
                        menu_element.wrap( "<div class='menu-fixed-content fixed-header "+menu_class+"'><div class='container'></div></div>" );
                    }
                    $('body').removeClass('menu-on-fixed');
                    menu_element.removeClass('vc_hidden');
                }
            }else{
                menu_element.removeClass('active');
                if(menu_element.attr('data-vc-stretch-content') == 'true') menu_element.removeClass('fixed-header');
                else{
                    if(menu_element.parent().parent().hasClass('fixed-header')){
                        menu_element.unwrap();
                        menu_element.unwrap();                        
                    }
                }
                $('body').removeClass('menu-on-fixed');
                menu_element.removeClass('vc_hidden');
            }
        }
        else{
            menu_element.removeClass('active');
            if(menu_element.attr('data-vc-stretch-content') == 'true') menu_element.removeClass('fixed-header').removeClass('vc_hidden');
            else{
                if(menu_element.parent().parent().hasClass('fixed-header')){
                    menu_element.unwrap();
                    menu_element.unwrap();
                    menu_element.removeClass('vc_hidden');
                }
            }
        }
    }
    //Menu Responsive
    function fix_click_menu(){
        if($(window).width()<=1170){
            if($('.btn-toggle-mobile-menu').length>0){
                return false;
            }
            else $('.main-nav li.menu-item-has-children,.main-nav li.has-mega-menu').append('<span class="btn-toggle-mobile-menu"></span>');
        }
        else{
            $('.btn-toggle-mobile-menu').remove();
            $('.main-nav .sub-menu,.main-nav .mega-menu').slideDown('fast');
        }
    }
    function rep_menu(){
        $('.toggle-mobile-menu').on('click',function(event){
            event.preventDefault();
            $(this).parents('nav.main-nav').toggleClass('active');
            $(this).prev().slideToggle('fast');
        });
        $('nav.main-nav').on('click','.btn-toggle-mobile-menu',function(event){
            $(this).toggleClass('active');
            $(this).prev().stop(true,false).slideToggle('fast');
        });
        $('nav.main-nav').on('click','.menu-item > a[href="#"]',function(event){
            event.preventDefault();
            $(this).toggleClass('active');
            $(this).next().stop(true,false).slideToggle('fast');
        });
    }
    function background(){
		$('.bg-slider .item-slider').each(function(){
			$(this).find('.banner-thumb a img').css('height',$(this).find('.banner-thumb a img').attr('height'));
			var src=$(this).find('.banner-thumb a img').attr('src');
			$(this).css('background-image','url("'+src+'")');
		});	
	}
    
    function fix_variable_product(){
    	//Fix product variable thumb    	
        $('body .variations_form select').on('change',function(){
            var id = $('input[name="variation_id"]').val();
            if(id){
                $('.product-gallery #bx-pager').find('a[data-variation_id="'+id+'"]').trigger( 'click' );
            }
        })
        // variable product
        if($('.wrap-attr-product1.special').length > 0){
            $('.attr-filter ul li a').on('click',function(){
                event.preventDefault();
                $(this).parents('ul').find('li').removeClass('active');
                $(this).parent().addClass('active');
                var attribute = $(this).parent().attr('data-attribute');
                var id = $(this).parents('ul').attr('data-attribute-id');
                $('#'+id).val(attribute);
                $('#'+id).trigger( 'change' );
                $('#'+id).trigger( 'focusin' );
                return false;
            })
            $('.attr-hover-box').on('hover',function(){
                var seff = $(this);
                var old_html = $(this).find('ul').html();
                var current_val = $(this).find('ul li.active').attr('data-attribute');
                $(this).next().find('select').trigger( 'focusin' );
                var content = '';
                $(this).next().find('select').find('option').each(function(){
                    var val = $(this).attr('value');
                    var title = $(this).html();
                    var el_class = '';
                    if(current_val == val) el_class = ' class="active"';
                    if(val != ''){
                        content += '<li'+el_class+' data-attribute="'+val+'"><a href="#" class="bgcolor-'+val+'"><span></span>'+title+'</a></li>';
                    }
                })
                if(old_html != content) $(this).find('ul').html(content);
            })
            $('body .reset_variations').on('click',function(){
                $('.attr-hover-box').each(function(){
                    var seff = $(this);
                    var old_html = $(this).find('ul').html();
                    var current_val = $(this).find('ul li.active').attr('data-attribute');
                    $(this).next().find('select').trigger( 'focusin' );
                    var content = '';
                    $(this).next().find('select').find('option').each(function(){
                        var val = $(this).attr('value');
                        var title = $(this).html();
                        var el_class = '';
                        if(current_val == val) el_class = ' class="active"';
                        if(val != ''){
	                        content += '<li'+el_class+' data-attribute="'+val+'"><a href="#" class="bgcolor-'+val+'"><span></span>'+title+'</a></li>';
	                    }
                    })
                    if(old_html != content) $(this).find('ul').html(content);
                    $(this).find('ul li').removeClass('active');
                })
            })
        }
        //end
    }
    function beforeAction(event){
        var element   = event.target;
        var i = 0;
        $(element).find('.owl-item').each(function(){
            $(this).find('[data-animated]').each(function(){
                var anime = $(this).attr('data-animated');
                if(event.item.index == i){
                    $(this).addClass(anime);
                    $(this).addClass('animated');
                }
                else{
                    $(this).removeClass(anime);
                    $(this).removeClass('animated');
                }
            })
            i++;
        })
    }
    function afterAction(event){
    	var element   = event.target;
		$(element).find('.owl-item').each(function(){
			var check = $(this).hasClass('active');
			if(check==true){
				$(this).attr('class','owl-item active');
				$(this).find('.animated').each(function(){
					var anime = $(this).attr('data-animated');
					$(this).addClass(anime);
				});
			}else{
				$(this).attr('class','owl-item');
				$(this).find('.animated').each(function(){
					var anime = $(this).attr('data-animated');
					$(this).removeClass(anime);
				});
			}
		})
	}
    function s7upf_qty_click(){
    	//QUANTITY CLICK
		$("body").on("click",".detail-qty .qty-up",function(){
            var min = $(this).prev().attr("min");
            var max = $(this).prev().attr("max");
            var step = $(this).prev().attr("step");
            if(step === undefined) step = 1;
            if(max !==undefined && Number($(this).prev().val())< Number(max) || max === undefined || max === ''){ 
                if(step!='') $(this).prev().val(Number($(this).prev().val())+Number(step));
            }
            $( 'div.woocommerce form .button[name="update_cart"]' ).prop( 'disabled', false );
            return false;
        })
        $("body").on("click",".detail-qty .qty-down",function(){
            var min = $(this).next().attr("min");
            var max = $(this).next().attr("max");
            var step = $(this).next().attr("step");
            if(step === undefined) step = 1;
            if(Number($(this).next().val()) > Number(min)){
	            if(min !==undefined && $(this).next().val()>min || min === undefined || min === ''){
	                if(step!='') $(this).next().val(Number($(this).next().val())-Number(step));
	            }
	        }
	        $( 'div.woocommerce form .button[name="update_cart"]' ).prop( 'disabled', false );
	        return false;
        })
        $("body").on("keyup change","input.qty-val",function(){
        	$( 'div.woocommerce form .button[name="update_cart"]' ).prop( 'disabled', false );
        })
		//END
    }
    
    function s7upf_owl_slider(){
    	//Carousel Slider
		if($('.sv-slider').length>0){
			var rtl = false;
			if($('.rtl-enable').length>0) rtl = true;
			$('.sv-slider').each(function(){
				var seff = $(this);
				var item = seff.attr('data-item');
				var speed = seff.attr('data-speed');
				var itemres = seff.attr('data-itemres');
				var nav = seff.attr('data-navigation');
				var pag = seff.attr('data-pagination');
				var text_prev = seff.attr('data-prev');
				var text_next = seff.attr('data-next');
				var margin = seff.attr('data-margin');
				var stage_padding = seff.attr('data-stage_padding');
				var start_position = seff.attr('data-start_position');
				var merge = seff.attr('data-merge');
				var loop = seff.attr('data-loop');
				var mousewheel = seff.attr('data-mousewheel');
				var animation_out = seff.attr('data-animation_out');
				var animation_in = seff.attr('data-animation_in');
				if(animation_in == 'none' || animation_in == undefined) animation_in = '';
				if(animation_out == 'none' || animation_out == undefined) animation_out = '';
				var pagination = false, navigation= false, singleItem = false;
				var autoplay;
				var autoplaytimeout = 5000;
				if(!margin) margin = 0;
				if(!stage_padding) stage_padding = 0;
				if(!start_position) start_position = 0;
				if(!merge) merge = false; else merge = true;
				if(!loop) loop = false; else loop = true;
				if(!mousewheel) mousewheel = false; else mousewheel = true;
				if(speed != ''){
					autoplay = true;
					autoplaytimeout = parseInt(speed, 10);
				}
				else autoplay = false;
				// Navigation
				if(nav) navigation = true;
				if(pag) pagination = true;
				var prev_text = '<i class="la la-long-arrow-left" aria-hidden="true"></i>';
				var next_text = '<i class="la la-long-arrow-right" aria-hidden="true"></i>';
				if(text_prev) prev_text = text_prev;
				if(text_next) next_text = text_next;
				if(itemres == '' || itemres === undefined){
					if(item == '1') itemres = '0:1,480:1,768:1,1200:1';
					if(item == '2') itemres = '0:1,480:1,768:2,1200:2';
					if(item == '3') itemres = '0:1,480:2,768:2,992:3';
					if(item == '4') itemres = '0:1,480:2,840:3,1200:4';
					if(item >= '5') itemres = '0:1,480:2,768:3,1024:4,1200:'+item;
				}
				itemres = itemres.split(',');
				var responsive = {};
				var i;
				for (i = 0; i < itemres.length; i++) { 
				    itemres[i] = itemres[i].split(':');
				    var res_dv = {};
				    res_dv.items = parseInt(itemres[i][1], 10);
				    responsive[itemres[i][0]] = res_dv;
				}
				seff.owlCarousel({
					items: parseInt(item, 10),
				    margin: parseInt(margin, 10),
				    loop: loop,
				    stagePadding: parseInt(stage_padding, 10),
				    startPosition: parseInt(start_position, 10),
				    nav:navigation,
				    navText: [prev_text,next_text],
				    responsive: responsive,
				    autoplay: autoplay,
				    autoplayTimeout: autoplaytimeout,
				    animateOut: animation_out,
				    animateIn: animation_in,
				    dots: pagination,
                    onTranslate: beforeAction,
				    onInitialize:background,
				    rtl: rtl,
				    rewind: true,
				});
				if(mousewheel){
					seff.on('mousewheel', '.owl-stage', function (e) {
					    if (e.deltaY>0) {
					        seff.trigger('next.owl');
					    } else {
					        seff.trigger('prev.owl');
					    }
					    e.preventDefault();
					});
				}
			});			
		}
    }

    function s7upf_all_slider(seff,number){
    	if(!seff) seff = $('.smart-slider');
    	if(!number) number = '';
    	//Carousel Slider
		if(seff.length>0){
			var rtl = false;
			if($('.rtl-enable').length>0) rtl = true;
			seff.each(function(){
				var seff = $(this);
				var item = seff.attr('data-item');
				var speed = seff.attr('data-speed');
				var itemres = seff.attr('data-itemres');
				var nav = seff.attr('data-navigation');
				var pag = seff.attr('data-pagination');
				var text_prev = seff.attr('data-prev');
				var text_next = seff.attr('data-next');
				var margin = seff.attr('data-margin');
				var stage_padding = seff.attr('data-stage_padding');
				var start_position = seff.attr('data-start_position');
				var merge = seff.attr('data-merge');
				var loop = seff.attr('data-loop');
				var mousewheel = seff.attr('data-mousewheel');
				var animation_out = seff.attr('data-animation_out');
				var animation_in = seff.attr('data-animation_in');
				if(animation_in == 'none' || animation_in == undefined) animation_in = '';
				if(animation_out == 'none' || animation_out == undefined) animation_out = '';
				var pagination = false, navigation= false, singleItem = false;
				var autoplay;
				var autoplaytimeout = 5000;
				if(!margin) margin = 0;
				if(!stage_padding) stage_padding = 0;
				if(!start_position) start_position = 0;
				if(!merge) merge = false; else merge = true;
				if(!loop) loop = false; else loop = true;
				if(!mousewheel) mousewheel = false; else mousewheel = true;
				if(speed != ''){
					autoplay = true;
					autoplaytimeout = parseInt(speed, 10);
				}
				else autoplay = false;
				// Navigation
				if(nav) navigation = true;
				if(pag) pagination = true;
				var prev_text = '<i class="la la-long-arrow-left" aria-hidden="true"></i>';
				var next_text = '<i class="la la-long-arrow-right" aria-hidden="true"></i>';
				if(text_prev) prev_text = text_prev;
				if(text_next) next_text = text_next;
				if(itemres == '' || itemres === undefined){
					if(item == '1') itemres = '0:1,480:1,768:1,1200:1';
					if(item == '2') itemres = '0:1,480:1,768:2,1200:2';
					if(item == '3') itemres = '0:1,480:2,768:2,992:3';
					if(item == '4') itemres = '0:1,480:2,840:3,1200:4';
					if(item >= '5') itemres = '0:1,480:2,768:3,1024:4,1200:'+item;
				}
				itemres = itemres.split(',');
				var responsive = {};
				var i;
				for (i = 0; i < itemres.length; i++) { 
				    itemres[i] = itemres[i].split(':');
				    var res_dv = {};
				    res_dv.items = parseInt(itemres[i][1], 10);
				    responsive[itemres[i][0]] = res_dv;
				}
				seff.owlCarousel({
					items: parseInt(item, 10),
				    margin: parseInt(margin, 10),
				    loop: loop,
				    stagePadding: parseInt(stage_padding, 10),
				    startPosition: parseInt(start_position, 10),
				    nav:navigation,
				    navText: [prev_text,next_text],
				    responsive: responsive,
				    autoplay: autoplay,
				    autoplayTimeout: autoplaytimeout,
				    animateOut: animation_out,
				    animateIn: animation_in,
				    dots: pagination,
                    onTranslate: beforeAction,
				    onInitialize:background,
				    rtl: rtl,
				    rewind: true,
				});
				if(mousewheel){
					seff.on('mousewheel', '.owl-stage', function (e) {
					    if (e.deltaY>0) {
					        seff.trigger('next.owl');
					    } else {
					        seff.trigger('prev.owl');
					    }
					    e.preventDefault();
					});
				}
			});			
		}
    }
    function  element_menu_vertial(){
        // Header vertial click
        $('.toggle-mobile-header-vertial').on('click',function(event){
            event.preventDefault();
            $(this).parent('.header-page').toggleClass('active');
        });
        if($('.main-nav-vertial').length>0){
            $('.main-nav-vertial li.menu-item-has-children,.main-nav-vertial li.has-mega-menu').append('<span class="btn-toggle-menu-vertial"></span>');

            $('.main-nav-vertial').on('click','.btn-toggle-menu-vertial',function(event){
                $(this).toggleClass('active');
                $(this).prev().stop(true,false).slideToggle('fast');
            });
            $('.main-nav-vertial').on('click','.menu-item > a[href="#"]',function(event){
                event.preventDefault();
                $(this).toggleClass('active');
                $(this).next().stop(true,false).slideToggle('fast');
            });
        }else {
            return false;
        }

    }
    function height_menu_vertial(){
        if($('.js-height-menu-vertial').length > 0){
            var height_menu_next = $('.js-height-menu-vertial').next().height();
            var height_menu_prev = $('.js-height-menu-vertial').prev().height();

            var height_menu = $(window).height() - (height_menu_next + height_menu_prev);
            height_menu = height_menu/$(window).height()*100;
            $('.js-height-menu-vertial').css('min-height',height_menu+'vh');
        }
    }
    function add_cart_sticky(){
        if($('.sticky-addcart').length > 0){
            $('.sticky-addcart').each(function(){
                var self = $(this);
                var cart = self.prev().find('form.cart');
                var st = $(window).scrollTop();
                var ot = cart.offset().top;
                var stop = $('#footer').offset().top - $(window).height();
                if( st > ot && st < stop){
                    self.addClass('active');
                }else{
                    self.removeClass('active');
                }
            });
        }
    }
    function gallery_fixed(){
        if($('.detail-gallery-sticky').length > 0){
            $('.detail-gallery-sticky').each(function(){
                var self = $(this);
                var info = self.parents('.product-detail').find('.detail-info');
                if($(window).width()>767){
                    if($('.header-fixed').hasClass('active')){
                        self.parents('.product-detail').addClass('detail-on-sticky-menu');
                    }else{
                        self.parents('.product-detail').removeClass('detail-on-sticky-menu');
                    }
                    var st = $(window).scrollTop();
                    var ot = self.offset().top;
                    var sh = self.height();
                    var dh = info.height();
                    var stop = sh - dh;
                    var top = st - ot;
                    if(st < ot){
                        info.css('top',0);
                    }
                    if(st > ot && st < ot+sh-dh){
                        info.css('top',top+'px');
                    }
                    if(st > ot+sh-dh){
                        info.css('top',stop+'px');
                    }
                }else{
                    info.css('top',0);
                }
            });
        }
    }
    function tab_accordion_sticky(){
        if($('.tab-accordion-info-sticky').length > 0){
            $('.tab-accordion-info-sticky').each(function(){
                var self = $(this);
                var gallery = self.parents('.product-detail').find('.detail-gallery');
                if($(window).width()>767){
                    if($('.header-fixed').hasClass('active')){
                        self.parents('.product-detail').addClass('tab-accordion-sticky-menu');
                    }else{
                        self.parents('.product-detail').removeClass('tab-accordion-sticky-menu');
                    }
                    var st = $(window).scrollTop();
                    var ot = self.offset().top;
                    var sh = self.height();
                    var dh = gallery.height();
                    var stop = sh - dh;
                    var top = st - ot;
                    if(st < ot){
                        gallery.css('top',0);
                    }
                    if(st > ot && st < ot+sh-dh){
                        gallery.css('top',top+'px');
                    }
                    if(st > ot+sh-dh){
                        gallery.css('top',stop+'px');
                    }
                }else{
                    gallery.css('top',0);
                }
            });
        }
    }
    /************ END FUNCTION **************/  
	$(document).ready(function(){
		//Menu Responsive 
		letter_popup();
		parallax_slider();
		fix_click_menu();
		rep_menu();
		s7upf_qty_click();
		detail_gallery();
		tool_panel();
        element_menu_vertial();
        height_menu_vertial();
        gallery_fixed();
        tab_accordion_sticky();
        $(".product360-detail-poup").on('click',function(event) {
            event.preventDefault();
            $('body #product360_css').addClass('active-poup');
            setTimeout(function() {
                $('#product360_html').j360();
            },500);
            setTimeout(function() {
                $('body #product360_css').addClass('show-poup');
            },1000);
            return false;
        });
        $("#product360_css .close").on('click',function() {
            $(this).parent().removeClass('active-poup');
            $(this).parent().removeClass('show-poup');
        });
        if($('a.product-thumb-link').length>0 && $(window).width()<1170){
            $( "a.product-thumb-link" ).attr( "onclick", "return false;" );
        }
        //Fix RTL style zoom1, zoom2 of product
        if($('.rtl').length > 0){
            var right_css = $('.zoom-style1 .mid,.zoom-style2 .mid').outerWidth();
            if(right_css >0){
                $('.product-detail>.row>div:first-child,.detail-gallery ').on('hover',function () {
                    $('body .zoomWindowContainer>div').css({'right':right_css+'px','float':'left'});
                })
            }

        }
        if($('.detail-product-tabs').hasClass('tab-product-vertical_mobi')){
            if($(window).width()<=991){

                $('.detail-product-tabs').removeClass('tab-product-vertical');
                $('.detail-product-tabs').addClass('tab-product-horizontal');

            }else {

                $('.detail-product-tabs').removeClass('tab-product-horizontal');
                $('.detail-product-tabs').addClass('tab-product-vertical');
            }
        }
		//Fix width mega-menu nho hon window (Sua lai cach nhap width menu bo px)
        if($('.main-nav li.has-mega-menu .mega-menu').length>0 && $(window).width()>1170){
            var w_container = $('.container').outerWidth();
            $('.main-nav li.has-mega-menu .mega-menu').each(function () {
                var w_mega_menu_data = $(this).attr('data-width');
                if( $(window).width() < w_mega_menu_data){
                    $(this).css('width',w_container+'px');
                }else{
                    $(this).css('width',w_mega_menu_data+'px');
                }
            })
        }

        if($('.pricing-table-sytle3').length>0){
            $('.pricing-table-sytle3 .item-pricing').each(function(){
				var w_h3 = $(this).find('h3').width();
				var w_price = $(this).find('.price-unit').width();
				var w_title = $(this).find('.title-pricing').width()+10;
				var w_before = w_h3 -(w_price+w_title+10);
                if($('.rtl').length > 0){
                    $(this).find('.dot-pricing').css('margin-right',w_title);
				}else{
                    $(this).find('.dot-pricing').css('margin-left',w_title);
				}

                $(this).find('.dot-pricing').css('width',w_before);
			})
        }

        if($('.slider-center-slick').length>0){
            var rtl= false;
            if($('.rtl').length > 0){
                rtl= true;
            }

            $('.slider-center-slick ').each(function(){
                $(this).slick({
                    centerMode: true,
                    rtl: rtl,
                    centerPadding: '0px',
                    slidesToShow: 3,
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                arrows: true,
                                centerMode: true,
                                centerPadding: '0px',
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 769,
                            settings: {
                                arrows: false,
                                centerMode: true,
                                centerPadding: '0px',
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            });
        }
        //Final Countdown
        if($('.final-countdown').length>0){
            $('.final-countdown').each(function(){
                var self = $(this);
                var finalDate = self.data('countdown');
                self.countdown(finalDate, function(event) {
                    self.html(event.strftime(''
                        +'<div class="clock day"><strong class="number">%D</strong><span class="text">DAYS</span></div>'
                        +'<div class="clock hour"><strong class="number">%H</strong><span class="text">HUR</span></div>'
                        +'<div class="clock min"><strong class="number">%M</strong><span class="text">MIN</span></div>'
                        +'<div class="clock sec"><strong class="number">%S</strong><span class="text">SEC</span></div>'
                    ));
                });
            });
        }
        if($('.mega-menu').length>0){
            var $url = window.location.href;
            $('.mega-menu .mega-list-cat a').each(function () {
                var $url_mega_menu = $(this).attr('href');
                if($url_mega_menu === $url){
                    $(this).addClass('active');
                    $(this).parents('.has-mega-menu').addClass('mega-menu-current');
                }
            })
        }
        $(".video-product-detail-poup").on('click',function() {
            $.fancybox({
                'padding'		: 0,
                'autoScale'		: true,
                'transitionIn'	: 'none',
                'transitionOut'	: 'none',
                'width'		: 800,
                'height'		: 500,
                'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
                'type'			: 'swf',
                'swf'			: {
                    'wmode'		: 'transparent',
                    'allowfullscreen'	: 'true'
                }

            });
            return false;
        });
        if($('.fancybox').length>0){
            $('.fancybox').fancybox();
        }
        //Accordion product
        $('.tab-accordion-info-sticky').bind('change',tab_accordion_sticky());
        if($('.tab-product-accordion-js').length>0){
            $('.tab-product-accordion-js').each(function () {
                var active = $(this).attr('data-active');
                $(this).accordion(
                    {
                        heightStyle: "content",
                        active: parseInt(active-1),
                        icons: { "header": "la la-plus-circle", "activeHeader": "la la-minus-circle" }
                    }

                );
            })

        }
        if($('.list-5-item,.list-6-item,.list-7-item,.list-8-item,.list-9-item,.list-10-item').length>0){
            $('.list-5-item,.list-6-item,.list-7-item,.list-8-item,.list-9-item,.list-10-item').parents('.product-grid-view').addClass('is-product-col-5-10');
        }

        if($('.attribute_data-custom').length>0){
            $('.attribute_data-custom .attribute-custom').on('click',function () {
                var image = $(this).attr('data-image');
                var image2 = $(this).attr('data-image2');

                if($(this).hasClass('active-att')){
                    var image_goc = $(this).parents('.attribute_data-custom').attr('data-imggoc');
                    var image_goc2 = $(this).parents('.attribute_data-custom').attr('data-imggoc2');
                    $(this).parents('.item-product').find('.product-thumb a img:first-child').attr('src',image_goc);
                    if(image_goc2){
                        $(this).parents('.item-product').find('.product-thumb a img:last-child').attr('src',image_goc2);
                    }
                    $(this).removeClass('active-att');
                }else{
                    $(this).parents('.item-product').find('.product-thumb a img:first-child').attr('src',image);
                    if(image2){
                        $(this).parents('.item-product').find('.product-thumb a img:last-child').attr('src',image2);
                    }

                    $('.attribute_data-custom .attribute-custom').removeClass('active-att');
                    $(this).toggleClass('active-att');
                }
            })
        }
        if($('.widget_archive>select').length>0){
            $('.widget_archive>select').each(function(){
                $(this).after('<i class="fa fa-caret-down"></i>');
                $(this).parent().css('position','relative');
            })
        }
        //Fix width mini cart full box
        if($('.mini-cart-box.dropdown-box .dropdown-list').length>0 && $(window).width()<=480){
            $('.mini-cart-box .left-dropdown').css({'right':'0px'});
            $('.mini-cart-box .right-dropdown').css({'left':'0px'});
            setTimeout(function() {
                var left = $('.mini-cart-box .dropdown-list').offset().left;
                var right = ($(window).width() - (left +  $('.mini-cart-box .dropdown-list').outerWidth()));
                if(left<0)left=right;
                $('.mini-cart-box .right-dropdown').css({'left':'-'+left+'px'});
                $('.mini-cart-box .left-dropdown').css({'right':'-'+left+'px'});
            },500)

        }
		// Filter click
		$('.btn-filter').on('click',function(){
			$(this).parents('.filter-product').toggleClass('active');
			return false;
		})
		//Filter Price
		if($('.range-filter').length>0){
			$('.range-filter').each(function(){
				var self = $(this);
				var min_price = Number(self.find('.slider-range').attr( 'data-min' ));
				var max_price = Number(self.find('.slider-range').attr( 'data-max' ));
				self.find( ".slider-range" ).slider({
					range: true,
					min: min_price,
					max: max_price,
					values: [ min_price, max_price ],
					slide: function( event, ui ) {
						self.find( '.element-get-min' ).html(ui.values[ 0 ]);
						self.find( '.element-get-max' ).html(ui.values[ 1 ]);
					}
				});
			});
		}
		//fix row bg
		$('.fix-row-bg').each(function(){
			var row_class = $(this).attr('class');
			row_class = row_class.replace('vc_row wpb_row','');
			$(this).removeClass(row_class);
			$(this).removeClass('fix-row-bg');
			$(this).wrap('<div class="wrap-vc-row'+row_class+'"></div>');
		})
		//Cat search
		$('.select-cat-search').on('click',function(event){
			event.preventDefault();
			$(this).parents('ul').find('li').removeClass('active');
			$(this).parent().addClass('active');
			var x = $(this).attr('data-filter');
			if(x){
				x = x.replace('.','');
				$('.cat-value').val(x);
			}
			else $('.cat-value').val('');
			$('.current-search-cat').text($(this).text());
		});
		// aside-box cart
		$('.close-minicart').on('click',function(event){
			$('body').removeClass('overlay');
			$('.mini-cart-content').removeClass('active');
		});
		$('.mini-cart-box.aside-box .mini-cart-link').on('click',function(event){
			event.preventDefault();
			event.stopPropagation();
			$('body').addClass('overlay');
			$(this).next().addClass('active');
		});
		//Count item cart
        if($(".get-cart-number").length){
            var count_cart_item = $(".get-cart-number").val();
            $(".set-cart-number").html(count_cart_item);
        }

		//Fix mailchimp
        $('.sv-mailchimp-form').each(function(){
            var placeholder = $(this).attr('data-placeholder');
            var submit = $(this).attr('data-submit');
            if(placeholder) $(this).find('input[name="EMAIL"]').attr('placeholder',placeholder);
            if(submit) $(this).find('input[type="submit"]').val(submit);
        })      
        //Back To Top
		$('.scroll-top').on('click',function(event){
			event.preventDefault();
			$('html, body').animate({scrollTop:0}, 'slow');
		});	

        if($(window).width()>1170){
            $('.toggle-desktop-menu').on('click',function () {
                event.preventDefault();

                $(this).parent().toggleClass('active-show');
                $(this).parent().find('.menu-main-menu').animate({
                    width: "toggle"
                });
                if($('.rtl').length > 0){
                    if($('.mega-menu').length>0){
                        var margin_right = ($(window).width() - ($('.mega-menu').offset().left+$('.mega-menu').outerWidth()));
                        if(margin_right>0){
                            $('.mega-menu').css('margin-right','-'+margin_right+'px');
                        }
                    }
                }else{
                    if($('.mega-menu').length>0){
                        var margin_left = $('.mega-menu').offset().left;
                        if(margin_left>0){
                            $('.mega-menu').css('margin-left','-'+margin_left+'px');
                        }
                    }
                }

            })
        }
	});

	$(window).load(function(){
		s7upf_owl_slider();
		s7upf_all_slider();
		fix_css_append();
		login_popup();

        if($('.parallax-background').length>0){
            $('.parallax-background').each(function(){
                $(this).parallaxBackground();
                var self = $(this);
                setTimeout(function() {
                    var bn_height = self.find('img').height();
                    self.parents('.banner-advs').css('height',bn_height);

                },500);


            });
        }
        if($('.border-vien').length>0){
            $(".border-vien").each(function(){
                var height = $(this).parents('.item-product-grid-style4').find('.hover-desr-cart4').height()+30;
                var height_desc_product = $(this).parents('.item-product-grid-style4').find('.hover-desr-cart4 .product-desc').height();
                var height_desc = $(this).parents('.item-product-grid-style4').find('.hover-desr-cart4 .hover-desr4').height();

                $(this).css('bottom','-'+height+'px');
                if(height_desc_product>height_desc){
                    $(this).parents('.item-product-grid-style4').find('.hover-desr-cart4 .hover-desr4').addClass('hover-desr-click');
                    $(this).parents('.item-product-grid-style4').find('.hover-desr-cart4 .more-details-btn').on('click',function () {
                        $(this).parents('.item-product-grid-style4').find('.hover-desr-cart4 .hover-desr4').addClass('hover-desr-click_on');
                        var height = $(this).parents('.item-product-grid-style4').find('.hover-desr-cart4').height()+30;
                        $(this).parents('.item-product-grid-style4').find('.border-vien').css('bottom','-'+height+'px');
                    })
                }
            })
        }
        if($('.hover-desr-list').length>0){
            $(".hover-desr-list").each(function(){
                var height = $(this).find('.product-desc').height();
                if(height>=136){
                    $(this).addClass('hover-desr-list-active');
                }
                $(this).find('.more-details-btn').on('click',function () {
                    $(this).parents('.hover-desr-list').addClass('hover-desr-list_on');
                    $(this).parents('.hover-desr-list').css('max-height',height+'px');
                })
            })
        }
		//List Item Masonry
		if($('.blog-grid-view.list-masonry .list-post-wrap').length>0){
			var $content = $('.blog-grid-view.list-masonry .list-post-wrap');
			$content.imagesLoaded( function() {
			    $content.masonry();
			});
		}
		if($('.product-grid-view.list-masonry .list-product-wrap').length>0){
			var $content2 = $('.product-grid-view.list-masonry .list-product-wrap');
			$content2.imagesLoaded( function() {
			    $content2.masonry();
			});
		}
		//Pre Load
		$('body').removeClass('preload');
		// Fix height slider
		$('.banner-slider .banner-info').each(function(){
			if($(this).find('.slider-content-text').length > 0){
				var height_content = $(this).find('.slider-content-text')["0"].clientHeight;
				$(this).css('height',height_content);
			}
		})
		// menu fixed onload
		$("#header").css('min-height','');
        if($(window).width()>1024){
            $("#header").css('min-height',$("#header").height());
            fixed_header();
        }
        else{
            $("#header").css('min-height','');
        }
        //menu fix
        if($(window).width() > 1170){
            var c_width = $(window).width();
            $('nav.main-nav ul ul ul.sub-menu').each(function(){
                var left = $(this).offset().left;
                if(c_width - left < 200){
                    $(this).css({"left": "-100%"})
                }
                if(left < 200){
                    $(this).css({"left": "100%"})
                }
            })
        }
        //Menu mobi set left
        if($(window).width()<=1170 && $('nav.main-nav').length>0){
            var check_drive =15;
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
               check_drive=0;
            }
            var left =($(window).width() - ( $('nav.main-nav').offset().left +  $('nav.main-nav').outerWidth()));
            $('nav.main-nav .menu-main-menu').css({'right':-(left+check_drive)});

        }else  $('nav.main-nav .menu-main-menu').css({'right':''});
		//End menu mobi set left
        if($('.detail-product-tabs').length>0){
            $( ".detail-product-tabs .product-tab-content .tab-pane" ).not(':first-child').removeClass( "active");
        }
        auto_width_megamenu();
    });// End load

	/* ---------------------------------------------
     Scripts resize
     --------------------------------------------- */
    var w_width = $(window).width();
    $(window).resize(function(){
    	var crWidth = $(window).width();
    	if(crWidth != w_width) auto_width_megamenu();
    	fix_click_menu();
        gallery_fixed();
        tab_accordion_sticky();
        detail_gallery();
        if($(window).width() > 1170){
            var c_width = $(window).width();
            $('nav.main-nav ul ul ul.sub-menu').each(function(){
                var left = $(this).offset().left;
                if(c_width - left < 200){
                    $(this).css({"left": "-100%"})
                }
                if(left < 200){
                    $(this).css({"left": "100%"})
                }
            })
        }
        if($('.pricing-table-sytle3').length>0){
            $('.pricing-table-sytle3 .item-pricing').each(function(){
                var w_h3 = $(this).find('h3').width();
                var w_price = $(this).find('.price-unit').width();
                var w_title = $(this).find('.title-pricing').width()+10;
                var w_before = w_h3 -(w_price+w_title+10);
                if($('.rtl').length > 0){
                    $(this).find('.dot-pricing').css('margin-right',w_title);
                }else{
                    $(this).find('.dot-pricing').css('margin-left',w_title);
                }

                $(this).find('.dot-pricing').css('width',w_before);
            })
        }

        //Fix RTL style zoom1, zoom2 of product
        if($('.rtl').length > 0){
            var right_css = $('.zoom-style1 .mid,.zoom-style2 .mid').outerWidth();
            if(right_css >0){
                $('.product-detail>.row>div:first-child,.detail-gallery ').on('hover',function () {
                    $('body .zoomWindowContainer>div').css({'right':right_css+'px','float':'left'});
                })
            }

        }
        if($('.detail-product-tabs').hasClass('tab-product-vertical_mobi')){
            if($(window).width()<=991){

                $('.detail-product-tabs').removeClass('tab-product-vertical');
                $('.detail-product-tabs').addClass('tab-product-horizontal');

            }else {

                $('.detail-product-tabs').removeClass('tab-product-horizontal');
                $('.detail-product-tabs').addClass('tab-product-vertical');
            }
        }
        //Fix width mega-menu nho hon window (Sua lai cach nhap width menu bo px
        if($('.main-nav li.has-mega-menu .mega-menu').length>0 && $(window).width()>1170){
            var w_container = $('.container').outerWidth();
            $('.main-nav li.has-mega-menu .mega-menu').each(function () {
                var w_mega_menu_data = $(this).attr('data-width');
                if( $(window).width() < w_mega_menu_data){
                    $(this).css('width',w_container+'px');
                }else{
                    $(this).css('width',w_mega_menu_data+'px');
                }
            })
        }
		//Fix width mini cart full box
        if($('.mini-cart-box.dropdown-box  .dropdown-list').length>0){
            if($(window).width()<=480){
                $('.mini-cart-box .left-dropdown').css({'right':'0px'});
                $('.mini-cart-box .right-dropdown').css({'left':'0px'});
                setTimeout(function() {
                    var left = $('.mini-cart-box .dropdown-list').offset().left;
                    var right = ($(window).width() - (left +  $('.mini-cart-box .dropdown-list').outerWidth()));
                    if(left<0)left=right;
                    $('.mini-cart-box .right-dropdown').css({'left':'-'+left+'px'});
                    $('.mini-cart-box .left-dropdown').css({'right':'-'+left+'px'});
                },500)

            }else{
                setTimeout(function() {
					$('.mini-cart-box .left-dropdown').css({'right':''});
					$('.mini-cart-box .right-dropdown').css({'left':''});
                },500)

            }
        }
    	if($('#dialog').length > 0){
	    	// popup resize
			var id = '#dialog';	
			//Get the screen height and width
			var maskHeight = $(document).height();
			var maskWidth = $(window).width();
		
			//Set heigth and width to mask to fill up the whole screen
			$('#mask').css({'width':maskWidth,'height':maskHeight});
		
			//Get the window height and width
			var winH = $(window).height();
			var winW = $(window).width();
	              
			//Set the popup window to center
			$(id).css('top',  winH/2-$(id).height()/2);
			$(id).css('left', winW/2-$(id).width()/2);
		}
        $("#header").css('min-height','');

        //Menu mobi set left
        if($(window).width()<=1170 && $('nav.main-nav').length>0){
            var check_drive =15;
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                check_drive=0;
            }
            setTimeout(function() {
                var left =($(window).width() - ( $('nav.main-nav').offset().left +  $('nav.main-nav').outerWidth()));
                $('nav.main-nav .menu-main-menu').css({'right':-(left+check_drive)});
            },300)
        }else  $('nav.main-nav .menu-main-menu').css({'right':''});
        //End menu mobi set left
    });

	jQuery(window).scroll(function(){
		fixed_header();
		parallax_slider();
        add_cart_sticky();
        gallery_fixed();
        tab_accordion_sticky();

		//Menu mobi set left
        if($(window).width()<=1170 && $('nav.main-nav').length>0){
            var check_drive =15;
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                check_drive=0;
            }
            var left =($(window).width() - ( $('nav.main-nav').offset().left +  $('nav.main-nav').outerWidth()));
            $('nav.main-nav .menu-main-menu').css({'right':-(left+check_drive)});

        }else  $('nav.main-nav .menu-main-menu').css({'right':''});
        //End menu mobi set left

        if($(window).width()>1170){
            $("#header").css('min-height',$("#header").height());
            fixed_header();
        }
        else{
            $("#header").css('min-height',$("#header").height());
            fixed_header();
        }
		if($(window).width()>1024){
            $("#header").css('min-height',$("#header").height());
            fixed_header();
        }
        else{
            $("#header").css('min-height','');
        }
		//Scroll Top
		if($(this).scrollTop()>$(this).height()){
			$('.scroll-top').addClass('active');
		}else{
			$('.scroll-top').removeClass('active');
		}
	});// End Scroll

	$.fn.tawcvs_variation_swatches_form = function () {
        return this.each( function() {
            var $form = $( this ),
                clicked = null,
                selected = [];

            $form
                .addClass( 'swatches-support' )
                .on( 'click', '.swatch', function ( e ) {
                    e.preventDefault();
                    var $el = $( this ),
                        $select = $el.closest( '.value' ).find( 'select' ),
                        attribute_name = $select.data( 'attribute_name' ) || $select.attr( 'name' ),
                        value = $el.data( 'value' );

                    $select.trigger( 'focusin' );

                    // Check if this combination is available
                    if ( ! $select.find( 'option[value="' + value + '"]' ).length ) {
                        $el.siblings( '.swatch' ).removeClass( 'selected' );
                        $select.val( '' ).change();
                        $form.trigger( 'tawcvs_no_matching_variations', [$el] );
                        return;
                    }

                    clicked = attribute_name;

                    if ( selected.indexOf( attribute_name ) === -1 ) {
                        selected.push(attribute_name);
                    }

                    if ( $el.hasClass( 'selected' ) ) {
                        $select.val( '' );
                        $el.removeClass( 'selected' );

                        delete selected[selected.indexOf(attribute_name)];
                    } else {
                        $el.addClass( 'selected' ).siblings( '.selected' ).removeClass( 'selected' );
                        $select.val( value );
                    }

                    $select.change();
                } )
                .on( 'click', '.reset_variations', function () {
                    $( this ).closest( '.variations_form' ).find( '.swatch.selected' ).removeClass( 'selected' );
                    selected = [];
                } )
                .on( 'tawcvs_no_matching_variations', function() {
                    window.alert( wc_add_to_cart_variation_params.i18n_no_matching_variations_text );
                } );
        } );
    };

    $( function () {
        $( '.variations_form' ).tawcvs_variation_swatches_form();
        $( document.body ).trigger( 'tawcvs_initialized' );
    } );

})(jQuery);