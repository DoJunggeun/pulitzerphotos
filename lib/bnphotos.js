let info = ["Year","Photographer","Newspaper / Agency","Title / Description"];
export let bnphotos = [
	['1968', 'Rocco Morabito', 'Jacksonville Journal', 'The Kiss of Life'],
	['1969', 'Edward T. Adams', 'Associated Press', 'Saigon Execution'],
	['1970', 'Steve Starr', 'Associated Press', 'Campus Guns'],
	['1971', 'John Paul Filo', 'Valley Daily News/Daily Dispatch', 'Kent State University tragedy'],
	['1972', 'Horst Faas and Michel Laurent', 'Associated Press', 'Death in Dacca'],
	['1973', 'Huynh Cong Ut', 'Associated Press', 'The Terror of War'],
	['1974', 'Anthony K. Roberts', 'freelance photographer', 'Fatal Hollywood Drama'],
	['1975', 'Gerald H. Gay', 'Seattle Times', 'Lull in the Battle'],
	['1976', 'Stanley Forman', 'Boston Herald-American', 'Fire Escape Collapse'],
	['1977_1', 'Stanley Forman', 'Boston Herald-American', 'The Soiling of Old Glory'],
	['1977_2', 'Neal Ulevich', 'Associated Press', 'Streets of Bangkok'],
	['1978', 'John Blair', 'United Press International', 'broker held hostage at gunpoint by Tony Kiritsis'],
	['1979', 'Thomas J. Kelly III', 'Pottstown Mercury', 'Tragedy on Sanatoga Road'],
	['1980', 'Anonymous', 'United Press International', 'Firing Squad in Iran'],
	['1981', 'Larry C. Price', 'Fort Worth Star-Telegram', 'Liberia'],
	['1997', 'Annie Wells', 'Press Democrat', 'Firefighter rescuing a teenager from raging floodwaters.'],
	
]

export function getAllPostIds() {
  return bnphotos.map(photo => {
	  if (photo[0] === '1974') return
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
  for (let i = 0 ; i < bnphotos.length; i++ ) {
	  if (bnphotos[i].includes(id)) {
		  if (bnphotos[i+1] == undefined) {
			  return {
				  id,
				  author:bnphotos[i][1],
				  news:bnphotos[i][2],
				  title:bnphotos[i][3],
				  next:'',
				  previous:bnphotos[i-1][0],
		  	}
		  }
		  if (bnphotos[i-1] == undefined) {
			  return {
				  id,
				  author:bnphotos[i][1],
				  news:bnphotos[i][2],
				  title:bnphotos[i][3],
				  next:bnphotos[i+1][0],
				  previous:'',
			  }
		  }
		  return {
			  id,
			  author:bnphotos[i][1],
			  news:bnphotos[i][2],
			  title:bnphotos[i][3],
			  next:bnphotos[i+1][0],
			  previous:bnphotos[i-1][0],
		  }
		  break;
	  }
  }
}

