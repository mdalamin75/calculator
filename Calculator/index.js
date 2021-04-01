
var find_result = $(".result input");

function insert_number(number){
    var present_number = find_result.val();

    find_result.val(present_number + number);

};

function clear_result(){
    find_result.val('');
};

function calculet(){
   var result = eval(find_result.val());
   find_result.val(result);
};
function delete_nember(){
    var present_number = find_result.val();
    if(present_number!=''){
        find_result.val(present_number.slice(0,-1));
    };

};
function opp(){
    var mod = find_result.val();
    find_result.val(mod*-1);
};


