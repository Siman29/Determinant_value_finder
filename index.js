function refresh() {
    let caption = document.getElementById("caption");
    caption.innerHTML = "";
    let table = document.querySelector("table");
    for (var i = 0; i < table.rows.length; i++) {
        table.deleteRow(i);
    }
    table.style.border = "none";
    table.style.marginLeft = "0px";
    table.deleteRow(0);
    document.querySelector('.Number_enter').addEventListener('click', value_get);

}

function value_get() {
    let table = document.querySelector("table");
    if (table.rows.length == 0) {
        m_value = document.getElementById("m");
        n_value = document.getElementById("n");
        if ((Number(m_value.value) <= 0) || (Number(n_value.value) <= 0)) {
            alert("Enter a positive value");
        } else if (m_value.value !== n_value.value) {
            alert("Sorry , You need to have a square determinant...that is m=n ");
        } else if ((m_value.value == "") || (n_value.value == "")) {
            alert("Enter the values m and n");
        } else if ((Number(m_value.value) > 4) || (Number(n_value.value) > 4)) {
            alert("Enter a positive number Less than or equal to 4");
        } else {
            alert("Now enter the values of the determinant row-wise");
            var m = m_value.value;
            var n = n_value.value;
            var cell = [0];
            cell.pop();
            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    var ele = prompt("Please enter the number in the cell " + i + "[" + j + "]: ", "1");
                    cell.push(ele);
                }
            }
            var num = new Array(3);
            for (var i = 0; i < num.length; i++) {
                num[i] = [];
            }
            var h = 0;
            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    num[i][j] = cell[h++];
                }
            }
            /* Loop to display the elements of 2D array.  
            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    document.write(Number(num[i][j]) + " ");
                }
                document.write("<br>");
            }*/


            /*var t = table.DataTable();
        if (t.data().any()) {
            alert("Enter the refresh button to calculate again..");
        } else {*/
            table.style.border = "1px solid #000000";
            table.style.marginLeft = "200px";
            let caption = document.getElementById("caption");
            caption.innerHTML = "The Determinant is: ";

            for (var i = 0; i < m; i++) {
                let row = table.insertRow();
                for (var j = 0; j < n; j++) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(num[i][j]);
                    cell.appendChild(text);
                    cell.style.border = "1px solid #000000";
                    cell.style.padding = "2px";
                }
            }
        }
    } else {
        alert("Press The reset button to calculate again...");
    }
    return num;
}

function final_value(num) {
    m_value = document.getElementById("m");
    n_value = document.getElementById("n");
    if ((m_value.value == "") || (n_value.value == "")) {
        alert("Enter the values m and n");
    } else if (document.getElementById("caption").innerHTML == "") {
        alert("First Enter the Determinant values");
    } else {
        let table = document.querySelector("table");
        var cell = [0];
        cell.pop();
        for (var i = 0; i < table.rows.length; i++) {
            var n1 = table.rows[i].cells.length;
            for (j = 0; j < n1; j++) {
                cell.push(table.rows[i].cells[j].innerHTML);
            }
        }

        var val = value_of_determinant(cell);
        let p = document.getElementById("result_value");
        p.innerHTML = "Therefore the value of the given Determinant is: " + val;
    }


}

function value_of_determinant(cell) {
    var num = new Array(parseInt(cell.length / 2));
    for (var i = 0; i < num.length; i++) {
        num[i] = [];
    }
    var h = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            num[i][j] = cell[h++];
        }
    }
    var cell1 = [0];
    cell1.pop();
    for (var i = 0; i < 1; i++) {
        for (var j = 0; j <= num.length; j++) {
            var a = num[i][j];
            alert(a);
            cell1.push(a);
            if (num.length == 2) {
                cell1.pop();
                var d1 = num[i + 1][j - 2];
                var d2 = num[i + 1][j - 1];
                var d3 = num[i + 2][j - 2];
                var d4 = num[i + 2][j - 1];
                var d = a * [(d1 * d4) - (d2 * d3)];
            } else {
                value_of_determinant(cell1);
            }

        }
    }
}





document.querySelector('.Number_enter').addEventListener('click', value_get);
document.querySelector('.reset').addEventListener('click', refresh);
document.querySelector('.result').addEventListener('click', final_value);