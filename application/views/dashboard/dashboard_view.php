<div class="row">
    
    <div id="dashboard-side" class="span4">
        <form id="create_comment" class="form-horizontal" method="post" action="<?=site_url('api/create_comment')?>">
            <div class="input-append">
                <input type="text" name="content" placeholder="Create New Comment Item" />
                <input type="submit" class="btn btn-success" value="Create" />
            </div>
        </form>
        
        <div id="list_comment">
            <span class="ajax-loader-gray"></span>
        </div>
    </div>
    
    <div id="dashboard-main" class="span8">
        <form id="create_question" class="form-horizontal" method="post" action="<?=site_url('api/create_question')?>">
            <div class="input-append">
                <input tabindex="1" type="text" name="title" placeholder="Question Title" />
                <input tabindex="3" type="submit" class="btn btn-success" value="Create" />
            </div>
            
            <div class="clearfix"></div>
            
            <textarea tabindex="2" name="content"></textarea>
            
        </form>
        
        <div id="list_question">
            <span class="ajax-loader-gray"></span>
        </div>
    </div>
    
    
</div>
