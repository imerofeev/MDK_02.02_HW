const compare = function(a, b) {
	
	if (isNaN(a)) {
		
		// a and b are strings
		if (isNaN(b)) return a.localeCompare(b)
		
		// a string and b number
		return 1
		
	} else {
		
		// a number and b string
		if (isNaN(b)) return -1

		// a and b are numbers
		return parseFloat(a) - parseFloat(b)
		
	}

}

const sortByIndex = function(index, elem, order) {
	
	const tbody = elem.querySelector('tbody')	
	const rows  = Array.prototype.slice.call(tbody.querySelectorAll('tr'))
	
	const sorted = rows.sort((a, b) => compare(
		a.querySelectorAll('td')[index].innerHTML,
		b.querySelectorAll('td')[index].innerHTML
	))
	
	const ordered = order===sortByIndex.ASC ? sorted : sorted.reverse()
	
	ordered.forEach((row) => tbody.appendChild(row))

}

sortByIndex.ASC  = 'asc'
sortByIndex.DESC = 'desc'

const enableSorting = function(elem) {
	
	const columns = elem.querySelectorAll('th')

	Array.prototype.forEach.call(columns, (column) => {

		const index = column.cellIndex

		let order = sortByIndex.ASC

		column.onclick = (e) => {

			order = order===sortByIndex.ASC ? sortByIndex.DESC : sortByIndex.ASC

			sortByIndex(index, elem, order)

		}

	})
	
}

enableSorting(document.querySelector('.table'))