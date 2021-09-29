$(document).ready(() => {
    $(document.getElementsByTagName('button')[0]).click(function(){
        $(this).text(function(i, v){
           return v === 'Edit' ? 'Update' : 'Edit'
        });

        let newName = "";

        if($(document.getElementsByTagName('span')[0]).is(':visible')) {
            $(document.getElementsByTagName('b')[0]).hide();
            $(document.getElementsByTagName('span')[0]).hide();
            $(document.getElementsByClassName('details')[0]).append("<input type='text' class='name-input'/>");
        } else {
            $(document.getElementsByTagName('b')[0]).show();
            $(document.getElementsByTagName('span')[0]).show();
            newName = $(document.getElementsByClassName('name-input')).val();
            $(document.getElementsByTagName('span')[0]).html(newName);
            $(document.getElementsByClassName('name-input')).remove();
        }
    });

    $(document.getElementsByTagName('button')[1]).click(function(){
        $(this).text(function(i, v){
           return v === 'Edit' ? 'Update' : 'Edit'
        });

        let newSurname = "";

        if($(document.getElementsByTagName('span')[1]).is(':visible')) {
            $(document.getElementsByTagName('b')[1]).hide();
            $(document.getElementsByTagName('span')[1]).hide();
            $(document.getElementsByClassName('details')[1]).append("<input type='text' class='surname-input'/>");
        } else {
            $(document.getElementsByTagName('b')[1]).show();
            $(document.getElementsByTagName('span')[1]).show();
            newSurname = $(document.getElementsByClassName('surname-input')).val();
            $(document.getElementsByTagName('span')[1]).html(newSurname);
            $(document.getElementsByClassName('surname-input')).remove();
        }
    });

    $(document.getElementsByTagName('button')[2]).click(function(){
        $(this).text(function(i, v){
           return v === 'Edit' ? 'Update' : 'Edit'
        });

        let newEmail = "";

        if($(document.getElementsByTagName('span')[2]).is(':visible')) {
            $(document.getElementsByTagName('b')[2]).hide();
            $(document.getElementsByTagName('span')[2]).hide();
            $(document.getElementsByClassName('details')[2]).append("<input type='email' class='email-input'/>");
        } else {
            $(document.getElementsByTagName('b')[2]).show();
            $(document.getElementsByTagName('span')[2]).show();
            newEmail = $(document.getElementsByClassName('email-input')).val();
            $(document.getElementsByTagName('span')[2]).html(newEmail);
            $(document.getElementsByClassName('email-input')).remove();
        }
    });

    $(document.getElementsByTagName('button')[3]).click(function(){
        $(this).text(function(i, v){
           return v === 'Edit' ? 'Update' : 'Edit'
        });

        let newDoB = "";

        if($(document.getElementsByTagName('span')[3]).is(':visible')) {
            $(document.getElementsByTagName('b')[3]).hide();
            $(document.getElementsByTagName('span')[3]).hide();
            $(document.getElementsByClassName('details')[3]).append("<input type='date' class='date-input'/>");
        } else {
            $(document.getElementsByTagName('b')[3]).show();
            $(document.getElementsByTagName('span')[3]).show();
            newDoB = $(document.getElementsByClassName('date-input')).val();
            $(document.getElementsByTagName('span')[3]).html(newDoB);
            $(document.getElementsByClassName('date-input')).remove();
        }
    });
});
