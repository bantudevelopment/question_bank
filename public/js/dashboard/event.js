var Event = function() {
  
    // ------------------------------------------------------------------------
  
    this.__construct = function() {
        Result = new Result();
        create_comment();
        create_question();
        update_comment();
        update_question_display();
        update_question();
        toggle_question();
        delete_comment();
        delete_question();
    };
    
    // ------------------------------------------------------------------------
    
    var create_comment = function() {
        $("#create_comment").submit(function(evt) {
            evt.preventDefault();
            
            var url = $(this).attr('action');
            var postData = $(this).serialize();
            
            $.post(url, postData, function(o) {
                if (o.result == 1) {
                    Result.success('test');
                    var output = Template.comment(o.data);
                    $("#list_comment").append(output);
                    $("#create_comment input[type=text]").val('');
                } else {
                    Result.error(o.error);
                }
            }, 'json');
        });
    };
    
    // ------------------------------------------------------------------------
    
    var create_question = function() {
        $("#create_question").submit(function(evt) {
            evt.preventDefault();
            
            var url = $(this).attr('action');
            var postData = $(this).serialize();
            
            $.post(url, postData, function(o) {
                if (o.result == 1) {
                    Result.success('test');
                    var output = Template.question(o.data);
                    $("#list_question").append(output);
                    
                    $("#create_question input[type=text]").val('');
                    $("#create_question textarea").val('');
                    
                } else {
                    Result.error(o.error);
                }
            }, 'json');
        });
    };
    
    // ------------------------------------------------------------------------
    
    var update_comment = function() {
        $("body").on('click', '.comment_update', function(e) {
            e.preventDefault();
            
            var self = $(this);
            var url = $(this).attr('href');
            var postData = {
                comment_id: $(this).attr('data-id'),
                completed: $(this).attr('data-completed')
            };
            
            $.post(url, postData, function(o) {
                if (o.result == 1) {
                    
                    if (postData.completed == 1) {
                        $('#comment_' + postData.comment_id).addClass('comment_complete')
                        self.html('<i class="icon-share-alt"></i>');
                        self.attr('data-completed', 0);
                    } else {
                        $('#comment_' + postData.comment_id).removeClass('comment_complete')
                        self.html('<i class="icon-ok"></i>');
                        self.attr('data-completed', 1);
                    }
                    
                } else {
                    Result.error('Nothing Updated');
                }
            }, 'json');
            
        });
    };

    // ------------------------------------------------------------------------
    
    var update_question_display = function() {
        $("body").on('click', '.question_update_display', function(e) {
            e.preventDefault();
            var question_id = $(this).data('id');
            var output = Template.question_edit(question_id);
            
            $("#question_edit_container_" + question_id).html(output);
            
            // Display data after the TEMPLATE is created
            var title = $("#question_title_" + question_id).html();
            var content = $("#question_content_" + question_id).html();
            
            $("#question_edit_container_" + question_id).find('.title').val(title);
            $("#question_edit_container_" + question_id).find('.content').val(content);
        });
        
        $("body").on("click", ".question_edit_cancel", function(e) {
            e.preventDefault();
            $(this).parents('.question_edit_container').html('');
        });
    }
    
    // ------------------------------------------------------------------------

    var update_question = function() {
        $("body").on("submit", ".question_edit_form", function(e) {
            e.preventDefault();
            
            var form = $(this);
            var url = $(this).attr('action');
            var postData = {
                question_id: $(this).find('.question_id').val(),
                title: $(this).find('.title').val(),
                content: $(this).find('.content').val()
            };
            
            $.post(url, postData, function(o) {
                if (o.result == 1) {
                    Result.success("Successfully Updated Question.");
                    $("#question_title_" + postData.question_id).html(postData.title);
                    $("#question_content_" + postData.question_id).html(postData.content);
                    form.remove();
                } else {
                    Result.error("Error Saving");
                }
            }, 'json');
            
        });
        
    };
    
    // ------------------------------------------------------------------------
    
    var delete_comment = function() {
        $("body").on('click', '.comment_delete', function(e) {
            e.preventDefault();
            
            var c = confirm('Are you sure you want to delete?')
            if (c == false) return false;
            
            var self = $(this).parents('div:eq(0)');
            var url = $(this).attr('href');
            var postData = {
                'comment_id': $(this).attr('data-id')
            };
            
            $.post(url, postData, function(o) {
                if (o.result == 1) {
                    Result.success('Item Deleted.');
                    self.remove();
                } else {
                    Result.error(o.msg);
                }
            }, 'json');
        });
    };

    // ------------------------------------------------------------------------

    var delete_question = function() {
        $("body").on('click', '.question_delete', function(e) {
            e.preventDefault();
            
            var c = confirm('Are you sure you want to delete?')
            if (c == false) return false;
            
            var self = $(this).parents('div:eq(0)');
            var url = $(this).attr('href');
            var postData = {
                'question_id': $(this).attr('data-id')
            };
            
            $.post(url, postData, function(o) {
                if (o.result == 1) {
                    Result.success('Item Deleted.');
                    self.remove();
                } else {
                    Result.error(o.msg);
                }
            }, 'json');
        });
    };
    
    // ------------------------------------------------------------------------
    
    var toggle_question = function() {
        $("body").on("click", ".question_toggle", function(e) {
            e.preventDefault;
            var question_id = $(this).data('id');
            
            $("#question_content_" + question_id).toggleClass('hide');
            
        });
    };
    
    // ------------------------------------------------------------------------
    
    this.__construct();
    
};
