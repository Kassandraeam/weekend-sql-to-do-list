$(document).ready(function(){
    console.log('jQuery sourced.');
    getTasks();
    $('#submitBtn').on('click', inputTask);
    $('#toDoTable').on('click', '.deleteBtn', handleDelete);
})

// GET
function getTasks(){
    console.log( 'In getTasks function' );
$.ajax({
    method: 'GET',
    url: '/toDoList'
}).then(function (response){
    console.log(response);
    appendTasks(response);
}).catch(function(err){
    console.log(err);
    alert( 'Error in getTasks function' );
})
};

// POST
function inputTask(){
    console.log( 'In inputTask function' );
    let getTheTask = {
       task: $('#toDo').val(),
    }
    // console.log(getTheTask);
    $.ajax({
        method: 'POST',
        url: '/toDoList',
        data: getTheTask,
    }).then(function (response){
        console.log(response);
        getTasks();
    }).catch( function(err) {
        console.log(err);
        alert('Error in POST');
    })
}


// renderToDOM
function appendTasks(response){
    $('#toDoTable').empty();

    for (let i = 0; i < response.length; i++){
        let task = response[i];
        console.log(response[i])
        $('#toDoTable').append(`
        <tr data-id=${task.id}>
            <td>${task.task}</td>
            <td><button>Complete</button></td>
            <td><button class='deleteBtn'>Delete this Task</button></td>
        </tr>
        `)
    }
};

// PUT will update the database (This is the completed button).
// So when I hit complete button, it will will update the database and also change the button to green.

// DELETE
// When the delete button is hit it will remove it from the Database and also refresh the DOM.

// I need to make a click listener for the delete button. Did that

function handleDelete() {
    console.log('Task has been deleted');

    const id = $(this).closest('tr').data('id');
    console.log('this should be id but it is returning undefined',id);

    $.ajax({
        method: 'DELETE',
        url: `/toDoList/${id}`,
    }).then(function(response){
        console.log(response);
        getTasks(response);
    }).catch(function(err){
        console.log(err);
        alert('Error in delete on client side');
    })
}

// function handleDelete() {
//     console.log('deleted');
  
//     const id = $(this).closest('tr').data('id');
//     console.log(id);
  
//     $.ajax({
//       method: 'DELETE',
//       url: `/koalas/${id}`
//     }).then(function(response) {
//       console.log(response)
//       getKoalas(response);
//     }).catch(function(err) {
//       console.log(err);
//       alert('Error in Delete...')
//     });
//   }