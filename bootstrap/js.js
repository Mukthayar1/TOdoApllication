// JavaScript Document




function lists()
{
	var todo = document.getElementById("inputs");
	var tr = document.createElement("tr")
	tr.setAttribute("id","add_row");

	var col1 = tr.insertCell(0);
	var texts =document.createTextNode(todo.value)
	col1.appendChild(texts)

	var col2 = tr.insertCell(1);
	  var button_del =document.createElement("button")
	  button_del.setAttribute("onClick","removes(this)");
	  button_del.setAttribute("class","btn btn-danger btn-block")
	  button_del.innerHTML = "Remove";
	  col2.appendChild(button_del)


	  var col3 = tr.insertCell(2);
	  var edit_btn = document.createElement("button")
	  edit_btn.setAttribute("onClick","edit(this)")
	  edit_btn.setAttribute("id","ed")
	  edit_btn.setAttribute("class","btn btn-info btn-block")
	  edit_btn.innerHTML = "Edit";
	  col3.appendChild(edit_btn)
	


	tr.appendChild(col3,col2,col1)

	var tbl = document.getElementById("main_table");

	tbl.appendChild(tr)
todo.value = ""
}


function removes(e)
{
e.parentNode.parentNode.remove()
}

function del_all()
{
	var tbl = document.getElementById("main_table").innerHTML = "";
	
}

function edit(f)
{
	document.getElementById("ed").style.display ="none";
	
	x = f.parentNode.parentNode.firstChild
	x.innerHTML = "<input type='text' id='edit_text' class='formss'/> <input type='button' onClick='save(this)' value ='save' class='btn btn-info '/> ";

}

function save(g)
{

	l = g.parentNode.parentNode.firstChild
	var edit_text =document.getElementById("edit_text")
	l.innerHTML = "<td>"+edit_text.value +"</td>";
	document.getElementById("ed").style.display ="block";
}