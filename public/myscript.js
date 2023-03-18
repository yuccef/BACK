
$(document).ready(function() {
			$.getJSON("http://localhost:3001/api/customers", function(data) {
				$.each(data, function(key, customer) {
					var tr = $("<tr>");
                	tr.append("<td>" + customer.id + "</td>");
					tr.append("<td>" + customer.email + "</td>");
					tr.append("<td>" + customer.first + "</td>")
					tr.append("<td>" + customer.last + "</td>");
					tr.append("<td>" + customer.company + "</td>");
					tr.append("<td>" + customer.created_at + "</td>");
                    tr.append("<td>" + customer.counrty + "</td>");
					$("#customersTable tbody").append(tr);
				});
			});
});
