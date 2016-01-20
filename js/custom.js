<!-- Author: Jon Tarrant -->
<!-- jQuery Debt repayment calculator -->

$(document).ready(function(){ 

	$('#debtcalc').submit(function(e) {
		e.preventDefault(); // prevents form submit whilst keeping the html required field functionality.
	});	

	$('#calc').click(function(e) { 

		$('#results table tbody tr').remove(); // if second calculation is done without page refresh remove old entries

		var loanAmount = $('#loanAmount').val(); // find loan amount
		var monthlyPayment = $('#monthlyPayment').val(); // find loan amount
		monthlyPayment = parseInt(monthlyPayment); // convert to int for later use 
		var interestRate = $('#interestRate').val(); // find interest rate amount
		var months = 0; // set months variable
		var rate = +(interestRate/12); // interest rate divided by amount of months
		var total = 0; // variable for the total interest paid

		//fallbacks
		if (monthlyPayment > loanAmount ) { // if monthly patment inputted is larger than loan amount
			alert('Your loan amount must be larger than your monthly payment.');
		}else {
			// do nothing
		}

		while (monthlyPayment < loanAmount){ // while loanAmount is larger than monthly payment
		   outstanding = +(loanAmount/100); // divide current loan amount by 100 
		   interest = +(outstanding*rate).toFixed(2); // times loan amount by interest percentage
		   loanAmount = +(loanAmount - monthlyPayment + interest).toFixed(2); // remove monthly patment from loan amount and add monthly interest. Fix to 2 decimals.
		   months++; // increment months taken
		   total = +(total + interest).toFixed(2); // add together all interest
		   var years = Math.floor(months/12); // convert months to years
		   var rem = months % 12; // remainder months

		   $('#results table tbody').append('<tr><td data-title="Time">'
		   	+ years +' years '+rem+' month</td><td data-title="Outstanding">£'
		   	+ loanAmount +'</td><td data-title="Interest paid">£' // data-title for TH when responsive.
		   	+ interest + '</td></tr>'); // add outstanding loan, interest paid and time taken to table row.

		}; 

		rem++; // final month increment
		outstanding = +(loanAmount/100); 
		interest = +(outstanding*rate).toFixed(2); // find final interest rate

		 $('#results table tbody').append('<tr><td data-title="Time">'
		   	+ years+' years '+rem+' month</td><td data-title="Outstanding">£0.00</td><td data-title="Interest">£'
		   	+ interest + '</td></tr>'); // append final table entry
		 $('.time').html(years +' years '+rem+' months <span>Repayment time</span>'); // highlight total repayment time
		 $('.total').html('£'+total+' <span>Total interest paid</span>'); // add total interest paid

		 $('.hidden-result').show(); // finally show table if hidden


	});

// shareicons

    $("#share").jsSocials({
    	 showLabel: false,
    showCount: false,
        shares: ["email", "twitter", "facebook", "googleplus", "linkedin"]
    });


});