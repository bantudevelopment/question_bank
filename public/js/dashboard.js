var Dashboard = function() {
  
    var self = this;
  
    // ------------------------------------------------------------------------
  
    this.__construct = function() {
        Template= new Template();
        Event   = new Event();
        //Result  = new Result();
        load_comment();
        load_question();
    };
    
    // ------------------------------------------------------------------------
    
    var load_comment = function() {
        $.get('api/get_comment', function(o) {
            var output = '';
            for (var i = 0; i < o.length; i++) {
                output += Template.comment(o[i]);
            }
            
            $("#list_comment").html(output);
        }, 'json');
    };
    
    // ------------------------------------------------------------------------
    
    var load_question = function() {
        $.get('api/get_question', function(o) {
            var output = '';
            for (var i = 0; i < o.length; i++) {
                output += Template.question(o[i]);
            }
            
            $("#list_question").html(output);
        }, 'json');
    };
    
    // ------------------------------------------------------------------------
    
    this.__construct();
    
};
