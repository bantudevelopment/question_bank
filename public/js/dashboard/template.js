var Template = function() {
  
    // ------------------------------------------------------------------------
  
    this.__construct = function() {
    };
    
    // ------------------------------------------------------------------------
    
    this.comment = function(obj) {
        var output = '';
        if (obj.completed == 1) {
            output += '<div id="comment_'+ obj.comment_id +'" class="comment_complete">';
        } else {
            output += '<div id="comment_'+ obj.comment_id +'">';
        }
        output += '<span>' + obj.content + '</span>';
        
        output += '<span class="options">';
        var data_completed = (obj.completed == 1) ? 0 : 1;
        var data_completed_text = (obj.completed == 1) ? '<i class="icon-share-alt"></i>' : '<i class="icon-ok"></i>';
        output += '<a class="comment_update" data-id="' + obj.comment_id + '" data-completed="' + data_completed + '" href="api/update_comment">' + data_completed_text + '</a>';
        output += '<a data-id="'+ obj.comment_id +'" class="comment_delete" href="api/delete_comment"><i class="icon-remove"></i></a>';
        output += '</span>';
        output += '</div>';
        return output;
    };
    
    // ------------------------------------------------------------------------
    
    this.question = function(obj) {
        var output = '';
        output += '<div id="question_'+ obj.question_id +'">';
        output += '<span><a class="question_toggle" data-id="'+obj.question_id+'" id="question_title_'+ obj.question_id +'" href="#">' + obj.title + '</a></span> ';
        output += '<span class="options">';
        output += '<a class="question_update_display" data-id="' + obj.question_id + '" href="#"><i class="icon-pencil"></i></a>';
        output += '<a data-id="'+ obj.question_id +'" class="question_delete" href="api/delete_question"><i class="icon-remove"></i></a>';
        output += '</span>';
        output += '<div class="question_edit_container" id="question_edit_container_'+ obj.question_id + '"></div>';
        output += '<div class="hide" id="question_content_'+ obj.question_id +'">'+obj.content+'</div>';
        output += '</div>'; 
        return output;
    };
    
    // ------------------------------------------------------------------------
    
    this.question_edit = function(question_id) {
        var output = '';
        output += '<form method="post" class="question_edit_form form-horizontal" action="api/update_question">';
        output += '<input class="question_id" type="hidden" name="question_id" value="'+question_id+'" />';        
        output += '<div class="input-append">';
        output += '<input tabindex="1" type="text" class="title" name="title" placeholder="Question Title" />';
        output += '<input tabindex="3" type="submit" class="btn btn-success" value="Update" />';
        output += '<input type="submit" class="question_edit_cancel btn" value="Cancel" />';
        output += '</div>';
        output += '<div class="clearfix"></div>';
        output += '<textarea tabindex="2" class="content" name="content"></textarea>';
        output += '</form>';
        return output;
    };
    
    // ------------------------------------------------------------------------
    
    this.__construct();
    
};
