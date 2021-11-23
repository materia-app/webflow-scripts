// Search Fields
$(function() {

    $('.cont-1').mixItUp();
  
    var inputText1;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch1").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText1 = $("#inputSearch1").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText1.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText1)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-1').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-1').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-2').mixItUp();
  
    var inputText2;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch2").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText2 = $("#inputSearch2").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText2.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText2)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-2').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-2').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-3').mixItUp();
  
    var inputText3;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch3").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText3 = $("#inputSearch3").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText3.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText3)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-3').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-3').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-4').mixItUp();
  
    var inputText4;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch4").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText4 = $("#inputSearch4").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText4.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText4)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-4').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-4').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-5').mixItUp();
  
    var inputText5;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch5").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText5 = $("#inputSearch5").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText5.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText5)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-5').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-5').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-8').mixItUp();
  
    var inputText8;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch8").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText8 = $("#inputSearch8").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText8.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText8)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-8').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-8').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })

//

  $(function() {
  
    $('.cont-9').mixItUp();
  
    var inputText9;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch9").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText9 = $("#inputSearch9").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText9.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText9)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-9').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-9').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  // Checkboxes Fields
  function updateTextArea1() {
      var text1 = "";
      $('.cont-1 .checkbox-2:checked').each( function() {
          text1 += $(this).val() + ";\n";
      });
      $('#area1').val( text1 );
  }
  
  $('.cont-1 .checkbox-2').change(function () {
      updateTextArea1();
  });
  
  function updateTextArea2() {
      var text2 = "";
      $('.cont-2 .checkbox-2:checked').each( function() {
          text2 += $(this).val() + ";\n";
      });
      $('#area2').val( text2 );
  }
  
  $('.cont-2 .checkbox-2').change(function () {
      updateTextArea2();
  });
  
  function updateTextArea3() {
      var text3 = "";
      $('.cont-3 .checkbox-2:checked').each( function() {
          text3 += $(this).val() + ";\n";
      });
      $('#area3').val( text3 );
  }
  
  $('.cont-3 .checkbox-2').change(function () {
      updateTextArea3();
  });
  
  function updateTextArea4() {
      var text4 = "";
      $('.cont-4 .checkbox-2:checked').each( function() {
          text4 += $(this).val() + ";\n";
      });
      $('#area4').val( text4 );
  }
  
  $('.cont-4 .checkbox-2').change(function () {
      updateTextArea4();
  });
  
  function updateTextArea5() {
      var text5 = "";
      $('.cont-5 .checkbox-2:checked').each( function() {
          text5 += $(this).val() + ";\n";
      });
      $('#area5').val( text5 );
  }
  
  $('.cont-5 .checkbox-2').change(function () {
      updateTextArea5();
  });
  
  function updateTextArea6() {
      var text6 = "";
      $('.cont-6 .checkbox-2:checked').each( function() {
          text6 += $(this).val() + ";\n";
      });
      $('#area6').val( text6 );
  }
  
  $('.cont-6 .checkbox-2').change(function () {
      updateTextArea6();
  });
  
  function updateTextArea7() {
      var text7 = "";
      $('.cont-7 .checkbox-2:checked').each( function() {
          text7 += $(this).val() + ";\n";
      });
      $('#area7').val( text7 );
  }
  
  $('.cont-7 .checkbox-2').change(function () {
      updateTextArea7();
  });
  
  function updateTextArea8() {
      var text8 = "";
      $('.cont-8 .checkbox-2:checked').each( function() {
          text8 += $(this).val() + ";\n";
      });
      $('#area8').val( text8 );
  }
  
  $('.cont-8 .checkbox-2').change(function () {
      updateTextArea8();
  });
  
  function updateTextArea9() {
      var text9 = "";
      $('.cont-9 .checkbox-2:checked').each( function() {
          text9 += $(this).val() + ";\n";
      });
      $('#area9').val( text9 );
  }
  
  $('.cont-9 .checkbox-2').change(function () {
      updateTextArea9();
  });
  
  
  
  
  
  
  // Search Fields 2
  $(function() {
  
    $('.cont-1_2').mixItUp();
  
    var inputText12;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch1_2").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText12 = $("#inputSearch1_2").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText12.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText12)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-1_2').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-1_2').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-2_2').mixItUp();
  
    var inputText22;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch2_2").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText22 = $("#inputSearch2_2").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText22.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText22)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-2_2').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-2_2').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-3_2').mixItUp();
  
    var inputText32;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch3_2").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText32 = $("#inputSearch3_2").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText32.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText32)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-3_2').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-3_2').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-4_2').mixItUp();
  
    var inputText42;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch4_2").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText42 = $("#inputSearch4_2").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText42.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText42)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-4_2').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-4_2').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-5_2').mixItUp();
  
    var inputText52;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch5_2").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText52 = $("#inputSearch5_2").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText52.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText52)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-5_2').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-5_2').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  $(function() {
  
    $('.cont-8_2').mixItUp();
  
    var inputText82;
    var $matching = $();
  
    // Delay function
    var delay = (function(){
      var timer = 0;
      return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
      };
    })();
  
    $("#inputSearch8_2").keyup(function(){
      // Delay function invoked to make sure user stopped typing
      delay(function(){
        inputText82 = $("#inputSearch8_2").val().toLowerCase();
        
        // Check to see if input field is empty
        if ((inputText82.length) > 0) {            
          $( '.mix').each(function() {
            $this = $("this");
            
             // add item to be filtered out if input text matches items inside the title   
             if($(this).children('.filter-category').text().toLowerCase().match(inputText82)) {
              $matching = $matching.add(this);
            }
            else {
              // removes any previously matched item
              $matching = $matching.not(this);
            }
          });
          $('.cont-8_2').mixItUp('filter', $matching);
        }
  
        else {
          // resets the filter to show all item if input is empty
          $('.cont-8_2').mixItUp('filter', 'all');
        }
      }, 200 );
    });
  })
  
  
  
  // Checkboxes Fields 2
  function updateTextArea12() {
      var text12 = "";
      $('.cont-1_2 .checkbox-2:checked').each( function() {
          text12 += $(this).val() + ";\n";
      });
      $('#area1_2').val( text12 );
  }
  
  $('.cont-1_2 .checkbox-2').change(function () {
      updateTextArea12();
  });
  
  function updateTextArea22() {
      var text22 = "";
      $('.cont-2_2 .checkbox-2:checked').each( function() {
          text22 += $(this).val() + ";\n";
      });
      $('#area2_2').val( text22 );
  }
  
  $('.cont-2_2 .checkbox-2').change(function () {
      updateTextArea22();
  });
  
  function updateTextArea32() {
      var text32 = "";
      $('.cont-3_2 .checkbox-2:checked').each( function() {
          text32 += $(this).val() + ";\n";
      });
      $('#area3_2').val( text32 );
  }
  
  $('.cont-3_2 .checkbox-2').change(function () {
      updateTextArea32();
  });
  
  function updateTextArea42() {
      var text42 = "";
      $('.cont-4_2 .checkbox-2:checked').each( function() {
          text42 += $(this).val() + ";\n";
      });
      $('#area4_2').val( text42 );
  }
  
  $('.cont-4_2 .checkbox-2').change(function () {
      updateTextArea42();
  });
  
  function updateTextArea52() {
      var text52 = "";
      $('.cont-5_2 .checkbox-2:checked').each( function() {
          text52 += $(this).val() + ";\n";
      });
      $('#area5_2').val( text52 );
  }
  
  $('.cont-5_2 .checkbox-2').change(function () {
      updateTextArea52();
  });
  
  function updateTextArea62() {
      var text62 = "";
      $('.cont-6_2 .checkbox-2:checked').each( function() {
          text62 += $(this).val() + ";\n";
      });
      $('#area6_2').val( text62 );
  }
  
  $('.cont-6_2 .checkbox-2').change(function () {
      updateTextArea62();
  });
  
  function updateTextArea72() {
      var text72 = "";
      $('.cont-7_2 .checkbox-2:checked').each( function() {
          text72 += $(this).val() + ";\n";
      });
      $('#area7_2').val( text72 );
  }
  
  $('.cont-7_2 .checkbox-2').change(function () {
      updateTextArea72();
  });
  
  function updateTextArea82() {
      var text82 = "";
      $('.cont-8_2 .checkbox-2:checked').each( function() {
          text82 += $(this).val() + ";\n";
      });
      $('#area8_2').val( text82 );
  }
  
  $('.cont-8_2 .checkbox-2').change(function () {
      updateTextArea82();
  });
  
  function updateTextArea92() {
      var text92 = "";
      $('.cont-9_2 .checkbox-2:checked').each( function() {
          text92 += $(this).val() + ";\n";
      });
      $('#area9_2').val( text92 );
  }
  
  $('.cont-9_2 .checkbox-2').change(function () {
      updateTextArea92();
  });