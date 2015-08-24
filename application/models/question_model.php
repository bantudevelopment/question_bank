<?php

class Question_model extends CRUD_model
{
    protected $_table = 'question';
    protected $_primary_key = 'question_id';
    
    // ------------------------------------------------------------------------
    
    public function __construct()
    {
        parent::__construct();
    }
    
    // ------------------------------------------------------------------------
    
}
