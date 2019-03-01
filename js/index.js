
//add item
$("#addButton").on('click', function(event){
	//console.log("hi");
	event.preventDefault();
	var item = $('#itemInput')
	if(item.val() != "")
	{
		newHTML = `<li class="items">
					<p>${item.val()}</p>
					<div id="options">
						<button class="checkButton"> 
							check 
						</button> 
						<button class="delButton"> 
							delete 
						</button> 
					</div>
				</li> `
		$('#itemList').append(newHTML);
	}
	
	item.val("");
});


//check item
$("#itemList").on('click', '.checkButton',function(event){
	event.preventDefault();
	var item = $(this).parent().parent();
	if(item.hasClass("checked")){
		item.removeClass("checked");
	}
	else{
		item.addClass("checked");
	}
});


//delete item
$("#itemList").on('click','.delButton', function(event){
	event.preventDefault();
	$(this).parent().parent().remove();	
});