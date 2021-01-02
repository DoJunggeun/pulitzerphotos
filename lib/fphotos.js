let info = ["Year","Photographer","Newspaper / Agency","Title / Description"];
export let fphotos = [
	['1968', 'Toshio Sakai', 'United Press International', 'Dreams of Better Times'],
	['1969', 'Moneta Sleet Jr.', 'Ebony', 'Martin Luther King Jr.\'s widow and child'],
	['1970', 'Dallas Kinney', 'Palm Beach Post (Florida)', 'Migration to Misery'],
	['1971', 'Jack Dykinga', 'Chicago Sun-Times', 'At the Lincoln and Dixon State Schools for the Retarded in Illinois.'],
	['1972', 'David Hume Kennerly', 'United Press International', 'Vietnam War in 1971'],
	['1973', 'Brian Lanker', 'Topeka Capital-Journal', 'Moment of Life'],
	['1974', 'Slava Veder', 'Associated Press', 'Burst of Joy'],
	['1976', 'Anonymous photographic staff', 'Louisville Courier-Journal and Times', 'busing in Louisville\'s schools'],
	['1978', 'J. Ross Baughman', 'Associated Press', 'Guerrilla areas in Rhodesia'],
	['1984', 'Anthony Suau', 'The Denver Post', 'Memorial Day'],
	['1997', 'Alexander Zemlianichenko', 'Associated Press', 'Russian President Boris Yeltsin dancing at a rock concert during his campaign for re-election.'],
	
]

export function getAllPostIds() {
  return fphotos.map(photo => {
	  return {
		  params: {
			  id: photo[0]
		  }
	  }
	  
  })

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  // return fileNames.map(fileName => {
  //   return {
  //     params: {
  //       id: fileName.replace(/\.md$/, '')
  //     }
  //   }
  // })
}

export function getPostData(id) {
  for (let i = 0 ; i < fphotos.length; i++ ) {
	  if (fphotos[i].includes(id)) {
		  if (fphotos[i+1] == undefined) {
			  return {
				  id,
				  author:fphotos[i][1],
				  news:fphotos[i][2],
				  title:fphotos[i][3],
				  next:'',
				  previous:fphotos[i-1][0],
		  	}
		  }
		  if (fphotos[i-1] == undefined) {
			  return {
				  id,
				  author:fphotos[i][1],
				  news:fphotos[i][2],
				  title:fphotos[i][3],
				  next:fphotos[i+1][0],
				  previous:'',
			  }
		  }
		  return {
			  id,
			  author:fphotos[i][1],
			  news:fphotos[i][2],
			  title:fphotos[i][3],
			  next:fphotos[i+1][0],
			  previous:fphotos[i-1][0],
		  }
		  break;
	  }
  }
}

