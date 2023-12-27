jQuery(document).ready(function($) {
	var waitForFinalEvent = (function () {
		var timers = {};
		return function (callback, ms, uniqueId) {
			if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
			if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
			timers[uniqueId] = setTimeout(callback, ms);
			};
	})();
	
	var setCookie = function(name, value, hours) {
		var expires, date;
	    if (hours) {
	        date = new Date();
	        date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
	        expires = "; expires=" + date.toGMTString();
	    } else {
	    	expires = "";
	    }
	    document.cookie = name + "=" + value + expires + "; path=/";
	};
	
	var getCookie = function(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	    }
	    return null;
	};
	
	(function() {
		var html = $("html");
		
		setTimeout(function() {
			html.addClass("qw-animate");
		}, 1);
		
//		var startScroll = null;
//		$(window).scroll(function() {
//			if (null === startScroll) {
//				startScroll = $(window).scrollTop();
//			}
//			
//			waitForFinalEvent(function() {
//				html.toggleClass("qw-scrolled-up", startScroll >= $(window).scrollTop());
//				startScroll = null;
//			}, 150, 'scroll-body');
//		});
	})();
	
	(function() {
		var jqElemBtnMarkArticle = $(".qw-btn-mark-article");
		if (jqElemBtnMarkArticle.length === 0) return;
		
		(function() {
			var MarkArticle = function(jqElem) {
				this.jqElem = jqElem;
				
				this.markUrl = jqElem.data("mark-url");
				this.textMarked = jqElem.data("text-marked");
				this.unmarkUrl = jqElem.data("unmark-url");
				this.textUnmarked = jqElem.data("text-umarked");
				this.jqElemSpan = jqElem.find("span:first");
				
				(function(that) {
					jqElem.click(function(e) {
						e.preventDefault();
						jqElem.addClass("disabled").prop("disabled", true);
						$.getJSON(that.getUrl(), function(data) {
							if (data.hasOwnProperty("status") && data['status'] === 'ok') {
								that.jqElemSpan.text(that.getText());
								if (that.isMarked()) {
									jqElem.removeClass("active").addClass("inactive");
								} else {
									jqElem.removeClass("inactive").addClass("active");
								}
								jqElem.removeClass("disabled").prop("disabled", false);
								return;
							}
							
							that.handleError();
						}).fail(function() {
							that.handleError();
						});
					});
				}).call(this, this);
			};
			
			MarkArticle.prototype.getText = function() {
				return this.isMarked() ? this.textMarked : this.textUnmarked;
			};
			
			MarkArticle.prototype.handleError = function() {
				window.location.href = this.jqElem.attr("href");
			};
			
			MarkArticle.prototype.getUrl = function(){
				return this.isMarked() ? this.unmarkUrl : this.markUrl;
			}
			
			MarkArticle.prototype.isMarked = function() {
				return this.jqElem.hasClass("active");
			}
			
			new MarkArticle(jqElemBtnMarkArticle);
		})();
	})();
	
	(function() {
        var jqElemExpandNav = $(".expand-nav");
        if (0 === jqElemExpandNav) return;
       
        ExpandNavItem = function(jqElemLi, jqElemNav) {
            this.isOpen = false;
            this.jqElem = jqElemLi;
            this.jqElemChildUl = this.jqElem.children("ul:first").hide();
            this.jqElemA = this.jqElem.children("a:first").css({
                "position": "relative"
            });
            this.jqElemToggler = $("<span/>").appendTo(this.jqElemA);
            this.jqElemToggler.addClass(jqElemNav.data("child-toggler-class"));
            
            var _that = this;
            if (this.jqElem.hasClass("open") || (this.jqElemChildUl.find('li.active').length > 0)) {
                this.openSubNavi();
            };
           
            this.jqElemToggler.click(function(e){
                e.preventDefault();
                if (_that.isOpen) {
                    _that.closeSubNavi();
                } else {
                    _that.openSubNavi();
                }
            });
        };
       
        ExpandNavItem.prototype.openSubNavi = function(instantly) {
            if (instantly) {
                this.jqElemChildUl.stop(true, true).show();
            } else {
                this.jqElemChildUl.stop(true, true).slideDown();
            }
            this.jqElemToggler.addClass("is-open");
            this.isOpen = true;
        };
        
        ExpandNavItem.prototype.closeSubNavi = function(instantly) {
            if (instantly) {
                this.jqElemChildUl.stop(true, true).hide();
            } else {
                this.jqElemChildUl.stop(true, true).slideUp();
            }
            this.jqElemToggler.removeClass("is-open");
            this.isOpen = false;
        };
       
        ExpandNav = function(jqElemNav) {
            this.jqElem = jqElemNav.hide();
            this.jqElemToggler = $(this.jqElem.data('toggler-ref'));
            this.jqElemLiHasChildren = this.jqElem.find(".has-children");
            var _that = this;
           
            this.jqElemToggler.click(function(e) {
            	e.preventDefault();
            	_that.jqElem.slideToggle("fast");
            	_that.jqElemToggler.toggleClass("open");
            });
            
            this.jqElemLiHasChildren.each(function() {
                var expandLimit = _that.jqElem.data("expand-limit") || null;
                if (expandLimit && $(this).hasClass(expandLimit)) return false;
                new ExpandNavItem($(this), jqElemNav);
            });
        };
       
        new ExpandNav(jqElemExpandNav);
    })();
	
//	(function() {
//		var jqElemFloatingLabels = $(".qw-floating-label");
//		
//		if (jqElemFloatingLabels.length === 0) return;
//		
//		FloatigLabel = function(jqElem) {
//			this.jqElem = jqElem;
//			this.input = jqElem.next();
//			this.parent = jqElem.parent().addClass("qw-floating-label-holder");
//			
//			(function(_obj) {
//				if (_obj.input.val() !== '') {
//					_obj.jqElem.addClass(FloatigLabel.STATE_CLASSNAME);
//				}
//				_obj.input.on("focus", function() {
//					_obj.jqElem.addClass(FloatigLabel.STATE_CLASSNAME);
//				});
//				
//				_obj.input.on("focusout", function() {
//					if ($(this).val() == '') {
//						_obj.jqElem.removeClass(FloatigLabel.STATE_CLASSNAME);
//					}
//				});
//			}).call(this, this);
//		}
//		
//		FloatigLabel.STATE_CLASSNAME = "qw-float-label";
//		
//		jqElemFloatingLabels.each(function() {
//			new FloatigLabel($(this));
//		});
//	})();
	
	(function() {
    var jqElemFloatingLabels = $(".qw-floating-label");
    if (jqElemFloatingLabels.length === 0)
        return;
    var FloatingLabel = (function () {
        function FloatingLabel(elem) {
            this.elem = elem;
            this.elemInput = this.determineControlElement();
            this.parent = elem.parent().addClass("qw-floating-label-holder");
            (function (_obj) {
                _obj.elem.click(function () {
                    if (!_obj.elem.hasClass(FloatingLabel.STATE_CLASSNAME)) {
                        _obj.activate();
                        _obj.focusElem();
                    }
                    ;
                });
                _obj.elemInput.click(function () {
                    if (_obj.elemInput.is("div")) {
                        if (_obj.elemInput.hasClass("additional-input-style")) {
                            _obj.deactivate();
                        }
                        else {
                            _obj.activate();
                        }
                    }
                });
                if (_obj.elemInput.is("div")) {
                    _obj.elemInput.parent().on('hide.additional', function () {
                        _obj.deactivate();
                    });
                }
                if (_obj.hasContent()) {
                    _obj.activate();
                }
                _obj.elemInput.on("focus", function () {
                    _obj.activate();
                });
                _obj.elemInput.on("focusout", function () {
                    _obj.deactivate();
                });
                _obj.elemInput.on("change", function () {
                    if (!_obj.hasContent()) {
                        _obj.deactivate();
                    }
                    else {
                        _obj.activate();
                    }
                });
            }).call(this, this);
        }
        FloatingLabel.prototype.hasContent = function () {
            if (this.elemInput.is("div, p")) {
                return this.elemInput.text().trim().length !== 0;
            }
            if (this.elemInput.is("select")) {
                return this.elemInput.find("option:selected").text().trim().length !== 0;
            }
            
            return this.elemInput.val().trim().length !== 0;
        };
        FloatingLabel.prototype.deactivate = function () {
            if (this.hasContent())
                return;
            this.elem.removeClass(FloatingLabel.STATE_CLASSNAME);
            this.elemInput.removeClass(FloatingLabel.STATE_CLASSNAME_INPUT);
        };
        FloatingLabel.prototype.activate = function () {
            this.elem.addClass(FloatingLabel.STATE_CLASSNAME);
            this.elemInput.addClass(FloatingLabel.STATE_CLASSNAME_INPUT);
        };
        FloatingLabel.prototype.focusElem = function () {
            if (this.elemInput.is("input")) {
                this.elemInput.focus();
            }
        };
        FloatingLabel.prototype.determineControlElement = function () {
            var input = this.elem.siblings('.form-control:first, .form-control-plaintext:first');
            if (input.length === 0) {
                input = this.elem.next().find(".form-control:first, .form-control-plaintext:first");
            }
            return input;
        };
        FloatingLabel.STATE_CLASSNAME = 'qw-float-label';
        FloatingLabel.STATE_CLASSNAME_INPUT = 'float-input';
        return FloatingLabel;
    }());
    jqElemFloatingLabels.each(function () {
        new FloatingLabel($(this));
    });
	})();
	
	(function() {
		var jqElemsFullScreenTrigger = $('.qw-doc-fullscreen');
		if (jqElemsFullScreenTrigger.length === 0) {
			return;
		}
		
		var FullScreenDocument = function(elem) {
			this.jqElem = elem;
			this.documentElement = document.documentElement;
			this.isOpen = false;
			that = this;
			this.jqElemIconOpend = this.jqElem.find(".icon-fullscreen-on:first");
			this.jqElemIconClosed = this.jqElem.find(".icon-fullscreen-off:first");
			
			document.addEventListener("fullscreenchange", function() {
				// checkes if fullscreen is enabled
				if (document.fullscreenElement !== null) {
					// entering fullscreen
					that.isOpen = true;
					that.jqElemIconOpend.show();
					that.jqElemIconClosed.hide();
				} else {
					// leaving fullscreen
					that.isOpen = false;
					that.jqElemIconOpend.hide();
					that.jqElemIconClosed.show();
				}
			});
			
			this.jqElem.click(function() {
				if (that.isOpen) {
					that.closeFullscreen();
				} else {
					that.openFullscreen();
				}
			});
		}
		
		FullScreenDocument.prototype.openFullscreen = function() {
			 if (this.documentElement.requestFullscreen) {
				 this.documentElement.requestFullscreen();
				  } else if (this.documentElement.mozRequestFullScreen) { /* Firefox */
					  this.documentElement.mozRequestFullScreen();
				  } else if (this.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
					  this.documentElement.webkitRequestFullscreen();
				  } else if (this.documentElement.msRequestFullscreen) { /* IE/Edge */
					  this.documentElement.msRequestFullscreen();
				  }
		}
		FullScreenDocument.prototype.closeFullscreen = function() {
			if (document.fullscreenElement ||
					document.webkitFullscreenElement ||
					document.mozFullScreenElement ||
					document.msFullscreenElement) {
				
			 if (document.exitFullscreen) {
				    document.exitFullscreen();
				  } else if (document.mozCancelFullScreen) { /* Firefox */
				    document.mozCancelFullScreen();
				  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
				    document.webkitExitFullscreen();
				  } else if (document.msExitFullscreen) { /* IE/Edge */
				    document.msExitFullscreen();
				  }
			}
		}
		
		jqElemsFullScreenTrigger.each(function() {
			new FullScreenDocument($(this));
		});
	})();
	
	(function() {
		
		var jqElemsResponsiveBgImages = $('.cover-bg-image');
		if (jqElemsResponsiveBgImages.length === 0) return;
		
		var ResponsiveBgImage = function(jqElem) {
			this.jqElem = jqElem;
			this.jqElemImg = jqElem.find("img:first");
			if (this.jqElemImg.length === 0) return; 
			this.src = '';
			
			(function(_obj) {
				this.jqElem.css({
					"background-color": "green",
					"background-size": "cover",
					"background-position": "center center",
					"background-repeat": "no-repeat",
					"min-height": "200px",
					"min-width": "200px"
				});
				this.jqElemImg.css({
					"display": "none"
				});
				_obj.jqElemImg.on('load', function() {
					_obj.update();
				});
					
				if (_obj.jqElemImg.complete) {
					_obj.update();
				};
				
			}).call(this, this);
		};
		
		ResponsiveBgImage.prototype.update = function() {
			var src = typeof this.jqElemImg.prop('currentSrc') !== 'undefined' ? this.jqElemImg.prop('currentSrc') : this.jqElemImg.prop('src');
	        if (this.src !== src) {
	            this.src = src;
	            this.jqElem.css({
	            	'background-image': 'url("' + this.src + '")'
	            	});
            }
		};
		
		jqElemsResponsiveBgImages.each(function() {
			new ResponsiveBgImage($(this));
			
		});
	})();
	
	(function() {
		var areCookiesEnabled = function() {
			if (navigator.cookieEnabled) return true;
			
			// set and read cookie
			document.cookie = "cookietest=1";
			var ret = document.cookie.indexOf("cookietest=") != -1;
			
			// delete cookie
			document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
			
			return ret;
		}
		
		if (areCookiesEnabled()) return;
		
		$("html").addClass("cookies-disabled");
	})();
	
	(function() {
		var jqElemsMultipleLink = $(".qw-multiple-link");
		if (jqElemsMultipleLink.length === 0) return;
		
		(function() {
			var MultiLink = function(jqElem) {
				this.jqElem = jqElem;
				this.slideSpeed = 150;
				this.links = jqElem.data("links");
				if (!this.links || this.links.length === 0) return;
				this.jqElemA = jqElem.find("a:first").attr("role", "button");
				
				this.jqElemLinkContainer = $("<div />", {
					"class": "qw-multiple-link-links"
				}).appendTo(jqElem).hide();
				
				(function(that) {
					for (var i in this.links) {
						$("<a />", {
							"href": this.links[i]["url"],
							"text": this.links[i]["label"]
						}).appendTo(this.jqElemLinkContainer).click(function(e) {
							e.stopPropagation();
						});
					}
					
					this.jqElemA.click(function(e) {
						e.preventDefault();
						e.stopPropagation();
						that.jqElemLinkContainer.stop(true).slideToggle(that.slideSpeed);
						that.jqElem.toggleClass("open");
						
						if (that.jqElem.hasClass("open")) {
							$(window).off("click.multiLink").on("click.multiLink", function() {
								$(window).off("click.multiLink");
								that.jqElemLinkContainer.stop(true).slideUp(that.slideSpeed);
								that.jqElem.removeClass("open");
							});
						}
					});
				}).call(this, this);
			};
			
			jqElemsMultipleLink.each(function() {
				new MultiLink($(this));
			});
		})();
	})();
	
	(function() {
		var jqElemArticleComment = $(".qw-article-comment:first");
		if (jqElemArticleComment.length === 0) {
			return;
		}
		
		(function() {
			var ArticleComment = function(jqElem) {
				this.jqElem = jqElem;
				this.commentUrl = jqElem.data("comment-url");
				this.jqElemTextArea = jqElem.find("textarea:first");
				if (jqElem.data('text')) {
					this.jqElemTextArea.val($.parseJSON(jqElem.data('text')));
				}
				this.jqElemSpanCommentState = $(".qw-comment-state:first").addClass("qw-synchronized");
				
				this.jqElemError = $("<div />", {
					"class": "alert alert-danger",
					"text": "Fehler beim speichern des Textes"
				}).prependTo(jqElem).hide();
				
				(function(that) {
					this.jqElemTextArea.on('keyup.articleComment', function() {
						that.jqElemSpanCommentState.removeClass("qw-synchronized").addClass("qw-processing")
						waitForFinalEvent(function() {
							that.postText();
						}, 1000, 'keyup.articlecomment');
					});
				}).call(this, this);
			};
			
			ArticleComment.prototype.postText = function() {
				this.jqElemError.hide();
				var that = this;
				$.post(this.commentUrl, {text: this.jqElemTextArea.val()}, function(data) {
					if (data.hasOwnProperty('status') && data['status'] === 'ok') {
						that.jqElemSpanCommentState.removeClass("qw-processing").addClass("qw-synchronized");
						return;
					}
					
					that.jqElemError.show();
				}).fail(function() {
					that.jqElemError.show();
				});
			};
			
			new ArticleComment(jqElemArticleComment);
		})();
	})();
	
//	(function() {
//		var jqElemsTmplExpandingNav = $(".tmpl-expanding-navi"),
//			jqElemHtml = $("html");
//		if (0 == jqElemsTmplExpandingNav.length) return;
//
//		WebMobileNavManager = function() {
//			this.webMobileNavs = [];
//			this.currentNav = null;
//		}
//
//		WebMobileNavManager.prototype.addNav = function(webMobileNav) {
//			this.webMobileNavs.push(webMobileNav);
//		}
//		
//		WebMobileNavManager.prototype.setCurrentNav = function(webMobileNav) {
//			this.currentNav = webMobileNav;
//		}
//		
//		WebMobileNavManager.prototype.getCurrentNav = function() {
//			return this.currentNav;
//		}
//		
//		WebMobileNavManager.prototype.closeCurrentNav = function(speed) {
//			this.currentNav.closeNav(speed);
//		}
//		
//		WebMobileNavManager.prototype.removeCurrentNav = function() {
//			this.currentNav = null;
//		}
//		
//		WebMobileNavManager.prototype.isOtherNavOpen = function (webMobileNav) {
//			return this.currentNav !== null && this.currentNav !== webMobileNav;
//		}
//
//		WebMobileNavEntry = function(jqElem) {
//			this.jqElem = jqElem.css({
//				"position": "relative"
//			}).addClass('web-mobile-nav-expandable-li');
//			this.jqElemA = jqElem.children("a:first").addClass("web-mobile-nav-expandable-link");
//			this.jqElemSpanChildsToggler = $("<span/>", {"class": "nav-more-btn"}).appendTo(this.jqElemA);
//			this.jqElemUlChilds = this.jqElemA.next().hide();
//			
//			(function(_obj) {
//				if (this.jqElemA.parent().hasClass("open") || (this.jqElemUlChilds.find('li.active').length > 0)) {
//					this.jqElemUlChilds.show();
//				};
//				
//				this.jqElemSpanChildsToggler.click(function(e) {
//					e.preventDefault();
//					_obj.jqElemUlChilds.slideToggle("fast");
//					_obj.jqElemSpanChildsToggler.toggleClass("open");
//				});
//			}).call(this, this);
//		};
//
//		WebMobileNav = function(jqElem, manager) {
//			this.jqElem = jqElem.hide();
//			this.manager = manager;
//			this.isOpen = false;
//			this.isExpandable = this.jqElem.data('expandable') || false;
//			this.jqElemToggler = $(this.jqElem.data('toggler-ref'));
//			this.jqElemsLiWithChilds = this.jqElem.find("li.has-children.level-1");
//			
//			(function(_obj) {
//				if (_obj.isExpandable) {
//					_obj.jqElem.addClass("web-mobile-nav-expandable");
//					_obj.applyExpandableChildren();
//				} 
//				
//				this.jqElemToggler.click(function(e) {
//					e.preventDefault();
//					var speed = null;
//					if (_obj.manager.isOtherNavOpen(_obj)) {
//						speed = 1;
//						_obj.manager.closeCurrentNav(speed);
//					}
//					if (_obj.isOpen) {
//						_obj.closeNav(speed);
//					} else {
//						_obj.openNav(speed);
//						_obj.manager.setCurrentNav(_obj);
//						
//					}
//				});
//				
//				this.manager.addNav(_obj);
//				
//				
//			}).call(this, this);
//			
//		};
//		
//		WebMobileNav.prototype.applyExpandableChildren = function() {
//			var _obj = this;
//			this.jqElemsLiWithChilds.each(function() {
//				if ($(this).find("ul:first").children().length > 0) {
//					new WebMobileNavEntry($(this));
//				}
//			});
//		}
//
//		WebMobileNav.prototype.closeNav = function(speed) {
//			var speed = speed || WebMobileNav.DEFAULT_TOGGLE_SPEED;
//			this.jqElemToggler.removeClass("open");
//			this.jqElem.stop(true, true).slideUp(speed);
//			this.manager.removeCurrentNav();
//			this.isOpen = false;
//		}
//
//		WebMobileNav.prototype.openNav = function(speed) {
//			var speed = speed || WebMobileNav.DEFAULT_TOGGLE_SPEED;
//			this.jqElemToggler.addClass("open");
//			this.jqElem.stop(true, true).slideDown(speed);
//			this.isOpen = true;
//		}
//
//		WebMobileNav.TOGGLE_OPEN_CLASS = "open";
//		WebMobileNav.DEFAULT_TOGGLE_SPEED = 200;
//
//		var webMobileNavManager = new WebMobileNavManager();
//
//		jqElemsTmplExpandingNav.each(function() {
//			webMobileNav = new WebMobileNav($(this), webMobileNavManager);
//		});
//	})();
	
//	(function() {
//		var jqElemsPriorityNav = $(".priority-nav");
//		if (jqElemsPriorityNav.length === 0) return;
//		
//		PriorityNav = function(jqElem) {
//			this.jqElem = jqElem.css({
//				"white-space": "nowrap"
//			});
//			this.jqElemUl = jqElem.find("ul:first").css({
//				"white-space": "nowrap",
//				"position": "relative",
//				"overflow": "hidden"
//			});
//			this.jqElemLis = this.jqElemUl.children("li");
//			this.jqElemLisClones = null;
//			this.jqElemTogglerContainer = $("<div/>", {"class": "priority-nav-toggler-container"}).appendTo(this.jqElem);
//			this.jqElemToggler = $("<a/>", {"href": "#","text": jqElem.data("toggle-txt")}).css({
//				"text-decoration": "none",
//				"cursor": "pointer",
//				"position": "absolute",
//				"background": "white",
//				"border": "1px solid #e9e9e9",
//				"padding": "0px 10px",
//				"display": "flex",
//				"justify-content": "center",
//				"align-items": "center",
//				"height": this.jqElemUl.height() + "px",
//				"right": "0px",
//				"top": "0px"
//			}).hide().appendTo(this.jqElemTogglerContainer);
//			this.jqElemUlHidden = $("<ul/>", {"class": "priority-hidden-nav"}).css({
//				"position": "absolute",
//				"z-index": "400",
//				"background": "white",
//				"border":	"1px solid #e9e9e9",
//				"box-shadow": "2px 2px 3px rgba(0,0,0,0.25)",
//				"bottom": "0px",
//				"right": "0px",
//				"transform": "translateY(100%)"
//			}).hide().appendTo(this.jqElemTogglerContainer);
//			this.hiddenNavOpen = false;
//			this.jqElemLast = this.jqElemLis.last();
//			this.applyReferences();
//			this.baseWidth = jqElem.width();
//			this.smallWidth = this.baseWidth - this.jqElemToggler.outerWidth();
//			(function(_obj) {
//				
//				$("html body").click(function() {
//					if (_obj.hiddenNavOpen) {
//						_obj.hideHiddenNav();
//					}
//				});
//				
//				$(document).keyup(function(e) {
//				     if (e.keyCode == 27) {
//				    	 if (_obj.hiddenNavOpen) {
//							_obj.hideHiddenNav();
//						}
//				    }
//				});
//				
//				_obj.jqElemUlHidden.click(function(e) {
//					e.stopPropagation();
//				});
//				
//				_obj.jqElemToggler.click(function(e) {
//					e.preventDefault();
//					e.stopPropagation();
//					if (_obj.hiddenNavOpen) {
//						_obj.hideHiddenNav();
//					} else {
//						_obj.showHiddenNav();
//						console.log();
//					}
//				});
//				
//				$(window).resize(function() {
//					if (_obj.isElemOutOfBounds(_obj.jqElemLast)) {
//						_obj.jqElemToggler.show();
//					} else {
//						_obj.jqElemToggler.hide();
//					}
//					
//					if (_obj.jqElemUlHidden.children(':visible').length === 0) {
//						_obj.jqElemUlHidden.hide();
//					}
//					  _obj.UpdateWidths();
//					  
//					  _obj.jqElemUl.children("li").each(function() {
//						  var jqElemLi = $(this);
//						  if (_obj.isElemOutOfBounds(jqElemLi)) {
//							  jqElemLi.css({"opacity": "0","visibility": "hidden"});
//							  _obj.jqElemLisClones.each(function() {
//								  var liClone = $(this);
//								  if (liClone.data("priority-nav-ref-id") == jqElemLi.data("priority-nav-ref-id")) {
//									  liClone.show();
//								  }
//							  });
//						  } else {
//							  jqElemLi.css({"opacity": "1","visibility": "visible"});
//							  _obj.jqElemLisClones.each(function() {
//								  var liClone = $(this);
//								  if (liClone.data("priority-nav-ref-id") == jqElemLi.data("priority-nav-ref-id")) {
//									  liClone.hide();
//								  }
//							  });
//						  }
//					  });
//					});
//				
//				$(window).resize();
//				
//			}).call(this, this);
//		}
//		
//		PriorityNav.prototype.applyReferences = function() {
//			var num = 1;
//			this.jqElemLis.each(function() {
//				$(this).attr("data-priority-nav-ref-id", num);
//				num++;
//			});
//			
//			this.jqElemLisClones = this.jqElemLis.clone();
//			this.jqElemLisClones.hide().appendTo(this.jqElemUlHidden);
//		};
//		
//		PriorityNav.prototype.showHiddenNav = function() {
//			this.jqElemUlHidden.stop(true, true).fadeIn("fast");
//			this.hiddenNavOpen = true;
//		};
//		
//		PriorityNav.prototype.hideHiddenNav = function() {
//			this.jqElemUlHidden.stop(true, true).fadeOut("fast");
//			this.hiddenNavOpen = false;
//		};
//		
//		PriorityNav.prototype.UpdateWidths = function () {
//			this.baseWidth = this.jqElem.width();
//			this.smallWidth = this.baseWidth - this.jqElemToggler.outerWidth();
//		};
//		
//		PriorityNav.prototype.isElemLastElem = function(jqElem) {
//			return (this.jqElemLast.data("priority-nav-ref-id") == jqElem.data("priority-nav-ref-id"));
//		}
//		
//		PriorityNav.prototype.isElemOutOfBounds = function(jqElem) {
//			if (this.isElemLastElem(jqElem)) {
//				return this.baseWidth < (jqElem.position().left + jqElem.width());				
//			} else {
//				return this.smallWidth < (jqElem.position().left + jqElem.width());
//			}
//		}
//		
//		jqElemsPriorityNav.each(function(){
//			new PriorityNav($(this));
//		});
//	})();
	
	
	(function() {
		var jqElemsSideNavToggler = $(".qw-svg-info-window-toggler");
		if (jqElemsSideNavToggler.length === 0) return;
		
		
		var ToggleNav = function(jqElem) {
			this.jqElem = jqElem;
			this.jqElemNav = $(jqElem.data("nav-item"));
			if (this.jqElemNav.length === 0) return;
			
			this.jqElemNav.addClass("qw-info-window-offcanvas");
			this.isOpen = false;
			var that = this;
			
			(function(that) {
				that.jqElem.click(function() {
					that.jqElemNav.toggleClass("qw-info-window-offcanvas--open");
				});
				
			}).call(this, this);
		};
		
		jqElemsSideNavToggler.each(function() {
			new ToggleNav($(this));
		});
	})();
	
	(function() {
		var jqElemLegend = $('.qw-svg-legend');
		if (jqElemLegend.length === 0) {
			return;
		}
		jqElemLegend.parent().addClass("position-relative");
		
		var jqElemBtn = jqElemLegend.find(".btn:first");
		var jqElemLegendContent = jqElemBtn.next();
		jqElemBtn.click(function() {
			jqElemLegendContent.toggle();
		});
		
	})();
	
	(function() {
		var jqElemsSideNavToggler = $("#qw-side-nav-toggler");
		if (jqElemsSideNavToggler.length === 0) return;
		
		
		var ToggleNav = function(jqElem) {
			this.jqElem = jqElem;
			this.html = $("html");
			this.jqElemNav = $(jqElem.data("nav-item"));
			if (this.jqElemNav.length === 0) return;
			
			this.isOpen = true;
			this.cookie = getCookie('nav-open');
			if (this.cookie && this.cookie === 'false') {
				this.isOpen = false;
			}
			var that = this;
			
			
			(function(that) {
				that.jqElem.click(function() {
					if (that.isOpen) {
						that.closeNav();
						setCookie('nav-open', false);
					} else {
						that.openNav();
						setCookie('nav-open', true);
					}
				});
				
			}).call(this, this);
		};
		
		
		ToggleNav.prototype.openNav = function() {
			this.html.removeClass('qw-offcanvas-nav--is-closed');
			this.jqElem.addClass("open");
			this.isOpen = true;
			
			var that = this;
			setTimeout(function() {
				if (!that.isOpen) return;
				that.jqElem.trigger('toggleNav.open', [that]);
			}, 300);
			
		}
		
		ToggleNav.prototype.closeNav = function() {
			this.html.addClass('qw-offcanvas-nav--is-closed');
			this.jqElem.removeClass("open");
			this.isOpen = false;
			
			var that = this;
			setTimeout(function() {
				if (that.isOpen) return;
				
				that.jqElem.trigger('toggleNav.close', [that]);
			}, 300);
		}
		
		jqElemsSideNavToggler.each(function() {
			new ToggleNav($(this));
		});
	})();
	
	(function() {
//		jqElemCheckOutOfViewTop = $(".qw-app-scroll-trigger");
//		if (jqElemCheckOutOfViewTop.length === 0) {
//			return;
//		}
//		$(window).on('resize scroll', function() {
//			var bounding = jqElemCheckOutOfViewTop.get(0).getBoundingClientRect();
//			if (bounding.top < 0) {
//				jqElemCheckOutOfViewTop.addClass("is-top-out");
//			} else {
//				jqElemCheckOutOfViewTop.removeClass("is-top-out");
//			}
//		});
	})();
	
	
//	Fancybox 3
	
	(function() {
		var jqElemFancyBoxAs = $(".fancybox");
		if (jqElemFancyBoxAs.length === 0) return;
		
		jqElemFancyBoxAs.fancybox({
			protect: true,
			btnTpl: {
			    // Arrows
			    arrowLeft:
			      '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
			      '<div><i class="ifc ifc-nav-prev" aria-hidden="true"></i></div>' +
			      "</button>",

			    arrowRight:
			      '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
			      '<div><i class="ifc ifc-nav-next" aria-hidden="true"></i></div>' +
			      "</button>",

			    // This small close button will be appended to your html/inline/ajax content by default,
			    // if "smallBtn" option is not set to false
			    smallBtn:
			      '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
			      '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
			      "</button>"
			  },
		});
	})();
	(function() {
		var jqElemsGlossarable = $(".qw-glossarable");
		if (jqElemsGlossarable.length === 0) return;
		
		(function() {
			
			var QwGloassarable = function(jqElem) {
				this.jqElem = jqElem;
				this.glossaryDescriptions = {};
				// Deleted code
				// this.detailPath = jqElem.data("glossary-detail-path") || null;
				// Injected code
				this.detailPath = toLocalUrl("/user/pathsystem");
				this.detailQuery = null;
				
				if (null !== this.detailPath && this.detailPath.indexOf("?") >= 0) {
					var queryIndex = this.detailPath.indexOf("?");
					this.detailQuery = this.detailPath.substring(queryIndex);
					this.detailPath = this.detailPath.substring(0, queryIndex);
				}
				
				this.textMore = jqElem.data("text-more") || "more";
				this.contentIds = [];
				
				$(window).on("mousedown.glossarable", function() {
					jqElem.addClass("qw-mousedown");
				});
				
				$(window).on("mouseup.glossarable", function() {
					jqElem.removeClass("qw-mousedown");
				});
				
				(function(_obj) {
					this.glossaryDefs = [];
					$.each(jqElem.data("glossary"), function(index, definition) {
						//_obj.applyGlossary(definition["id"], definition["defHtmls"]);
						$.each(definition["defHtmls"], function(key, def) {
							_obj.glossaryDefs.push({"id": definition["id"], "def": def});
						});
						
						if (definition["description"]) {
							_obj.glossaryDescriptions[definition["id"]] = definition["description"];
						}
						
						if (definition["hasContent"]) {
							_obj.contentIds.push(definition["id"]);
						}
					});
					
					this.applyGlossaryDefs();
					
					_obj.createAll();
				}).call(this, this);
			};
			
			QwGloassarable.prototype.applyGlossaryDefs = function() {
				var defsOnHold = [];
				for (var i in this.glossaryDefs) {
					var def = this.glossaryDefs[i]['def'];
					if (this.isPartOfAnotherDef(def)) {
						defsOnHold.push(this.glossaryDefs[i]);
						continue;
					} 
					
					this.applyDef(this.glossaryDefs[i]['id'], def);
				}
				
				if (defsOnHold.length > 0) {
					this.glossaryDefs = defsOnHold;
					this.applyGlossaryDefs();
				}
			};
			
			QwGloassarable.prototype.isPartOfAnotherDef = function(def) {
				for (var i in this.glossaryDefs) {
					var anotherDef = this.glossaryDefs[i]['def'];
					if (anotherDef.indexOf(def) >= 0 && def != anotherDef) return true;
				}
				
				return false;
			};
			
			QwGloassarable.CLASS_NAME_GLOSSAR = "qw-glossar";
			
			QwGloassarable.prototype.applyGlossary = function(id, defHtmls) {
				var that = this;
				$.each(defHtmls, function(key, def) {
					that.applyDef(id, def);
				});
			};
			
			QwGloassarable.prototype.applyDef = function(id, def) {
				var that = this;
				that.jqElem.find(":contains('" + def + "')").each(function() {
					var jqElem = $(this);
					if (jqElem.hasClass(QwGloassarable.CLASS_NAME_GLOSSAR)) return;
					if (jqElem.hasClass("qw-not-markable") || jqElem.parents(".qw-not-markable").length > 0) return;
					if (jqElem.is("a") || jqElem.parents("a:first").length > 0) return;
					
					that.wrapDefInElement(jqElem, id, def);
				});
			};
			
			QwGloassarable.prototype.wrapDefInElement = function(jqElem, defId, def) {
				var that = this,
				//regex letters and umlaute
				regex = new RegExp("[a-zA-Z\\u00c4\\u00e4\\u00d6\\u00f6\\u00dc\\u00fc\\u00df]");
				textNodes = jqElem.contents().filter(function() {
					//just textnodes;
					return this.nodeType === 3;
				});
				
				textNodes.each(function(nodeIndex) {
					var startIndex = 0, index, text = this.textContent, next, prev, ranges = [];
					
					while ((index = text.indexOf(def, startIndex)) > -1) {
						//check next and previous letter 
						startIndex = index + def.length;
						if (index > 0) {
							prev = text.substr(index - 1, 1);
							if (prev.match(regex)) continue;
						}
						if ((index + def.length) < text.length) {
							next = text.substr(index + def.length, 1);
							if (next.match(regex)) continue;
						}
						
						range = document.createRange();
						range.setStart(this, index);
						range.setEnd(this, index + def.length);
						ranges.unshift(range);
					}
					for (var i in ranges) {
						var jqElemWrapper = that.createWrapper(defId);
						ranges[i].surroundContents(jqElemWrapper.get(0));
						if (null !== this.detailPath) {
							jqElemWrapper.append($("<a />", {
								"href": that.buildDetailPath(defId),
								"class": "qw-glossar-link"
							}).append($("<i />", {
								"class": "ifc ifc-lbahn"
							}))).data("def-id", defId);
						}
					}
				});
			};
			
			QwGloassarable.prototype.createAll = function() {
				var that = this;
				this.jqElem.find("." + QwGloassarable.CLASS_NAME_GLOSSAR).each(function() {
					var jqElem = $(this),
						defId = jqElem.data("def-id");
					if (that.glossaryDescriptions.hasOwnProperty(defId)) {
						jqElemTooltip = $("<div />", {"class": "elob-tooltip elob-not-markable"})
								.append($("<p />", {text: that.glossaryDescriptions[defId]})).on("mousedown.glossarable", function(e) {
							e.stopPropagation();
						});
						if (null !== that.detailPath) {
							jqElemTooltip.append($("<a />", {href: that.buildDetailPath(defId), text: that.textMore, target: "_blank"}))
						}
						jqElem.append(jqElemTooltip);
					}
				}).on("mousedown.glossarable", function(e) {
					e.stopPropagation();
				});
			};
			
			QwGloassarable.prototype.buildDetailPath = function(defId) {
				if (!this.detailQuery) {
					return this.detailPath + "?te=" + defId; 
				}
				
				return this.detailPath + this.detailQuery + '&te=' + defId; 
			};
			
			QwGloassarable.prototype.createWrapper = function(defId) {
				return $("<span />", {
					"class": QwGloassarable.CLASS_NAME_GLOSSAR
				}).data("def-id", defId);
				
//				if (null === this.detailPath) {
//					return $("<span />", {
//						"class": QwGloassarable.CLASS_NAME_GLOSSAR
//					}).data("def-id", defId);
//				}
//				
//				return $("<a />", {
//					"class": QwGloassarable.CLASS_NAME_GLOSSAR,
//					"href": this.buildDetailPath(defId)
//				}).data("def-id", defId);
			};
			
			jqElemsGlossarable.each(function() {
				new QwGloassarable($(this));
			});
			
			
		})();
	})();
	
	(function() {
		var jqElemsActivator = $(".qw-activator");
		$(".qw-activator").change(function() {
			var checked = $(this).prop("checked"),
				jqElemToggle = $($(this).data('activation-selector'));
			if (!$(this).data("triggered")) {
				jqElemToggle.toggle(checked);
				!$(this).data("triggered", true);
				return;
			}
			jqElemToggle.stop(true).slideToggle(checked);
		}).trigger('change');
	})();
	
	(function() {
		var jqElemCookieBanner = $(".qw-cookie-banner");
		if (jqElemCookieBanner.length === 0) return;
		
		(function() {
			var CookieBanner = function(jqElem) {
				var cookieName = jqElem.data("cookie-name");
				if (getCookie(cookieName) || getCookie('cookies-saved')) {
					return;
				}
				jqElem.removeClass("d-none");
				
				var jqElemCbxAnalytics = jqElem.find('#qw-external-cookies');
				this.jqElemBtn = jqElem.find(".btn-save-cookie").click(function() {
					setCookie(cookieName, jqElemCbxAnalytics.prop('checked'));
					//30 Tage = 30 * 24 Stunden = 720
					setCookie('cookies-saved', true, 720);
					jqElem.hide();
					window.location.reload();
				});
			};
			
			new CookieBanner(jqElemCookieBanner);
		})();
	})();
	
	(function() {
		if (typeof $.fn.tooltip != 'function') return;
		$('[data-toggle="tooltip"]').tooltip();
	})();
	
	(function() {
		var jqElemUserDataForm = $(".qw-user-data-form");
		
		if (jqElemUserDataForm.length === 0) {
			return;
		}
		
		(function() {
			var UserDataForm = function(jqElem) {
				this.jqElem = jqElem;
				
				this.jqElemSelectUniversityId = jqElem.find(".qw-user-data-form-university-id:first");
				this.jqElemGroupOtherUniversityName = jqElem.find(".qw-user-data-form-other-university-name:first");
				console.log(this.jqElemGroupOtherUniversityName)
				
				this.jqElemSelectCountryId = jqElem.find(".qw-user-data-form-country-id:first");
				this.jqElemGroupOtherCountryName = jqElem.find(".qw-user-data-form-other-country-name:first");
				
				(function(that) {
					that.jqElemSelectUniversityId.change(function() {
						that.jqElemGroupOtherUniversityName.toggle($(this).val() === 'other');
					}).change();
					
					that.jqElemSelectCountryId.change(function() {
						that.jqElemGroupOtherCountryName.toggle($(this).val() === 'other');
					}).change();
				}).call(this, this);
			};
			
			jqElemUserDataForm.each(function() {
				new UserDataForm($(this));
			});
		})();
	})();
	
	(function() {
		var jqElemQwLoginForm = $(".qw-login-form");
		if (jqElemQwLoginForm.length === 0) return;
		
		(function() {
			var LoginForm = function(jqElem) {
				this.jqElem = jqElem;
				this.jqElemCbxVisible = jqElem.find(".qw-login-visible");
				this.jqElemFormGroupVisible = this.jqElemCbxVisible.parents(".form-group:first");
				this.jqElemCbxLoginAsTutor = jqElem.find(".qw-login-as-tutor");
				this.jqElemFormGroupLoginAsTutor = this.jqElemCbxLoginAsTutor.parents(".form-group:first");
				this.jqElemInputTutorName = jqElem.find(".qw-tutor-name");
				this.jqElemFormGroupTutorName = this.jqElemInputTutorName.parents(".form-group:first");
				
				(function(that) {
					this.jqElemCbxVisible.change(function() {
						that.jqElemFormGroupLoginAsTutor.toggle($(this).prop('checked'));
						that.jqElemFormGroupTutorName.toggle(that.isTutorNameVisible());
					}).change();
					
					this.jqElemCbxLoginAsTutor.change(function() {
						that.jqElemFormGroupTutorName.toggle(that.isTutorNameVisible());
					}).change();
				}).call(this, this);
			};
			
			LoginForm.prototype.isTutorNameVisible = function() {
				return this.jqElemCbxVisible.prop('checked') && this.jqElemCbxLoginAsTutor.prop('checked');
			};
			
			new LoginForm(jqElemQwLoginForm);
		})();
	})();
	
// 	Fancybox-2 
//	(function() {
//		var jqElemFancyBoxAs = $(".fancybox");
//		if (jqElemFancyBoxAs.length === 0) return;
//		
//		jqElemFancyBoxAs.fancybox({
//				openEffect	: 'elastic',
//				closeEffect	: 'elastic',
//				mouseWheel : true,
//				margin: 50,
//				helpers: {
//					title : {
//						type : 'inside' // 'float', 'inside', 'outside' or 'over'
//					}
//				},
//				beforeShow: function () {
//			        $(".fancybox-image:first").attr("srcset", $(this.element).data("src-set")).attr("sizes", $(this.element).data("sizes"));
//				}
//		});
//	})();
	
});